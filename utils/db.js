const mongoose = require('mongoose');

const connectDB = async () => {
  const uri = process.env.MONGO_URI;
  
  
  if (!uri) {
    throw new Error('MONGO_URI not set in environment variables. Please set MONGO_URI in Render dashboard.');
  }
  

  if (uri.startsWith('mongodb+srv://')) {
    if (!uri.includes('.mongodb.net')) {
      throw new Error('Invalid MongoDB Atlas URI');
    }
    
  
  try {
    await mongoose.connect(uri, { 
      useNewUrlParser: true, 
      useUnifiedTopology: true 
    });
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('MongoDB connection error:', error.message);
    
    
    if (error.message.includes('auth') || error.message.includes('authentication')) {
      console.error('Authentication failed. Please check:');
    }
    
    throw error;
  }
};

module.exports = connectDB;
