import React, { useState } from 'react';
import { Order } from '../../types/orders';
import { api } from '../../utils/api';
import OrderModal from '../orderModal';
import { OrdersCardBody, OrdersCards } from './styled';

type OrdersCardProps = {
  title:string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
}

export default function OrdersCard({title, orders,onCancelOrder}: OrdersCardProps){
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOrder,setSelectedOrder] = useState<null | Order>(null);
  const [isLoading, setIsLoading] = useState(false);

  function handleOpenModal(order: Order){
    setModalVisible(true);
    setSelectedOrder(order);
  }

  function handleCloseModal(){
    setModalVisible(false);
    setSelectedOrder(null);
  }

  //usada para deletar a ordem na backend
  async function handleCancelOrder(){
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    onCancelOrder(selectedOrder!._id);
    setIsLoading(false);
    setModalVisible(false);
  }

  return(
    <>
      <OrdersCards>
        <OrderModal
          visible={modalVisible}
          order={selectedOrder}
          onClose={handleCloseModal}
          onCancelOrder={handleCancelOrder}
          isLoading={isLoading}
        />

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