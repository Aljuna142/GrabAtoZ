import express from 'express';
import { getAllProducts, getProductById, createProduct, updateProduct, deleteProduct } from '../controllers/productController.js';

const router = express.Router();
router.get('/getAllProducts', getAllProducts);
router.get('/product/:id', getProductById);
router.post('/product/new', createProduct);
router.put('/product/:id', updateProduct);
router.delete('/product/:id', deleteProduct);

export default router;

