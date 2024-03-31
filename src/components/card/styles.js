import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  margim-top: 2000px;
  margin-bottom: 20px;
  background-color: #dcdcdc;
  @media screen and (max-width: 768px) {
    margin: 0 10px 20px 10px;
  }
`;

export const WrapperImage = styled.img`
  background-color: #abbbcc;
  height: 160px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;

  @media screen and (max-width: 768px) {
    height: 120px;
  }
`;

export const ContainerItens = styled.div`
  padding: 20px;

  @media screen and (max-width: 768px) {
    padding: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 24px;
  color: #333;
  margin-bottom: 10px;
`;

export const Text = styled.p`
  font-size: 16px;
  color: #666;
  margin-bottom: 5px;
`;

export const Strong = styled.strong`
  font-weight: bold;
  color: #000;
`;
