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

client.on('error', (err) => console.log('Redis Client Error', err));

client.on('connect', () => {
    console.log('Worker connected to Redis.');
});

async function processSubmission(submission) {
    const { problemId, code, language } = JSON.parse(submission);

    console.log({ problemId, code, language });
    // Here you would add your actual processing logic
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log(`Finished processing submission for problemId ${problemId}.`);
}


// Popping from redis queue
async function startWorker() {
    try {
        await client.connect();
        console.log("Worker connected to Redis.");

        // Main loop
        while (true) {
            try {
                const submission = await client.brPop("problems", 0);
                // @ts-ignore
                await processSubmission(submission.element);
            } catch (error) {
                console.error("Error processing submission:", error);
                // Implement your error handling logic here.
            }
        }
    } catch (error) {
        console.error("Failed to connect to Redis", error);
    }
}

startWorker();
