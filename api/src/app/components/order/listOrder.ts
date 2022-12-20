import { Request, Response } from 'express';

import { Order } from '../../models/order';

export async function listOrder(req: Request,res: Response){
  try {
    const orders = await Order.find().sort({ createdAd: 1 }).populate('products.product');

    res.json(orders);
  }catch (error){
    console.log(`orders: ${error}`);
    res.sendStatus(500);
  }

}