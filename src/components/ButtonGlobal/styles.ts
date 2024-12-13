import styled from 'styled-components';

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background: linear-gradient(to bottom right, #4caf50, #2e7d32);
  transition: transform 0.3s ease, background 0.3s ease;

  border: none;
  border-radius: 10px;
  font-weight: bold;
  margin-top: 20px;

  &:hover {
    transform: scale(1.05);
    background: #144d27;
  }
`;

export const ButtonText = styled.text`
  font-size: 16px;
  font-weight: bold;
  line-height: 19px;
  color: white;
`;