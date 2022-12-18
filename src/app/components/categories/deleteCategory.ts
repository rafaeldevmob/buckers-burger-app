import { Request, Response } from 'express';

import { Category } from '../../models/category';

export async function deleteCategory(req: Request,res: Response){
  try {
    const {categoryId} = req.params;

    await Category.findByIdAndDelete(categoryId);

    res.sendStatus(204);
  }catch (error){
    console.log(`deleteCategory: ${error}`);
    res.sendStatus(500);
  }
}