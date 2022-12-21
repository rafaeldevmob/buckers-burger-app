import styled from 'styled-components';

export const OrdersContainer = styled.div`
  width:100%;
  max-width:1216px;
  padding: 0 2rem;
  margin: 4rem auto;
  box-sizing:border-box;
`;

export const OrdersCard = styled.div`
  padding: 1.6rem;
  border:1px solid rgba(204,204,204,0.4);
  border-radius:1.6rem;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;

  header{
    padding: 0.8rem;;
    font-size:1.4rem;
    display:flex;
    align-items:center;
    gap: 0.8rem;;
  }
`;

export const OrdersCardBody = styled.div`
  display:flex;
  flex-direction:column;
  width:100%;

  button{
    background:#fff;
    border:1px solid rgba(204,204,204,0.4);
    border-radius:.8rem;
  }
`;
