export function createProcessOrderUsecaseFactory () {
    return async (orderId, itemId, quantity) => {
        return {orderId, itemId, quantity}
        //throw new OrderProcessFailedError(orderId)
    }
}
