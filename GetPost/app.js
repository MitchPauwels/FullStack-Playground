const express = require('express')
const app = express()
const path = require('path')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))

// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Fake existing comments
const comments = [
{
    username: 'Mitch',
    comment: 'FIRST TRY!'
},
{
    username: 'Danni',
    comment: 'The Holidays Stress Me out!'
},
{
    username: 'J9',
    comment: 'GUYS! I GOT ENGAGED!'
},
{
    username: 'Taheo',
    comment: 'I need a girlfriend'
},
{
    username: 'Ana',
    comment: 'I Got the internship!!!!!'
},
]



// Routes

app.get('/comments', (req,res) => {
    
    res.render('comments/index', {comments})
})

//================================
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