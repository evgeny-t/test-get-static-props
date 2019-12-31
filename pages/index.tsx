import * as React from "react";
import Link from "next/link";
import Layout from "../components/Layout";
import { NextPage } from "next";

const IndexPage: NextPage = props => {
  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1>Hello Next.js 👋</h1>
      <pre style={{ outline: "3px dotted pink" }}>
        {JSON.stringify(props, null, 1)}
      </pre>
      <p>
        <Link href="/about">
          <a>About</a>
        </Link>
      </p>
    </Layout>
  );
};

// @ts-ignore
export async function unstable_getStaticProps(params) {
  console.log("getStaticProps", params);
  return {
    props: {
      staticProp: params
    }
  };
}

// export async function unstable_getStaticPaths() {
//   return [
//     // This renders / blog / hello-world to HTML at build time
//     { params: { slug: "hello-world" } },
//     { params: { slug: "dupa" } }
//   ];
// }

export default IndexPage;
