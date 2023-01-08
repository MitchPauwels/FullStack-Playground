const express = require('express')
const app = express()
const path = require('path')
const {v4: uuid} = require('uuid')
const methodOverride = require('method-override')

// Middleware
app.use(express.json())
app.use(express.urlencoded({extended:true}))
// override with POST having ?_method=PATCH
app.use(methodOverride('_method'))

// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Set the views directory
app.set("views", path.join(__dirname, "views"));

// Fake existing comments
const comments = [
{
    id: uuid(),
    username: 'Mitch',
    comment: 'FIRST TRY!'
},
{
    id: uuid(),
    username: 'Danni',
    comment: 'The Holidays Stress Me out!'
},
{
    id: uuid(),
    username: 'J9',
    comment: 'GUYS! I GOT ENGAGED!'
},
{
    id: uuid(),
    username: 'Taheo',
    comment: 'I need a girlfriend'
},
{   id: uuid(),
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
    comments.push({username, comment, id: uuid()})
    res.redirect('/comments')
})

app.get('/comments/:id', (req,res) => {
    const {id} = req.params
    // Search ID from search query with ID from Database
    const comment = comments.find(c => c.id === id)
    res.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (req,res) => {
    const {id} = req.params
    // Search ID from search query with ID from Database
    const comment = comments.find(c => c.id === id)
    res.render('comments/edit', {comment})
})

app.patch('/comments/:id',(req,res) => {
    const {id} = req.params
    // This hold whatever is there as a comment
    const newCommentText = req.body.comment
    // Search ID from search query with ID from Database
    const foundComment = comments.find(c => c.id === id)
    // Change current comment with new comment
    foundComment.comment = newCommentText
    res.redirect(`/comments/${id}`)
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