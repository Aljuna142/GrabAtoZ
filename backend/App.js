import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();

app.use(bodyParser.json());
app.use(cors());

app.use('/api/products', productRoutes);

// Connecting to the MongoDB 
const MONGO_URI = process.env.MONGO_URI || 'mongodb://localhost:27017/grabatoz';
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});


const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
