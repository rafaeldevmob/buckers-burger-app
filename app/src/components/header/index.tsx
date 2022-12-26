import { Text } from "../Text";
import { HeaderContainer } from "./styles";

export function Header(){
  return(
    <HeaderContainer>
      <Text size={14} opacity={0.9}>Bem vindo ao</Text>
      <Text size={24} weight='700'>Bucker's Burger</Text>
    </HeaderContainer>
  )
}