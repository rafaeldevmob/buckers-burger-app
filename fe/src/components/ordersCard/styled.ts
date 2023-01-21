import styled from 'styled-components';

export const OrdersCards = styled.div`
  padding: 1.6rem;
  background:var(--background-table);
  border:1px solid rgba(204,204,204,0.4);
  border-radius:1.6rem;
  display:flex;
  flex-direction:column;
  align-items:center;
  flex:1;

  > header{
    padding: 0.8rem;;
    font-size:1.4rem;
    display:flex;
    align-items:center;
    gap: 0.8rem;;
  }
`;

export const OrdersCardBody = styled.div`
  margin-top:2.4rem;
  display:flex;
  flex-direction:column;
  width:100%;

  button{
    height:12.8rem;
    display:flex;
    flex-direction:column;
    justify-content:center;
    align-items:center;
    gap: 0.4rem;
    font-size:1.6rem;
    background:var(--background-card);
    border:1px solid rgba(204,204,204,0.4);
    border-radius:.8rem;

    strong{
      font-weight:500;
    }

    span{
      font-size:1.4rem;
      color:var(--font-card);
    }

    & + button{
      margin-top:2.4rem;
    }
  }


`;
