import * as React from "react";
import Link from "next/link";
import { NextPage } from "next";

import { readJsonSync } from "fs-extra";

import Layout from "../components/Layout";
import { User } from "../interfaces";

const IndexPage: NextPage<{ names: string[] }> = props => {
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
      <section>
        {props.names.map(name => (
          <div>{name}</div>
        ))}
      </section>
    </Layout>
  );
};

// @ts-ignore
export async function unstable_getStaticProps(params) {
  console.log("getStaticProps", params);
  const data: User[] = readJsonSync("./data.json");
  return {
    props: {
      names: data.map(user => user.name)
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
