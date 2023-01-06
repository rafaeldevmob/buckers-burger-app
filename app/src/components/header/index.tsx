import { TouchableOpacity } from "react-native";
import { Text } from "../Text";
import { HeaderContainer, Content, OrderHeader, TableContent } from "./styles";

type HeaderProps ={
  selectTable: string;
  onCancelOrder: () => void;
}

export function Header({selectTable, onCancelOrder}: HeaderProps){
  return(
    <HeaderContainer>
      {!selectTable && (
        <>
          <Text size={14} opacity={0.9}>Bem vindo ao</Text>
          <Text size={24} weight='700'>Bucker's Burger</Text>
        </>
      )}
    { selectTable && (
      <Content>
        <OrderHeader>
          <Text size={24} weight="600">Pedido</Text>

          <TouchableOpacity  onPress={onCancelOrder}>
            <Text color="#d73035" weight="600" size={14}>Cancelar pedido</Text>
          </TouchableOpacity>
        </OrderHeader>

        <TableContent>
          <Text color="#666">Mesa {selectTable}</Text>
        </TableContent>
      </Content>
    )}

    </HeaderContainer>
  )
}