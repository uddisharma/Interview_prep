import { Kafka } from "kafkajs";

const kafka = new Kafka({
    clientId: "my-app",
    brokers: ["localhost:9092"]
});

const producer = kafka.producer();

async function main() {
    await producer.connect();
    await producer.send({
        topic: "payment-done",
        messages: [{
            value: "hi there",
            key: "userId"   // used for send the data with this key to same partition to avoid collision / chocked data
        }]
    });
}

main();