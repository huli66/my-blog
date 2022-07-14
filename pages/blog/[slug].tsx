import { useRouter } from "next/router";
import React from "react";

const Post = () => {
  const router = useRouter();
  console.log(router);
  return (
    <div>
      <div>{`pathname: ${router.pathname}`}</div>
      <div>{`asPath${router.asPath}`}</div>
      <div>{`query${router.query}`}</div>
      <div>{`route${router.route}`}</div>
      <div onClick={() => console.log("router", router)}>Click</div>
    </div>
  );
};

export default Post;
