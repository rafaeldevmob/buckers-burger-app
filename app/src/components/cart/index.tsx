import { useState } from "react";
import { FlatList, TouchableOpacity } from "react-native";
import { CartItem } from "../../types/CartItem";
import { Product } from "../../types/Product";
import { api } from "../../utils/api";
import { formatCurrency } from "../../utils/formatCurrency";
import { Button } from "../button";
import { MinusCircle } from "../Icons/MinusCircle";
import { PlusCircle } from "../Icons/PlusCircle";
import { OrderConfirmModal } from "../orderConfirmModal";
import { Text } from "../Text";
import { Item, ProductContainer, Actions, Image, QuantityContainer, ProductDetails, Sumary, TotalContainer } from "./style";

type CartProps ={
  cartItems: CartItem[];
  onAdd: (product: Product) => void;
  onDecrement: (product: Product) => void;
  onConfirmOrder: () => void;
  selectTable: string;
}

export function Cart({cartItems, onAdd, onDecrement, onConfirmOrder, selectTable}: CartProps){
  const [isLoading, setIsLoading] = useState(false)
  const [isModalConfirm, setIsModalConfirm] = useState(false);

  const total = cartItems.reduce((acc, cartItem) =>{
    return acc + cartItem.quantity * cartItem.product.price;
  }, 0);

  async function handleConfirmOrder(){
    setIsLoading(true);

    const payload = {
      table: selectTable,
      products: cartItems.map((cartItem) => ({
        product: cartItem.product._id,
        quantity: cartItem.quantity,
      }))
    };

    await api.post('/orders', payload);

    setIsLoading(false);
    setIsModalConfirm(true);
  }

  function handleOk(){
    onConfirmOrder();
    setIsModalConfirm(false)
  }

  return(
    <>
      <OrderConfirmModal
        visible={isModalConfirm}
        onOk={handleOk}
      />

      {cartItems.length > 0 && (
        <FlatList
        data={cartItems}
        keyExtractor={ cartItems => cartItems.product._id}
        showsVerticalScrollIndicator={false}
        style={{marginBottom: 20, maxHeight: 150}}
          renderItem={({ item: cartItem}) => (
            <Item>
              <ProductContainer>
                <Image
                source={{uri:`http://10.0.2.2:3000/uploads/${cartItem.product.imagePath}`}}
                />

                <QuantityContainer>
                  <Text
                  size={14}
                  color="#666"
                  style={{paddingRight: 10}}
                  >{cartItem.quantity}x</Text>
                </QuantityContainer>

                <ProductDetails>
                  <Text
                    size={14}
                    weight='600'
                  >{cartItem.product.name}</Text>
                  <Text
                    size={14}
                    color="#666"
                    style={{marginTop: 4}}
                  >{formatCurrency(cartItem.product.price)}</Text>
                </ProductDetails>
              </ProductContainer>
              <Actions>
                <TouchableOpacity
                onPress={() => onAdd(cartItem.product)}
                style={{marginRight: 24}}>
                  <PlusCircle/>
                </TouchableOpacity>

                <TouchableOpacity
                onPress={() => onDecrement(cartItem.product)}
                >
                  <MinusCircle/>
                </TouchableOpacity>
              </Actions>
            </Item>
          )}
        />
      )}
        <Sumary>
        <TotalContainer>
        {cartItems.length > 0 ? (
          <>
            <Text color="#666">Total</Text>
            <Text size={20} weight="600">{formatCurrency(total)}</Text>
          </>
        ):(
          <Text color="#999"
          style={{alignSelf:'center', paddingTop: 25}}>O carrinho está vazio</Text>
        )}

        </TotalContainer>
        {cartItems.length > 0 &&(
          <Button
            onPress={handleConfirmOrder}
            disabled={cartItems.length === 0}
            loading={isLoading}
          >Confirmar Pedido</Button>
        )}
        </Sumary>
    </>
  );
}