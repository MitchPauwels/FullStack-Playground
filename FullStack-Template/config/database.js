const mongoose = require('mongoose')

const connectDB = async () => {
    let tries = 0;
    while (tries < 5) {
      try {
        mongoose.set('strictQuery', false)
        const conn = await mongoose.connect(process.env.DB_CONNECTION);
        console.log(`MongoDB connected: ${conn.connection.host}`);
        return; // Return early to exit the loop
      } catch (error) {
        console.error(error);
        tries++;
      } finally {
        console.log('Finally block executed');
        // Reset the retry counter
        tries = 0;
        // Close the MongoDB connection
        mongoose.connection.close();
      }
    }
    // If the loop finishes, the connection has failed after 5 tries
    console.error('Failed to connect to MongoDB');
    process.exit(1);
  };
  
module.exports = connectDB

// // Connect to the MongoDB database
// mongoose.connect('mongodb://localhost/your_database_name', {
//   useNewUrlParser: true,
//   useUnifiedTopology: true
// });

// // Confirm connection to the database
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('Connected to MongoDB!');
// });