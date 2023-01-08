const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')


// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())

// Set up EJS as the template engine
app.set('view engine', 'ejs');

// Set the views directory
app.set('views', path.join(__dirname, 'views'))

//routes
app.get('/', (req,res) => {
    res.send('Root Page')
})

//listen
app.listen(3000, () => {
    console.log(`LISTENING ON PORT 3000`);
})