import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../components/button";
import { Cart } from "../components/cart";
import { Categories } from "../components/categories";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { TableModal } from "../components/modal";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";
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

  function handleResetOrder(){
    setSelectTable('');
    setCartItems([]);
  }

  function handleAddToCart(product: Product){
    if(!selectTable){
      setModalVisible(true);
    }

    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItems => cartItems.product._id === product._id
      );
        if(itemIndex < 0){
          return prevState.concat({
            quantity:1,
            product,
          });
        }

        const newCartItems = [...prevState];
        const item = newCartItems[itemIndex];

        newCartItems[itemIndex] = {
          ...item,
          quantity: item.quantity + 1,
        };

        return newCartItems;
    });
  }

  function handleMinusCartItem(product: Product){
    setCartItems((prevState) => {
      const itemIndex = prevState.findIndex(
        cartItems => cartItems.product._id === product._id
      );

      const item = prevState[itemIndex];
      const newCartItems = [...prevState];

      if(item.quantity === 1){

        newCartItems.splice(itemIndex, 1);

        return newCartItems;
      }

      newCartItems[itemIndex] = {
        ...item,
        quantity: item.quantity - 1,
      };

      return newCartItems;

    });
  }

  return(
   <>
    <Container>
      <Header
        selectTable={selectTable}
        onCancelOrder={handleResetOrder}
      />

      <CategoriesContainer>
        <Categories/>
      </CategoriesContainer>

      <MenuContainer>
        <Menu onAddToCart={handleAddToCart}/>
      </MenuContainer>

    </Container>
    <Footer>
      <FooterContainer>
        {!selectTable && (
          <Button onPress={()=> setModalVisible(true)}>Novo Pedido</Button>
        )}
        {selectTable && (
          <Cart
          cartItems={cartItems}
          onAdd={handleAddToCart}
          onDecrement={handleMinusCartItem}
          onConfirmOrder={handleResetOrder}
          />
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