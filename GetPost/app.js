const express = require('express')
const app = express()





// app.get('/', (req,res) => {
//     res.render('index')
// })


app.get('/tacos', (req,res) => {
    res.send('GET /tacos request')
})

app.post('/tacos', (req,res) => {
    res.send('POST /tacos response')
})


app.listen(3000, () => {
    console.log('LISTENING ON PORT 3000');
})