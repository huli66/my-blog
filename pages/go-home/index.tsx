import Link from "next/link";
import React from "react";
import styled from "styled-components";

const StyledBar = styled.div`
  position: fixed;
  top: 80%;
  left: 10%;
  width: 80px;
  height: 100px;
  background-color: pink;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  border-radius: 8px;
  opacity: 0.3;
  :hover {
    opacity: 0.8;
  }
`;

const Bar = () => {
  return (
    <StyledBar>
      <div>
        <Link href="/">
          <a>回到主页</a>
        </Link>
      </div>
      <div>
        <button onClick={() => window.location.reload()}>Refresh</button>
      </div>
    </StyledBar>
  );
};

export default Bar;
