import express from 'express'
const router = express.Router()
import container from './container.js'
import orchestratorEndpoints from './orchestrator/api/orchestrator.api.js'

export default orchestratorEndpoints(router, container)
