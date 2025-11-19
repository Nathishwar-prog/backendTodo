require('dotenv').config();
require('express-async-errors'); // handle async errors
const express = require('express');
const cors = require('cors');
const path = require('path');
const connectDB = require('./utils/db');
const tasksRouter = require('./routes/tasks');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

Configure CORS to allow requests from your frontend
app.use(cors({
  origin: ['http://localhost:5173', 'http://localhost:5000', 'https://task9mern.netlify.app'],
}));
// app.use(cors());


app.use(express.json());
app.use('/api/tasks', tasksRouter);


app.get('/', (req, res) => {
  res.json({ 
    message: 'Todo App Backend API', 
    version: '1.0.0',
    endpoints: {
      tasks: '/api/tasks',
      health: '/api/health'
    }
  });
});

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

connectDB()
  .then(() => {
    const server = app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
    
  })
  .catch((error) => {
    console.error('Failed to connect to database:', error.message);
  });
