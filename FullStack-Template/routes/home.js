// Handle initial GET request for the homepage
// Handle POST Method request for adding a new item

const express = require('express')
const router = express.Router()
const homeController = require('../controllers/home')
const createItem = require('../controllers/home')


router.get('/', homeController.getIndex) // Read
router.post('/new', homeController, createItem) // create

module.exports = router