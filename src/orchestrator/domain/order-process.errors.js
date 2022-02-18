export class OrderProcessFailedError extends Error {
    constructor (orderId) {
        const message = `Could not process order : ${orderId}`
        super(message)
        this.name = 'OrderProcessFailedError'
    }
}
