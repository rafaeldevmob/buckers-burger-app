import React from 'react';
import { OrdersCard, OrdersCardBody, OrdersContainer } from './styles';

export default function Orders(){
  return(
    <OrdersContainer>
      <OrdersCard>
        <header>
          <strong>Fila de Espera</strong>
          <span>(1)</span>
        </header>
        <OrdersCardBody>
          <button type='button'>
            <strong>Mesa 2</strong>
            <span>2 itens</span>
          </button>
        </OrdersCardBody>
      </OrdersCard>
    </OrdersContainer>
  );
}