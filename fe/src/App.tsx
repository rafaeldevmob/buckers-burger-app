import React from 'react';
import Header from './components/header/Header';
import Orders from './components/orders';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Orders/>
    </>
  );
}
