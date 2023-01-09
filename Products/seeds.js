//import the model
const Product = require("./models/product");
// import mongoose
const mongoose = require("mongoose");

// Connect to the MongoDB database
main().catch((err) => console.log(err));
async function main() {
	mongoose.set("strictQuery", false);

	await mongoose.connect("mongodb://127.0.0.1:27017/productApp");

	// use `await mongoose.connect('mongodb://user:password@127.0.0.1:27017/test');` if your database has auth enabled
}
// Confirm connection to the database
const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
	console.log("Connected to MongoDB!");
});

// Data to populate into DB

//Create Single product
// const p = new Product({
//     name: 'Grapefruit',
//     price: 1.99,
//     category: 'fruit'
// })

// Create Multiple Products
const seedProducts = [
    {
        name: 'Kiwi',
        price: '0.30',
        category: 'fruit'
    },
    {
        name: 'Apple',
        price: '0.40',
        category: 'fruit'
    },
    {
        name: 'Cucumber',
        price: '0.80',
        category: 'vegetable'
    },
    {
        name: 'Brocoli',
        price: '1.30',
        category: 'vegetable'
    },
    {
        name: 'Milk',
        price: '2.30',
        category: 'dairy'
    },
    {
        name: 'Yoghurt',
        price: '1.20',
        category: 'fruit'
    },
];

// Save product into DB
// p.save().then(p => {
//     console.log(p);
// })
// .catch(err => {
//     console.log(err);
// })

// If anything does not pass validation, it will not be insterted (by default)
Product.insertMany(seedProducts)
.then(res => {
    console.log(res);
})
.catch(err => {
    console.log(err);
})
