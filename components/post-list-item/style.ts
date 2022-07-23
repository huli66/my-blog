import styled from "styled-components";

export const StyledPostItem = styled.div`
  margin-bottom: 10px;
  padding: 8px;
  border-radius: 8px;
  cursor: pointer;
  border: 1px solid rgba(0, 0, 0, 0.2);
  > h2 {
    font-size: 16px;
    color: #333333;
    letter-spacing: 0;
    line-height: 21px;
    font-weight: 500;
    margin: 0px;
  }
  > p {
    font-size: 14px;
    color: #333333;
    letter-spacing: 0;
    line-height: 22px;
    font-weight: 400;
    margin: 4px 0px;
  }
  > div {
    font-size: 12px;
    color: #999999;
    letter-spacing: 0;
    line-height: 16px;
    font-weight: 400;
    > span {
      margin-right: 16px;
    }
  }
`;

/**
 * 每种标签搭配不同颜色和图片的点
 */
export const StyledTag = styled.span``;
