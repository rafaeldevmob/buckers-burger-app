import { Request, Response } from 'express';

import { Order } from '../../models/order';

export async function deleteOrder(req: Request,res: Response){
  try {
    const {orderId} = req.params;

    await Order.findByIdAndDelete(orderId);

    res.sendStatus(204);
  }catch (error){
    console.log(`deleteOrder: ${error}`);
    res.sendStatus(500);
  }
}