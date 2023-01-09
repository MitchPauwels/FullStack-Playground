// Imports
const express = require('express')
const app = express()
const mongoose = require('mongoose')
const path = require('path')
//import the model
const Product = require('./models/product')

// Connect to the MongoDB database
main().catch(err => console.log(err));
async function main() {
    mongoose.set('strictQuery', false);

  await mongoose.connect('mongodb://127.0.0.1:27017/productApp');
  
  // use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// Confirm connection to the database
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log('Connected to MongoDB!');
});
// Set up EJS as the template engine
app.set('view engine', 'ejs');
// Set the views directory
app.set('views', path.join(__dirname, 'views'))

// Middleware
app.use(express.urlencoded({extended: true}))
app.use(express.json())


//routes
app.get('/products', async (req,res) => {
    const products = await Product.find({})
    res.render('products/index', {products})
})

app.get('/products/new' , (req,res) => {
  res.render('products/new')
})

app.post('/products', async(req,res) => {
  //Make new product
  const newProduct = new Product(req.body)
  await newProduct.save()
  res.redirect(`/products/${newProduct._id}`)
})

app.get('/products/:id', async (req,res) => {
  const {id} = req.params
  // console.log(id);
  const product = await Product.findById(id)
  res.render('products/show', {product})
  console.log(product); // Brocoli
})


//listen
app.listen(3000, () => {
    console.log(`LISTENING ON PORT 3000`);
})