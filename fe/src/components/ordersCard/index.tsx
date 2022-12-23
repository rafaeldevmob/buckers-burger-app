import React, { useState } from 'react';
import { Order } from '../../types/orders';
import OrderModal from '../orderModal';
import { OrdersCardBody, OrdersCards } from './styled';

type OrdersCardProps = {
  title:string;
  orders: Order[];
}

export default function OrdersCard({title, orders}: OrdersCardProps){
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder,setSelectedOrder] = useState<null | Order>(null);

  function handleOpenModal(order: Order){
    setModalVisible(true);
    setSelectedOrder(order);
  }

  return(
    <>
      <OrdersCards>
        <OrderModal
          visible={modalVisible}
          order={selectedOrder}/>
        <header>
          <strong>{title}</strong>
          <span>({orders.length})</span>
        </header>
        {orders.length > 0 && (
          <OrdersCardBody>
            {orders.map((order)=> (
              <button type='button' key={order._id} onClick={() => handleOpenModal(order)}>
                <strong>Mesa {order.table}</strong>
                <span>{order.products.length} itens</span>
              </button>
            ))}
          </OrdersCardBody>
        )}
      </OrdersCards>
    </>
  );
}