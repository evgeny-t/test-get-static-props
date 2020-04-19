import * as React from "react";
import Link from "next/link";
import { NextPage, GetStaticProps } from "next";

import { readJsonSync } from "fs-extra";

import { User } from "../interfaces";

const IndexPage: NextPage<{ names: string[] }> = (props) => {
  return (
    <main>
      <section>
        {props.names.map((name) => (
          <div key={name}>
            <Link href={`/users/${name}`}>
              <a>{name}</a>
            </Link>
          </div>
        ))}
      </section>
    </main>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data: User[] = readJsonSync("./data.json");

  return {
    props: {
      names: data.map((user) => user.name),
    },
  };
};

export default IndexPage;
