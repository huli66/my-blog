import React, { Fragment } from "react";
import { ReactElement } from "react-markdown/lib/react-markdown";
import Header from "./header";
import Footer from "./footer";
import styled from "styled-components";

const StyledLayout = styled.div`
  display: flex;
  > aside {
    flex: 0 0 300px;
  }
  > main {
    flex: 1 1;
  }
`;

const Layout = ({
  children,
  title,
}: {
  children: ReactElement;
  title: string;
}) => {
  return (
    <Fragment>
      <Header />
      <StyledLayout>
        {" "}
        <main>{children}</main>
        <aside>个人信息</aside>
      </StyledLayout>

      <Footer />
    </Fragment>
  );
};

export default Layout;
