const mongoose = require('mongoose')
const itemListSchema = new mongoose.Schema({
    textInput: {
        type: String,
        required: true,
    },
    numberInput: {
        type: Number,
        required: true
    },
    data: {
        type: Date,
        default: Date.now()
    }
})

module.exports = mongoose.model('Itemlist', itemListSchema, 'items') // Itemlist = name / schema / items = collection

//MONGODB
// CLUSTER -> DATABASE -> COLLECTIONS -> DOCUMENTS
// EACH SCHEMA IS A BLUEPRINT FOR THE DOCUMENT IN THE COLLECTION