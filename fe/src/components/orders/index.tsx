import React from 'react';
import { Order } from '../../types/orders';
import OrdersCard from '../ordersCard';
import { OrdersContainer } from './styles';

const orders: Order[] =[
  {
    '_id': '624526',
    'table': '123',
    'status': 'WAITING',
    'products': [
      {
        'product': {
          'name': 'Pizza Quatro Queijos',
          'imagePath': '13135131-coca-cola.png',
          'price': 40
        },
        'quantity': 3,
        '_id':'546541251'
      },
    ]
  },
];

export default function Orders(){
  return(
    <OrdersContainer>
      <OrdersCard
        title='Fila de espera'
        orders={orders}
      />
      <OrdersCard
        title='Em Preparo'
        orders={[]}
      />
      <OrdersCard
        title='Finalizado'
        orders={[]}
      />
    </OrdersContainer>
  );
}