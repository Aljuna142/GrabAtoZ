import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';

dotenv.config(); // Load configuration variables from .env file

const app = express();

// This is the Middleware
app.use(bodyParser.json());
app.use(cors());

// Routing the API
app.use('/api/products', productRoutes);

// Connecting to the MongoDB using environment variable
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/grabatoz';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});

// Starting the server using environment variable for port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
