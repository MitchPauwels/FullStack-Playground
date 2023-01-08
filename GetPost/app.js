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
    console.log(req.body);
    res.send('POST /tacos response')
})

// Listen
app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})