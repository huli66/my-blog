import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import styled from "styled-components";

const StyledNavItem = styled.div`
  height: 30px;
  color: #fff;
  user-select: none;
  :hover::after {
    content: "";
    display: block;
    height: 4px;
    width: 10%;
    background: rgba(0, 0, 0, 0.5);
    transform: translateY(4px);
    animation: changeWidth 0.5s;
    animation-fill-mode: forwards;
  }
  > div {
    color: black;
  }
  @keyframes changeWidth {
    from {
      width: 0;
    }
    to {
      width: 100%;
    }
  }
`;

const StyledNav = styled.nav`
  height: 30px;
  min-width: 200px;
  background-color: #079bf1;
  color: #fff;
  display: flex;
  justify-content: space-around;
  ${StyledNavItem}:not(:last-child) {
    margin-right: 14px;
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
        <NavItem
          key={title}
          title={title}
          currentPage={currentPage}
          link={path}
        />
      ))}
    </StyledNav>
  );
};

export default Nav;
