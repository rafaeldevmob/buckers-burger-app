import { Request, Response } from 'express';

import { Product } from '../../models/product';

export async function getProductsByCategory(req: Request,res: Response){
  try {
    const { categoryId }= req.params;

    const products = await Product.find().where('category').equals(categoryId);

    res.json(products);
  }catch (error){
    console.log(`createProducts: ${error}`);
    res.sendStatus(500);
  }

}