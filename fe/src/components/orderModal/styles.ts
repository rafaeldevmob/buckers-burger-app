import styled from 'styled-components';

export const Overlay = styled.div`
  width:100%;
  height:100vh;
  position:fixed;
  left:0;
  top:0;
  display:flex;
  align-items:center;
  justify-content:center;
  background:rgba(0,0,0,0.8);
  backdrop-filter:blur(4.5px);
`;

export const ModalBody = styled.div`
  width:48rem;
  border-radius:.8rem;
  padding:3.2rem;
  background: var(--background-card);

  header{
    display:flex;
    align-items: center;
    justify-content: space-between;

    strong{
      font-size:2.4rem;
    }

    button {
    line-height:0;
    border:0;
    background:transparent;
  }
  }

  .Modal-Status-Container{
    margin-top:3.2rem;

    small {
      font-size: 1.4rem;
      opacity: 0.8;
    }

    div{
      margin-top:.8rem;
      font-size: 1.6rem;
    }
  }


`;

export const ModalDetails = styled.div`
  margin-top:3.2rem;

  > small{
    font-size:1.4rem;
    font-weight:500;
    opacity:0.8;
  }
`;

