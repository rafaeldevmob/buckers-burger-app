import { useState } from "react";
import { FlatList } from "react-native";
import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../productModal";
import { Text } from "../Text";
import {ProductContainer, ProductImage, ProductDetails, Grid, AddToCartButton} from "./styles";

type MenuProps = {
  onAddToCart: (product: Product)=> void;
  products: Product[];
}

export function Menu ({onAddToCart, products }:MenuProps){
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<null | Product>(null);

  function handleOpenModal(product: Product){
    setModalVisible(true);
    setSelectedProduct(product)
  }

return (
  <>
    <FlatList
      data={products}
      style={{marginTop: 32 }}
      contentContainerStyle={{paddingHorizontal: 24 }}
      keyExtractor={product => product._id}
      ItemSeparatorComponent={Grid}
      renderItem={({ item: product}) => (
        <ProductContainer onPress={() => handleOpenModal(product)}>
          <ProductImage
            source={{uri:`http://10.0.2.2:3000/uploados/${product.imagePath}`}}
          />
          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.descritption}</Text>
            <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
          </ProductDetails>
          <AddToCartButton onPress={() => onAddToCart(product)}>
            <PlusCircle/>
          </AddToCartButton>
        </ProductContainer>
      )}/>
      <ProductModal
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      product={selectedProduct}
      onAddToCart={onAddToCart}
      />
    </>
  );
}