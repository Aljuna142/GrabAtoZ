
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';
import errorMiddleWare from './middleware/error.js';

dotenv.config(); 

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Routing the API
app.use('/api/v1', productRoutes);

// Error Handling Middleware
app.use(errorMiddleWare);

// Connecting to MongoDB
const MONGO_URI = process.env.MONGO_URI;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error.message);
});

// Starting The Server
const PORT = process.env.PORT || 5000; // Fallback to port 5000 if PORT is not defined in .env
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} Successfully in ${process.env.NODE_ENV} mode`);
});
