
import Product from '../models/Product.js';
import ErrorHandler from '../utils/errorHandler.js';
import catchAsyncError from '../middleware/catchAysncError.js';

//{{base_url}}/api/v1/getAllProducts
export const getAllProducts = catchAsyncError(async (req, res, next) => {
  const products = await Product.find();
  res.status(200).json({
    success: true,
    products,
  });
});

//{{base_url}}/api/v1/product/:id
export const getProductById = catchAsyncError(async (req, res, next) => {
  const product = await Product.findById(req.params.id);
  if (!product) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    product,
  });
});

//{{base_url}}/api/v1/product/new
export const createProduct = catchAsyncError(async (req, res, next) => {
  const { name, description, price, ratings, category, stock, imageUrl, numOfReviews, reviews, seller } = req.body;
  const newProduct = new Product({ name, description, price, ratings, category, stock, imageUrl, numOfReviews, reviews, seller });
  const savedProduct = await newProduct.save();
  res.status(201).json({
    success: true,
    product: savedProduct,
  });
});

//{{base_url}}/api/v1/product/:id
export const updateProduct = catchAsyncError(async (req, res, next) => {
  const updatedProduct = await Product.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!updatedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    product: updatedProduct,
  });
});

//{{base_url}}/api/v1/product/:id
export const deleteProduct = catchAsyncError(async (req, res, next) => {
  const deletedProduct = await Product.findByIdAndDelete(req.params.id);
  if (!deletedProduct) {
    return next(new ErrorHandler('Product not found', 404));
  }
  res.status(200).json({
    success: true,
    message: 'Product deleted',
  });
});
