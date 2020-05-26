const express = require('express')
const router = express.Router()

router.get('/', (req, res, next) =>{
    res.status(200).send({
        mesage: "Return all products"
    })
})

router.get('/:id_product', (req, res, next) =>{
    const id = req.params.id_product
    res.status(200).send({
        mesage: "Return a specific product",
        id: id
    })
})

router.post('/', (req, res, next) =>{
    const product = {
        name: req.body.name,
        price: req.body.price
    }

    res.status(201).send({
        mesage: "Product posted",
        productCreated: product
    })
})

router.patch('/', (req, res, next) =>{
    res.status(201).send({
        mesage: "Product updated"
    })
})

router.delete('/', (req, res, next) =>{
    res.status(201).send({
        mesage: "Product deleted"
    })
})

module.exports = router