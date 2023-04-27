import express from "express";
import asyncHandler from 'express-async-handler';
import Product from "../models/productModel.js";

const router = express.Router();

router.get('/', asyncHandler(async(req,res) => {
    const products = await Product.find({});
    res.json(products);
}))

router.get('/:id',asyncHandler(async(req,res) => {
  const id = req.params.id;
  //let product = products.find(p => p._id == id);
 // if (!product)
     // return res.status(404).json({error: 'Product not found'});
 // res.json(product);

 const product = await Product.findById(id);
    if(product){
    res.json(product);
    }
    else{
        res.status(404);
        throw new Error('Product not found');
    }

}))


export default router;
