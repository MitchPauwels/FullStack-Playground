const express = require('express');
const app = express();
const mongoose = require('mongoose');
const PORT = 3000;
const routes = require('./routes/routes');
const passport = require('passport');
const path= require('path')


app.use('/', routes);
app.use(passport.initialize());
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


mongoose.connect('mongodb://localhost/blog', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});




app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
});
