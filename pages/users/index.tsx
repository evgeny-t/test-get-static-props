import { NextPage } from "next";
import Link from "next/link";

import { readJsonSync } from "fs-extra";

import Layout from "../../components/Layout";
import List from "../../components/List";
import { User } from "../../interfaces";

type Props = {
  items: User[];
  pathname: string;
};

const WithInitialProps: NextPage<Props> = ({ items, pathname }) => (
  <Layout title="Users List | Next.js + TypeScript Example">
    <h1>Users List</h1>
    <p>
      Example fetching data from inside <code>getInitialProps()</code>.
    </p>
    <p>You are currently on: {pathname}</p>
    <List items={items} />
    <p>
      <Link href="/">
        <a>Go home</a>
      </Link>
    </p>
  </Layout>
);

// @ts-ignore
export async function unstable_getStaticProps(params) {
  console.log("getStaticProps", params);

  const data: User[] = readJsonSync("./data.json");
  return {
    props: {
      items: data
    }
  };
}

export default WithInitialProps;
