import { useState } from "react";
import { FlatList } from "react-native";
import { Product } from "../../types/Product";
import { formatCurrency } from "../../utils/formatCurrency";
import { CategoriesList as products } from "../categories/mok";
import { PlusCircle } from "../Icons/PlusCircle";
import { ProductModal } from "../productModal";
import { Text } from "../Text";
import {ProductContainer, ProductImage, ProductDetails, Grid, AddToCartButton} from "./styles";

export function Menu (){
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
            source={{uri:`http://localhost:3000/uploados/${product.imagePath}`}}
          />
          <ProductDetails>
            <Text weight="600">{product.name}</Text>
            <Text size={14} color='#666' style={{ marginVertical: 8 }}>{product.descritption}</Text>
            <Text size={14} weight="600">{formatCurrency(product.price)}</Text>
          </ProductDetails>
          <AddToCartButton>
            <PlusCircle/>
          </AddToCartButton>
        </ProductContainer>
      )}/>
      <ProductModal
      visible={modalVisible}
      onClose={() => setModalVisible(false)}
      product={selectedProduct}
      />
    </>
  );
}