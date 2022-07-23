import styled from "styled-components";

export const StyledPostList = styled.div`
  padding: 16px;
  background-color: #fff;
`;

export const StyledBlog = styled.article<{ showMenu: boolean }>`
  position: relative;
  width: 100%;
  .content {
    flex: 1 1;
    padding: 12px;
  }
  .rightSide {
    background-color: #fff;
  }

  @media screen and (min-width: 600px) {
    .content {
      margin-right: 180px;
    }
    .show {
      display: none;
    }
    .rightSide {
      width: 200px;
      position: fixed;
      top: 100px;
      right: 20px;
    }
  }

  @media screen and (max-width: 400px) {
    .show {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background-color: rgba(200, 200, 200, 0.5);
      position: fixed;
      bottom: ${({ showMenu }) => (showMenu ? 300 : 60)}px;
      right: 40px;
      line-height: 60px;
      text-align: center;
    }
    .rightSide {
      display: ${({ showMenu }) => (showMenu ? "block" : "none")};
      width: 100%;
      position: fixed;
      bottom: 0px;
      left: 0px;
      padding: 20px;
      max-height: 300px;
      overflow: auto;
      border-radius: 16px 0 0 16px;
      .menu {
        height: 300px;
      }
    }
  }
`;
