import { Request, Response } from 'express';

import { Product } from '../../models/product';

export async function createProducts(req: Request,res: Response){
  try {
    const imagePath = req.file?.filename;
    const {name, description, price, ingredients, category} = req.body;

    const product = await Product.create({
      name,
      description,
      imagePath,
      price: Number(price),
      ingredients: JSON.parse(ingredients),
      category,
    });

    res.status(201).json(product);
  }catch (error){
    console.log(`createProducts: ${error}`);
    res.sendStatus(500);
  }

}