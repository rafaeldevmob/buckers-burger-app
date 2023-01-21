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

  > .order-items{
    margin-top:1.6rem;

    .item{
      display:flex;

      & + .item{
        margin-top:1.6rem;
      }

      img{
        max-width:6rem;
        height:5rem;
        object-fit:contain;
        border-radius:.6rem;
      }

      .quantity{
        display:block;
        min-width:2rem;
        margin-left:1.2rem;
        font-size:1.4rem;
        color:#666;
      }

      .product-datails{
        margin-left:.4rem;

        strong{
          font-size:1.4rem;
          display:block;
          margin-bottom:.4rem;
        }

        span{
          font-size:1.4rem;
          color:#666;
        }
      }
  }

  }

  .total{
    margin-top:2.4rem;
    display:flex;
    align-items:center;
    justify-content: space-between;

     span{
      font-size:1.8rem;
      font-weight:500;
      opacity:0.8;
     }

     strong{
      font-size:2.4rem;
     }


  }
`;

export const ActionsModal = styled.footer`
  display:flex;
  flex-direction:column;
  margin-top:32px;

  //estilo para button disabled
  button:disabled{
    opacity:0.5;
    cursor: not-allowed;
  }

  .button-send-modal{
    display:block;
    margin:3.2rem auto 1.2rem;
    min-width:20rem;
    padding:1.2rem 2.4rem;
    background:#333333;
    border-radius:4.8rem;
    border:0;
    font-size:1.4rem;
    font-weight:900;
    color:#ffff;
  }

  .button-cancel-modal{
    font-size:1.4rem;
    font-weight:900;
    display:block;
    margin:0 auto;
    padding:1.2rem 2.4rem;
    background:transparent;
    border:0;
    color:#d73035;
  }

`;

