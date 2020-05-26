const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mesage: "Return all orders"
    })
})

router.get('/:id_order', (req, res, next) =>{
    const id = req.params.id_order
    res.status(200).send({
        mesage: "Return a specific order",
        id: id
    })
})

router.post('/', (req, res, next) =>{
    const order = {
        id_product: req.body.id_product,
        quantity: req.body.quantity
    }

    res.status(201).send({
        mesage: "Order posted",
        orderCreated: order
    })
})

router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mesage: "Order deleted"
    })
})

module.exports = router