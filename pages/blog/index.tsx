import { useRouter } from "next/router";
import React, { Component, useEffect, useState } from "react";
import ReactMarkdown from "react-markdown"; // 引入解析 md 文件的库
import remarkGfm from "remark-gfm"; // 解析表格等
import MarkNav from "markdown-navbar"; // 引入md目录
import "markdown-navbar/dist/navbar.css";
import "github-markdown-css"; // github 的 md 样式
import styled from "styled-components";

const StyledBlog = styled.div<{ showMenu: boolean }>`
  position: relative;
  span {
    position: fixed;
    top: 0;
    left: 0;
    line-height: 28px;
    background-color: #008c8c;
    border-radius: 4px;
    padding: 10px;
    opacity: 0.5;
  }
  > div {
    position: fixed;
    width: 200px;
    top: 100px;
    left: 0;
    height: 70%;
    display: ${({ showMenu }) => (showMenu ? "block" : "none")};
  }
  > section {
    margin: 20px 20px 20px ${({ showMenu }) => (showMenu ? 210 : 20)}px;
  }
`;

const Blog = () => {
  const [sourceData, setSourceData] = useState("");
  const [showMenu, setShowMenu] = useState(true);

  useEffect(() => {
    var xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
      if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
        // console.log("source", xmlhttp.responseText);
        setSourceData(xmlhttp.responseText);
      }
    };

    xmlhttp.open("GET", "/posts-md/API 手册.md", true);
    xmlhttp.send();
  }, []);

  return (
    <StyledBlog showMenu={showMenu}>
      <span onClick={() => setShowMenu(!showMenu)}>hide menu</span>
      <div className="left-side">
        <MarkNav className="toc-list" source={sourceData} ordered={true} />
      </div>
      <section className="markdown-body">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{sourceData}</ReactMarkdown>
      </section>
    </StyledBlog>
  );
};

export default Blog;

// class Blog extends Component {
//   constructor(props) {
//     super(props); // TODO: 关于 super 还需要学习
//     this.state = {
//       sourceData: "",
//     };
//   }

//   componentDidMount() {
//     var _this = this;
//     var xmlhttp = new XMLHttpRequest();

//     xmlhttp.onreadystatechange = function () {
//       if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
//         console.log("source", xmlhttp.responseText);
//         _this.setState({
//           sourceData: xmlhttp.responseText,
//         });
//       }
//     };

//     xmlhttp.open("GET", "/posts/test.md", true);
//     xmlhttp.send();
//   }

//   render() {
//     return (
//       <StyledBlog>
//         <div className="leftSide">
//           <MarkNav
//             className="toc-list"
//             source={this.state.sourceData}
//             ordered={true}
//           />
//         </div>
//         <div className="markdown-body content">
//           <ReactMarkdown remarkPlugins={[remarkGfm]}>
//             {this.state.sourceData}
//           </ReactMarkdown>
//         </div>
//       </StyledBlog>
//     );
//   }
// }
