import styled from 'styled-components';

export const Container = styled.div`
  flex-direction: row;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContainerInput = styled.div`
align-items: center;
`;

export const Input = styled.input`
  width: 70%;
  height: 40px;
  border-radius: 5px; /* Corrigido o valor de 05px para 5px */
  font-size: 15px;
  padding: 10px;
  margin-bottom: 25px;
  color: #144d27;
  font-weight: bold;
  border: 2px solid #144d27;
`;

export const TitleInput = styled.text`
margin-left: 03px;
font-size: 16px;
margin-bottom: 05px;
color: #144d27;
font-weight: bold;
`;