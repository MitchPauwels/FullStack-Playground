// Declare variables
const express = require('express')
const app = express()
const PORT = 8000
const mongoose = require('mongoose')
const path = require('path')
const connectDB = require('./config/database')
require('dotenv').config({path: './config/.env'})
// Import functions/routes

// Connect to Database
connectDB()
// Set up EJS as the template engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'))
// Set the public directory
app.set(express.static('public'))

// Middleware
app.use(express.urlencoded({extended: true}))
// app.use(express.json())
// Set Routes

// Start Server
//listen
app.listen(PORT, () => {
    console.log(`LISTENING ON PORT ${PORT}`);
})