import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  height: 100px;
  width: 100%;
  background-color: #eee;
  color: #b4aaaa;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Footer = () => {
  return <StyledFooter>底部拦</StyledFooter>;
};

export default Footer;
