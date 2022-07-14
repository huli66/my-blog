import Link from "next/link";
import React from "react";

interface Post {
  id: string;
  title: string;
  slug: string;
}

const Posts = ({ posts }: { posts: Post[] }) => {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>
          <Link
            href={{
              pathname: "/blog/[slug]",
              query: { slug: post.slug },
            }}
          >
            <a>{post.title}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export const getStaticProps = async () => {
  const posts = [
    {
      id: "id1",
      title: "title1",
      slug: "slug1",
    },
    {
      id: "id2",
      title: "title2",
      slug: "slug2",
    },
    {
      id: "id3",
      title: "title3",
      slug: "slug3",
    },
  ];
  return {
    props: {
      posts,
    },
  };
};

export default Posts;
