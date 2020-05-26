const express = require('express')
const app = express()
const morgan = require('morgan')
const bodyParser = require('body-parser')

const routeProducts = require('./src/routes/products')
const routeOrders = require('./src/routes/orders')

app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use((req, res, next) =>{    
    res.header('Acess-Control-Allow-Origin', '*')
    res.header(
        'Acess-Control-Allow-Header',
        'Origin, X-Requested-With, Content-Type, Accept, Authorization' 
    )

    if (req.method === 'OPTIONS') {
        res.header('Access-Control-Allow-Methods', 'PUT, POST, PATCH, DELETE, GET')
        return res.status(200).send({})
    }

    next()
})

app.use('/products', routeProducts)
app.use('/orders', routeOrders)

app.use((req, res, next) =>{
    const error = new Error('Not found')
    error.status = 404
    next(error)
})

app.use((error, req, res, next) => {
    res.status(error.status || 500)
    return res.send({
        error: {
            message: error.message
        }
    })
})

module.exports = app