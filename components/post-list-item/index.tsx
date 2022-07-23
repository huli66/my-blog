import React from "react";
import Link from "next/link";

export interface PostListItemProps {
  postsDir: string;
  id: string;
  title: string;
  description: string;
  dateYMD: string;
  tags: Array<string>;
}

const PostListItem = ({
  postsDir,
  id,
  title,
  description,
  dateYMD,
  tags,
}: PostListItemProps) => {
  const link = `/${postsDir}/${id}`;

  return (
    <article>
      <h2>
        <Link href={link}>
          <a>博客{title}</a>
        </Link>
      </h2>
      <p> 发布时间 {dateYMD}</p>
      <p>{description}</p>
      {tags?.map((tag) => (
        <span>{tag}</span>
      ))}
    </article>
  );
};

export default PostListItem;
