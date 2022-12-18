import { Request, Response } from 'express';

import { Category } from '../../models/category';

export async function createCategories(req: Request, res: Response){
  try {
    const { icon, name } = req.body;

    if(!name){
      return res.status(400).json({
        error: 'Name is required'
      });
    }

    const category = await Category.create({icon, name });

    res.json(category);
  } catch (error){
    console.log(`createCategory: ${error}`);
    res.sendStatus(500);
  }
}