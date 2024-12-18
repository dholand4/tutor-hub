import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background: linear-gradient(to bottom right, #ffffff, #7dbb88);
`;

export const MainContainer = styled.div`
height: 500px;
width: 1200px;
border-radius: 20px;
box-shadow: 0 4px 10px black;
padding: 20px;
background-color: white;
align-items: center;
display: flex;
`;
export const Title = styled.text`
margin-top: 25px;
margin-bottom: 25px;
font-size: 25px;
font-weight: bold;
color: #144d27;
align-items: center;
`;

export const LeftSection = styled.div`
  height: 450px;
  width: 600px;
  display: flex;
  flex-direction: column;

  overflow-y: auto; 
  scrollbar-width: thin;
  scrollbar-color: gray transparent;

  &::-webkit-scrollbar {
    width: 8px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: gray;
    border-radius: 4px;
  }
  &::-webkit-scrollbar-track {
    background: transparent;
  }
`;

export const DateContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
`;

export const RightSection = styled.div`
  height: 450px;
  width: 600px;
  display: flex;
  flex-direction: column;
  align-items: center;

`;

export const OutPut = styled.div`
height: 300px;
width: 400px;
border-radius: 5px;
border: 2px solid #144d27;
`;




