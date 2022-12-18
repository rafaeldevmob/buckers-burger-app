import { Request, Response } from 'express';

import { Product } from '../../models/product';

export async function createOrder(req: Request,res: Response){
  try {
    const products = await Product.find();

    res.json(products);
  }catch (error){
    console.log(`createProducts: ${error}`);
    res.sendStatus(500);
  }

}