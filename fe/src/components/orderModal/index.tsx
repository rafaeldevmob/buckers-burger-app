import React from 'react';
import { ModalBody, ModalDetails, Overlay } from './styles';
import closeIcon from '../../assets/images/close-icon.svg';
import {Order} from '../../types/orders';

type OrderModalProps = {
  visible: boolean;
  order: Order | null;
}


export default function OrderModal({visible, order}: OrderModalProps){
  if(!visible || !order){
    return null;
  }

  return(
    <Overlay>
      <ModalBody>
        <header>
          <strong>Mesa {order.table}</strong>
          <button type='button'><img src={closeIcon} alt='close'/></button>
        </header>
        <div className='Modal-Status-Container'>
          <small>Status do Pedido</small>
          <div>
            <strong>Fila de Espera</strong>
          </div>
        </div>
        <ModalDetails>
          <small>Itens</small>

        </ModalDetails>
      </ModalBody>
    </Overlay>
  );
}