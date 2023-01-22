const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
const PORT = 3000

const contactSchema = new mongoose.Schema({
    name: String,
    phone: String,
    email: String
});
const Contact = mongoose.model('Contact', contactSchema);
mongoose.connect("mongodb+srv://EdgeRunner:ri^HONHzv7&LOA&&MlbBQA3ZYXD7LXvqWVAkdVYfquMHEAL18PUUJLLd1UPlmDl&6eN8gB@cluster0.3njedca.mongodb.net/?retryWrites=true&w=majority", { useNewUrlParser: true, useUnifiedTopology: true });


// Create
app.post('/contacts', (req, res) => {
    const newContact = new Contact({
        name: req.body.name,
        phone: req.body.phone,
        email: req.body.email
    });
    newContact.save().then(() => {
        res.json({ message: 'Contact added successfully' });
    }).catch(err => {
        res.json({ message: err });
    });
});

// Read
app.get('/contacts', (req, res) => {
    Contact.find().then(contacts => {
        res.json(contacts);
    }).catch(err => {
        res.json({ message: err });
    });
})

// Update
app.put('/contacts/:id', (req, res) => {
    Contact.updateOne({ _id: req.params.id }, {
        $set: {
            name: req.body.name,
            phone: req.body.phone,
            email: req.body.email
        }
    }).then(() => {
        res.json({ message: 'Contact updated successfully' });
    }).catch(err => {
        res.json({ message: err });
    });
});

// Delete
app.delete('/contacts/:id', (req, res) => {
    Contact.deleteOne({ _id: req.params.id }).then(() => {
        res.json({ message: 'Contact deleted successfully' });
    }).catch(err => {
        res.json({ message: err });
    });
});



app.listen(PORT, () => {
    console.log(`listenning to PORT: ${PORT}`);
})