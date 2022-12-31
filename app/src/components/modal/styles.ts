import styled from "styled-components/native";

export const Overlay = styled.KeyboardAvoidingView`
padding:0 24px;
  flex :1;
  align-items:stretch;
  justify-content:center;
  background:rgba(0,0,0,0.6);
`;

export const Body = styled.View`
  padding:24px;
  background: #fafafa;
  border-radius: 8px;
`;

export const Header = styled.View`
  flex-direction:row;
  align-items:center;
  justify-content: space-between;
`;

export const Form = styled.View`
  margin-top:32px;
`;

export const Input = styled.TextInput`
  margin-bottom:24px;
  padding:16px;
  border: 1px solid rgba(204,204,204, 0.5);
  border-radius:8px;
`;