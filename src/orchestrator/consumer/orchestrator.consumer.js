export default function (container) {
    return async ({message}) => {
        const { event, payload } = parseMessage(message)

        switch (event) {
        case event === 'created':
            return await container.ProcessOrder(
                payload.orderId,
                payload.itemId,
                payload.quantity
            )
        default:
            return
        }
    }
}

const parseMessage = (message) => {
    const event = message.key.toString()
    const valueObject = JSON.parse(message.value.toString())
    const payload = {
        orderId: parseInt(valueObject.orderId),
        itemId: valueObject.itemId,
        quantity: parseInt(valueObject.quantity)
    }
    console.log({key: event, value: payload})
    return { event, payload }
}
