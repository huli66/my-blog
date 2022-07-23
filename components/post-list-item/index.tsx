import React from "react";
import Link from "next/link";
import { StyledPostItem, StyledTag } from "./style";

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
    <StyledPostItem>
      <h2>
        <Link href={link}>
          <a>{title}</a>
        </Link>
      </h2>
      <p>{description}</p>
      <div>
        <span>发布时间 {dateYMD}</span>
        {tags?.map((tag) => (
          <StyledTag>{`- ${tag}`}</StyledTag>
        ))}
      </div>
    </StyledPostItem>
  );
};

export default PostListItem;
