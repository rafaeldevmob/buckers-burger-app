import React from 'react';
import { ActionsModal, ModalBody, ModalDetails, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import {Order} from '../../types/orders';
import { formatCurrency } from '../../utils/formatCurrency';

type OrderModalProps = {
  visible: boolean;
  order: Order | null;
  onClose: () => void;
  onCancelOrder:()=> Promise<void>;
  isLoading: boolean;
}

export default function OrderModal({visible, order, onClose, onCancelOrder, isLoading}: OrderModalProps){
  if(!visible || !order){
    return null;
  }

  const total = order.products.reduce((total,{ product, quantity}) => {
    return total + (product.price * quantity);
  }, 0);

  return(
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button' onClick={onClose}><img src={closeIcon} alt='close'/></button>
        </header>
        <div className='Modal-Status-Container'>
          <small>Status do Pedido</small>
          <div>
            <strong>
              {order.status === 'WAITING' && 'Fila de Espera'}
              {order.status === 'IN_PRODUCTION' && 'Em Produção'}
              {order.status === 'DONE' && 'Finalizado'}
            </strong>
          </div>
        </div>
        <ModalDetails>
          <small>Itens</small>
          <div className="order-items">
            {order.products.map(({_id,product,quantity})=>(
              <div className="item" key={_id}>
                <img src={`http://localhost:3000/uploads/${product.imagePath}`} alt={product.name}/>
                <span className='quantity'>{quantity}x</span>
                <div className='product-datails'>
                  <strong>{product.name}</strong>
                  <span>{formatCurrency(product.price)}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='total'>
            <span>Total:</span>
            <strong>{formatCurrency(total)}</strong>
          </div>
        </ModalDetails>
        <ActionsModal>
          <button
            type='button'
            className='button-send-modal'
            disabled={isLoading}
          >
            <strong>Iniciar Pedido</strong>
          </button>
          <button
            type='button'
            className='button-cancel-modal'
            onClick={onCancelOrder}
            disabled={isLoading}
          >
            <strong>Cancelar Pedido</strong>
          </button>
        </ActionsModal>
      </ModalBody>
    </Overlay>
  );
}