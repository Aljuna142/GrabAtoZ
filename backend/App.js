
import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import cors from 'cors';
import productRoutes from './routes/productRoutes.js';
import dotenv from 'dotenv';

dotenv.config(); 

const app = express();

//MiddleWare
app.use(bodyParser.json());
app.use(cors());

//Routing the API
app.use('/api/v1', productRoutes);

// Connecting to  MongoDB 
const MONGO_URI = process.env.MONGO_URI ;
mongoose.connect(MONGO_URI, {
  useNewUrlParser: true, // New version

  useUnifiedTopology: true
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((error) => {
  console.error('Connection error', error);
});

//Starting The Server
const PORT = process.env.PORT ;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT} Successfully in ${process.env.NODE_ENV}`);
});

