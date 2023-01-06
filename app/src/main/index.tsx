import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../components/button";
import { Cart } from "../components/cart";
import { Categories } from "../components/categories";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { TableModal } from "../components/modal";
import { CartItem } from "../types/CartItem";
import {
   Container,
   CategoriesContainer,
   MenuContainer,
   Footer,
   FooterContainer } from "./styles";

export function Main(){
  const [modalVisible, setModalVisible] = useState(false);
  const [selectTable, setSelectTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  function handleSaveTable(table: string) {
    setSelectTable(table);
  }

  function handleCancelOrder(){
    setSelectTable('');
  }

  return(
   <>
    <Container>
      <Header
        selectTable={selectTable}
        onCancelOrder={handleCancelOrder}
      />

      <CategoriesContainer>
        <Categories/>
      </CategoriesContainer>

      <MenuContainer>
        <Menu/>
      </MenuContainer>

    </Container>
    <Footer>
      <FooterContainer>
        {!selectTable && (
          <Button onPress={()=> setModalVisible(true)}>Novo Pedido</Button>
        )}
        {selectTable && (
          <Cart cartItems={cartItems}/>
        )}
      </FooterContainer>
    </Footer>
    <TableModal
    visible={modalVisible}
    onClose={()=> setModalVisible(false)}
    onSave={handleSaveTable}
    />
    </>
  );
}