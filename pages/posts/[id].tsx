import { getFileIds, getFileData } from "../../utils/posts-md";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import MarkNav from "markdown-navbar"; // https://github.com/parksben/markdown-navbar
import "markdown-navbar/dist/navbar.css";
import styled from "styled-components";
import "github-markdown-css";
import Layout from "../../components/layout";

const StyledBlog = styled.article`
  position: relative;
  .leftSide {
    position: fixed;
    width: 200px;
    top: 100px;
    left: 0;
  }
  .content {
    margin: 20px 20px 20px 210px;
  }
`;

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

  return (
    <Layout title="博客文章">
      <StyledBlog>
        {/* <h1>{title}</h1> */}
        <div className="leftSide">
          <MarkNav className="toc-list" source={content} ordered={true} />
        </div>
        <div className="markdown-body content">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
        </div>
        <div>{dateYMD}</div>
        <div>{wordcount}</div>
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
