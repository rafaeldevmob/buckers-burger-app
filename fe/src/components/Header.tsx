import React from 'react';
import logo from '../assets/images/logo.png';

export default function Header(){
  return(
    <header>
      <div className="header-details">
        <h1>Pedidos</h1>
        <h2>Acompanhe os pedidos dos clientes</h2>
      </div>

      <img src={logo} alt='bucks'/>
    </header>
  );
}