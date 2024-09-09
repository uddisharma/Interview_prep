const express = require("express");
const { createClient } = require("redis");
const dotenv = require('dotenv');

dotenv.config();

const app = express();
app.use(express.json());

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});
client.on('error', (err) => console.log('Redis Client Error', err));

client.on('connect', () => {
    console.log('Worker connected to Redis.');
});

// In-memory database array
const database = [];

// <---------------------------------------------------------------------->

// Redis as Queue
// Push to redis queue
app.post("/submit", async (req, res) => {
    const { code, language, problemId } = req.body;

    try {
        await client.lPush("problems", JSON.stringify({ code, language, problemId }));
        res.status(200).send("Submission received and stored.");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to store submission.");
    }
});


// <---------------------------------------------------------------------->

// Redis as Data Store 
// Set key value
app.post("/set", async (req, res) => {
    const { key, value } = req.body;
    try {
        await client.set(key, value);
        res.status(200).send("Key set successfully.");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to set key.");
    }
})

// Get key value
app.get("/get", async (req, res) => {
    const { key } = req.query;
    try {
        const value = await client.get(key);
        res.status(200).send(value);
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to get key.");
    }
})

// <---------------------------------------------------------------------->

// Redis as cache
// Set key value with expiration
app.post("/setWithExpiration", async (req, res) => {
    const { key, value, expiration } = req.body;
    try {
        // Add to in-memory database
        database.push({ key, value, expiration });
        console.log("Database after setWithExpiration:", database);

        // Set in Redis with expiration
        await client.set(key, value, { EX: expiration });
        res.status(200).send("Key set successfully.");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to set key.");
    }
})

// Get key value from cache
app.get("/get-cache", async (req, res) => {
    const { key } = req.query;
    try {
        // Try to get from Redis
        const value = await client.get(key);
        if (value) {
            return res.status(200).json({
                value,
                from: "Redis"
            });
        }

        // If not found in Redis, check in-memory database
        const item = database.find(item => item.key === key);
        await new Promise(resolve => setTimeout(resolve, 1000));

        if (item) {
            return res.status(200).json({
                value: item.value,
                from: "Database"
            });
        } else {
            return res.status(404).send("Key not found");
        }

    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to get key.");
    }
})

// <---------------------------------------------------------------------->


// Redis as Pub/Sub

// Publish message
app.post("/publish", async (req, res) => {
    const { message } = req.body;
    try {
        await client.publish("message", message);
        res.status(200).send("Message published successfully.");
    } catch (error) {
        console.error("Redis error:", error);
        res.status(500).send("Failed to publish message.");
    }
})


// <---------------------------------------------------------------------->

async function startServer() {
    try {
        await client.connect();
        console.log("Connected to Redis");

        app.listen(3000, () => {
            console.log("Server is running on port 3000");
        });
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

startServer();