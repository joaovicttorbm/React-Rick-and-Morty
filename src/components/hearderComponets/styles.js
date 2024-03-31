import styled from "styled-components";

export const TopHeader = styled.div`
  background: #171717;
  height: 56px;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
`;

export const LogoImage = styled.img`
  border-radius: 50%;
  width: 100px;
  height: 50px;
  object-fit: cover;
`;

export const HeaderText = styled.p`
  color: #ffffff;
  margin: 0;
  padding: 0 20px;
  white-space: nowrap;
  @media screen and (max-width: 767px) {
    text-align: center;
  }

  @media screen and (min-width: 768px) {
    text-align: center;
  }
`;
