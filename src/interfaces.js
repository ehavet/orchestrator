import express from 'express'
const router = express.Router()
import container from './container.js'
import orchestratorEndpoints from './orchestrator/api/orchestrator.api.js'
import orchestratorHandlers from './orchestrator/consumer/orchestrator.consumer.js'

export const routes = orchestratorEndpoints(router, container)
export const messagesHandler = orchestratorHandlers(container)
