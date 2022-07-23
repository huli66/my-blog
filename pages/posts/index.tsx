import React from "react";
import { FileDataProps, getAllFiles } from "../../utils/posts-md";
import PostListItem from "../../components/post-list-item";
import Layout from "../../components/layout";

const postsDir = "posts";

const PostsList = ({ posts }: { posts: Array<FileDataProps> }) => {
  // console.log("post", posts);
  return (
    <div>
      <Layout title="博客列表页">
        <ul>
          {posts?.map((post) => {
            const { id, title, date, description, content, tags, keywords } =
              post;
            return (
              <PostListItem
                key={id}
                postsDir={postsDir}
                id={id}
                title={title}
                description={description}
                dateYMD={date}
                tags={tags}
              />
            );
          })}
        </ul>
      </Layout>
    </div>
  );
};

export const getStaticProps = async () => {
  return {
    props: {
      posts: await getAllFiles(postsDir),
    },
  };
};

export default PostsList;
