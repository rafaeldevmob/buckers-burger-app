import styled from 'styled-components';

export const HeaderContainer = styled.header`
  height:19.8rem;
  padding: 0 2rem;
  display:flex;
  justify-content:center;
  align-items:center;
  background: #d73035;
  box-sizing:border-box;
`;

export const HeaderContent = styled.div`
  width:100%;
  max-width:1216px;
  display:flex;
  align-items:center;
  justify-content:space-between;

  .header-details{
    h1{
      font-size:3.2rem;
      color:var(--font-white);
    }

    h2{
      margin-top:.6rem;
      font-size:1.6rem;
      font-weight:400;
      opacity:0.9;
      color:var(--font-white);
    }
  }

  .header-logo{
    display:block;
    width:100%;
    max-width:15rem;
  }
`;