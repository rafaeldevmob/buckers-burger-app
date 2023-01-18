import { useEffect, useState } from "react";
import { ActivityIndicator} from "react-native";
import { Button } from "../components/button";
import { Cart } from "../components/cart";
import { Categories } from "../components/categories";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { TableModal } from "../components/modal";
import { CartItem } from "../types/CartItem";
import { Product } from "../types/Product";
import { Empty } from "../components/Icons/Empty";
import { Text } from "../components/Text";
import { CategoryType } from "../types/Category";
import { api } from "../utils/api";
import {
   Container,
   CategoriesContainer,
   MenuContainer,
   Footer,
   FooterContainer,
   CenteredContainer} from "./styles";


export function Main(){
  const [modalVisible, setModalVisible] = useState(false);
  const [selectTable, setSelectTable] = useState('');
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [isLoading, setIsLoading] = useState(true)
  const [products, setProducts] = useState<Product[]>([])
  const [categories, setCategories] = useState<CategoryType[]>([])

  useEffect(() => {
    Promise.all([
      api.get('/categories'),
      api.get('/products'),
    ]).then(([categoriesRess, productsRess])=>{
      setCategories(categoriesRess.data);
      setProducts(productsRess.data);
      setIsLoading(false)
    }).catch(error =>
      console.log(`GetCategoriesAndProducts error: ${error}`));
  },[])

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

      {isLoading && (
        <CenteredContainer>
          <ActivityIndicator color="#d73035" size="large"/>
        </CenteredContainer>
      )}

      {!isLoading && (
        <>
          <CategoriesContainer>
            <Categories
              categories={categories}
            />
          </CategoriesContainer>

          {products.length > 0 ? (
            <MenuContainer>
            <Menu
            products={products}
            onAddToCart={handleAddToCart}
            />
          </MenuContainer>
          ) : (
            <CenteredContainer>
              <Empty />
              <Text color="#666" style={{marginTop: 24}}>
                Nenhum produto foi encontrado!
              </Text>
            </CenteredContainer>
          )}
        </>
      )}

    </Container>
    <Footer>
      <FooterContainer>
        {!selectTable && (
          <Button
          onPress={()=> setModalVisible(true)}
          disabled={isLoading}
          >Novo Pedido</Button>
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