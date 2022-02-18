import { createProcessOrderUsecaseFactory } from './orchestrator/domain/process-order.usecase.js'

const processOrder = createProcessOrderUsecaseFactory()

export default {
    ProcessOrder: processOrder,
}
