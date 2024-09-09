const { createClient } = require("redis");
const dotenv = require('dotenv');
dotenv.config();

const client = createClient({
    password: process.env.REDIS_PASSWORD,
    socket: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT
    }
});

// Subscribe to message

async function SubscribeToMessage() {
    try {
        await client.connect();
        console.log("Subscriber connected to Redis.");

        // Main loop
        while (true) {
            try {
                await client.subscribe("message");
                client.on("message", (channel, message) => {
                    console.log("Received message:", message);
                });

            } catch (error) {

                console.error("Error processing submission:", error);

            }
        }
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

SubscribeToMessage();