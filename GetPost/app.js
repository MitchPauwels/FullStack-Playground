const express = require('express')
const app = express()

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Routes
app.get('/tacos', (req,res) => {
    res.send('GET /tacos request')
})

app.post('/tacos', (req,res) => {
    const meat = req.body.meat
    const qty = req.body.qty
    // Can also be deconstrutured
    // const {meat, qty} = req.body
    res.send(`Meat: ${meat} Qty: ${qty}`)
})

// Listen
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})