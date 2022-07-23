import React from "react";
import Nav from "../nav";
import styled from "styled-components";

const StyledHeader = styled.header`
  height: 100px;
  background-color: #079bf1;
  color: #fff;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Header = () => {
  return (
    <StyledHeader>
      <h1>Bilibili</h1>
      <Nav />
    </StyledHeader>
  );
};

export default Header;
