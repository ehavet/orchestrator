import {Kafka} from 'kafkajs'

export default new Kafka({
    clientId: 'orchestrator',
    brokers: ['localhost:9092']
})
