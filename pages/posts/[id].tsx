import { getFileIds, getFileData } from "../../utils/posts-md";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkNav from "markdown-navbar"; // https://github.com/parksben/markdown-navbar
import "markdown-navbar/dist/navbar.css";
import "github-markdown-css";
import Layout from "../../components/layout";
import { StyledBlog } from "./style";
import { useState } from "react";

interface PostProps {
  postsDir?: string;
  title?: string;
  description?: string;
  dateYMD?: string;
  wordcount?: string;
  html?: string;
  content: string;
}

const Post = (props: { postData: PostProps }) => {
  // console.log("props", props);
  const { postData } = props;
  const { postsDir, title, dateYMD, wordcount, html, description, content } =
    postData;

  const [showMenu, setShowMenu] = useState(true);

  return (
    <Layout title={title || "文章"}>
      <StyledBlog showMenu={showMenu}>
        {/* <h1>{title}</h1> */}
        <div className="markdown-body content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
        <div>{dateYMD}</div>
        <div>{wordcount}</div>
        <div className="show" onClick={() => setShowMenu(!showMenu)}>
          {showMenu ? "收起" : "目录"}
        </div>
        <div className="rightSide">
          <MarkNav className="menu toc-list" source={content} ordered={true} />
        </div>
      </StyledBlog>
    </Layout>
  );

  // return <article dangerouslySetInnerHTML={{ __html: htmlContent }} />;
};

export default Post;

const postsDir = "posts";

/**
 * 获取路径信息
 */
export async function getStaticPaths() {
  const paths = (await getFileIds(postsDir)).map((id: string) => {
    return { params: { id } };
  });
  return {
    paths,
    fallback: false,
  };
}

/**
 * 获取博客内容
 */
export async function getStaticProps({ params }: { params: any }) {
  return {
    props: {
      postData: await getFileData(postsDir, params.id),
    },
  };
}
