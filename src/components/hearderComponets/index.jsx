import React from "react";
import { TopHeader, LogoImage, HeaderText } from "./styles";
import logo from "../../assets/logo.jpeg";

export default function HeaderComponent() {
  return (
    <TopHeader>
      <LogoImage src={logo} alt="Logo" />
      <HeaderText>The Rick and Morty</HeaderText>
    </TopHeader>
  );
}
