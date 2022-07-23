import React, { Fragment } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import Nav from "./nav";
import { StyledLayout } from "./style";

const Layout = ({
  children,
  title,
}: {
  children: ReactElement;
  title: string;
}) => {
  return (
    <StyledLayout>
      <header>
        <h1>{title}</h1>
        <Nav></Nav>
      </header>
      <main>{children}</main>
      <footer>
        {/* <img src="" alt="收钱" /> */}
        <span>Email: 2969054528@qq.com</span>
        <a>Github:</a>
      </footer>
    </StyledLayout>
  );
};

export default Layout;
