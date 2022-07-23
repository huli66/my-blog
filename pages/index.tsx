import type { NextPage } from "next";
import Link from "next/link";
import Layout from "../components/layout";
import { StyledHome } from "./style";

const Home: NextPage = () => {
  return (
    <Layout title="狐狸🍁">
      <StyledHome>
        <div>假装现在有首页</div>
        <p>
          <Link href="/home">
            <a>Home</a>
          </Link>
        </p>
        <p>
          <Link href="/posts">
            <a>BLog</a>
          </Link>
        </p>
        <div>老板你那么帅，那不打赏两块？</div>
        <img src="/wechat.png" alt="收款码" width={200} height={200} />
      </StyledHome>
    </Layout>
  );
};

export default Home;
