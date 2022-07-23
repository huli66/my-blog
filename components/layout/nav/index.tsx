import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const StyledNavItem = styled.div`
  height: 20px;
  background-color: #079bf1;
  color: #fff;
  > div {
    color: black;
  }
`;

const StyledNav = styled.nav`
  height: 30px;
  background-color: #079bf1;
  color: #fff;
  display: flex;
  justify-content: space-around;
  ${StyledNavItem}:not(:last-child) {
    margin-right: 20px;
  }
`;

const menu = [
  {
    title: "首页",
    path: "/",
  },
  {
    title: "博客列表",
    path: "/posts",
  },
  {
    title: "About",
    path: "/about",
  },
];

const NavItem = ({
  title,
  link,
  currentPage,
}: {
  title: string;
  link: string;
  currentPage: string;
}) => {
  return (
    <StyledNavItem>
      {currentPage === link ? (
        <div>{title}</div>
      ) : (
        <Link href={link}>
          <a>{title}</a>
        </Link>
      )}
    </StyledNavItem>
  );
};

const Nav = () => {
  const router = useRouter();
  const currentPage = router.pathname;
  return (
    <StyledNav>
      {menu.map(({ title, path }) => (
        <NavItem title={title} currentPage={currentPage} link={path} />
      ))}
    </StyledNav>
  );
};

export default Nav;
