import { Button } from "../components/button";
import { Categories } from "../components/categories";
import { Header } from "../components/header";
import { Menu } from "../components/menu";
import {
   Container,
   CategoriesContainer,
   MenuContainer,
   Footer,
   FooterContainer } from "./styles";

export function Main(){
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
        <Button onPress={()=> alert('ok')}>Novo Pedido</Button>
      </FooterContainer>
    </Footer>
    </>
  );
}