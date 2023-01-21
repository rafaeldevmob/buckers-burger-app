import React from 'react';
import { ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/header/Header';
import Orders from './components/orders';
import { GlobalStyles } from './styles/GlobalStyles';

export function App() {
  return (
    <>
      <GlobalStyles/>
      <Header/>
      <Orders/>
      <ToastContainer position="bottom-center"/>
    </>
  );
}
