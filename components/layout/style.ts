import styled from "styled-components";

export const StyledLayout = styled.div`
  height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  align-items: center;
  > header {
    height: 80px;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    background-color: #079bf1;
    > h1 {
      text-overflow: ellipsis;
      white-space: nowrap;
      overflow: hidden;
    }
  }
  > main {
    width: 90%;
  }
  > footer {
    width: 100%;
    height: 50px;
    background-color: #e8e8e8;
    display: flex;
    justify-content: center;
    align-items: center;
    color: rgba(0, 0, 0, 0.5);
    font-size: 12px;
    span {
      margin-right: 20px;
    }
  }
`;
