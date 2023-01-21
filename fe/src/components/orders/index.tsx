import React, { useEffect, useState } from 'react';
import { Order } from '../../types/orders';
import { api } from '../../utils/api';
import OrdersCard from '../ordersCard';
import { OrdersContainer } from './styles';

export default function Orders(){
  const [orders, setOrders] = useState<Order[]>([]);

  useEffect(()=>{
    api.get('/orders')
      .then(({data}) => {
        setOrders(data);
    })
  },[])

  const waiting = orders.filter((order) => order.status === 'WAITING');
  const inPrduction = orders.filter((order) => order.status === 'IN_PRODUCTION');
  const done = orders.filter((order) => order.status === 'DONE');

  //função para atualizar o dashboard quando um pedido e cancelado
  function handleCancelOrder(orderId: string){
    setOrders((prevState)=> prevState.filter(order => order._id !== orderId));
  }

  return(
    <OrdersContainer>
      <OrdersCard
        title='Fila de espera'
        orders={waiting}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersCard
        title='Em Produção'
        orders={inPrduction}
        onCancelOrder={handleCancelOrder}
      />
      <OrdersCard
        title='Finalizado'
        orders={done}
        onCancelOrder={handleCancelOrder}
      />
    </OrdersContainer>
  );
}