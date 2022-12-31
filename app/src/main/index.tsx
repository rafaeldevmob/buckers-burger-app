import { useState } from "react";
import { Alert } from "react-native";
import { Button } from "../components/button";
import { Categories } from "../components/categories";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import { TableModal } from "../components/modal";
import {
   Container,
   CategoriesContainer,
   MenuContainer,
   Footer,
   FooterContainer } from "./styles";

export function Main(){
  const [modalVisible, setModalVisible] = useState(false);
  const [selectTable, setSelectTable] = useState('');

  function handleSaveTable(table: string) {
    setSelectTable(table);
  }

  return(
   <>
    <Container>
      <Header/>

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