const express = require('express')
const app = express()

const routeProducts = require('./src/routes/products')
const routeOrders = require('./src/routes/orders')
app.use('/products', routeProducts)
app.use('/orders', routeOrders)

module.exports = app