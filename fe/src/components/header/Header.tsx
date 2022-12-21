import React from 'react';
import logo from '../../assets/images/logo.png';
import { HeaderContainer, HeaderContent } from './styles';

export default function Header(){
  return(
    <HeaderContainer>
      <HeaderContent>
        <div className="header-details">
          <h1>Pedidos</h1>
          <h2>Acompanhe os pedidos dos clientes</h2>
        </div>
        <img src={logo} alt='bucks' className="header-logo"/>
      </HeaderContent>
    </HeaderContainer>
  );
}

