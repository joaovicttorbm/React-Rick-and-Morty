import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: ##1b1b22;
`;

export const ContainerItens = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 16px;
  max-width: 1200px;
  width: 100%;
  padding: 0 20px;
  box-sizing: border-box;
  margin-top: 80px;
`;
