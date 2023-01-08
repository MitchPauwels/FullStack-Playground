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
    id: 1,
    username: 'Mitch',
    comment: 'FIRST TRY!'
},
{
    id: 2,
    username: 'Danni',
    comment: 'The Holidays Stress Me out!'
},
{
    id: 3,
    username: 'J9',
    comment: 'GUYS! I GOT ENGAGED!'
},
{
    id: 4,
    username: 'Taheo',
    comment: 'I need a girlfriend'
},
{   id: 5,
    username: 'Ana',
    comment: 'I Got the internship!!!!!'
},
]



// Routes

app.get('/comments', (req,res) => {
    res.render('comments/index', {comments})
    console.log(comments);
})

app.get('/comments/new', (req,res) => {
    res.render('comments/new')
})

app.post('/comments', (req,res) => {
    const {username, comment} = req.body
    comments.push({username, comment})
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id === parseInt(id))
    res.render('comments/show', {comment})
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