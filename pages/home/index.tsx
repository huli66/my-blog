import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <ul>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/posts">
          <a>Posts</a>
        </Link>
      </li>
      <li>
        <Link href="blog/hello?name=helloworld">
          <a>Hello World Blog</a>
        </Link>
      </li>
    </ul>
  );
};

export default Home;
