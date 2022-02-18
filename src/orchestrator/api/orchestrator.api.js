import {body, validationResult} from 'express-validator'
import {OrderProcessFailedError} from '../domain/order-process.errors.js'

export default function (router, container) {
    router.post('/order-process/',
        body('order_id').trim().notEmpty().withMessage('order_id property must be provided'),
        body('item_id').trim().notEmpty().withMessage('item_id property must be provided'),
        body('quantity').trim().notEmpty().withMessage('quantity property must be provided'),
        body('quantity').isNumeric().withMessage('quantity property must be an integer'),
        async function (req, res) {
            validateRequestData(req, res)
            try {
                res.status(200).send(await container.ProcessOrder(
                    parseInt(req.body.order_id),
                    req.body.item_id,
                    parseInt(req.body.quantity)
                ))
            } catch (error) {
                switch (true) {
                case error instanceof OrderProcessFailedError:
                    return res.boom.badData(error.message)
                default:
                    res.boom.internal(error)
                }
            }
        })

    return router
}

const validateRequestData = (req, res) => {
    const errors = validationResult(req)
    if (!errors.isEmpty()) {
        const messages = errors.array().map(element => element.msg)
        return res.boom.badRequest(messages)
    }
}
