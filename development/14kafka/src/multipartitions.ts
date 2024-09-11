import { Kafka } from 'kafkajs';

const kafka = new Kafka({
    clientId: 'my-app',
    brokers: ['localhost:9092']
});

const admin = kafka.admin();

async function createTopicWithPartitions() {
    await admin.connect();

    await admin.createTopics({
        topics: [{
            topic: 'payment-done',
            numPartitions: 3, // Specify the number of partitions you want
            replicationFactor: 1 // Set this according to your cluster setup
        }]
    });

    console.log('Topic created successfully');
    await admin.disconnect();

    const producer = kafka.producer();

    await producer.connect();
    await producer.send({
        topic: 'payment-done',
        messages: [
            { value: 'Hello', partition: 0 },
            { value: 'World', partition: 1 },
            { value: 'Kafka', partition: 2 }
        ]
    });
    console.log('Messages sent successfully');
    await producer.disconnect();
}

createTopicWithPartitions().catch(console.error);