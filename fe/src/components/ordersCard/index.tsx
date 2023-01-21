import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { Order } from '../../types/orders';
import { api } from '../../utils/api';
import OrderModal from '../orderModal';
import { OrdersCardBody, OrdersCards } from './styled';

type OrdersCardProps = {
  title:string;
  orders: Order[];
  onCancelOrder: (orderId: string) => void;
  onChangeOrderStatus: (orderId: string, status:Order['status']) => void;
}

export default function OrdersCard({title, orders,onCancelOrder,onChangeOrderStatus}: OrdersCardProps){
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

  async function handleChangeOrderStatus(){
    setIsLoading(true);

    const newStatus = selectedOrder?.status === 'WAITING' ? 'IN_PRODUCTION' : 'DONE';

    await api.patch(`/orders/${selectedOrder?._id}`, { status: newStatus});

    toast.success(`Status do pedido da mesa ${selectedOrder?.table} foi alterado!`);
    onChangeOrderStatus(selectedOrder!._id, newStatus);
    setIsLoading(false);
    setModalVisible(false);
  }

  //usada para deletar a ordem na backend
  async function handleCancelOrder(){
    setIsLoading(true);

    await api.delete(`/orders/${selectedOrder?._id}`);

    toast.success(`Pedido da mesa ${selectedOrder?.table} foi cancelado!`);
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
          onChangeOrderStatus={handleChangeOrderStatus}
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