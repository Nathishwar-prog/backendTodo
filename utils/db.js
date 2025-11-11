const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  if (!uri) throw new Error('MONGO_URI not set in .env');
  
  // Validate URI format for MongoDB Atlas
  if (uri.startsWith('mongodb+srv://') && !uri.includes('.mongodb.net')) {
    throw new Error('Invalid MongoDB Atlas URI format. Must include .mongodb.net domain');
  }
  
  try {
    await mongoose.connect(uri, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    throw error;
  }
};

module.exports = connectDB;