import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(135deg, #6b73ff, #000dff);
`;

export const Form = styled.form`
  background: #fff;
  padding: 32px;
  border-radius: 8px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
`;

export const Title = styled.h1`
  margin-bottom: 24px;
  font-size: 24px;
  text-align: center;
`;

export const Input = styled.input`
  width: 100%;
  padding: 12px;
  margin-bottom: 16px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;

  &:focus {
    border-color: #6b73ff;
    outline: none;
  }
`;

export const Button = styled.button`
  width: 100%;
  padding: 12px;
  background-color: #6b73ff;
  color: white;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  font-weight: bold;

  &:hover {
    background-color: #000dff;
  }
`;
