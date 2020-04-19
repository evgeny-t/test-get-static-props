import * as React from "react";
import { GetStaticPaths, GetStaticProps } from "next";

import { readJsonSync } from "fs-extra";

import { User } from "../../interfaces";

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data: User[] = readJsonSync("./data.json");
  const item = data.find(({ name }) => params?.id === `${name}`);

  return {
    props: {
      item,
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  const data: User[] = readJsonSync("./data.json");

  return {
    paths: data.map(({ name }) => `/users/${name}`),
    fallback: false,
  };
};

type Props = {
  item?: User;
  errors?: string;
};

export default (props: Props) => {
  const { item } = props;

  return (
    <div>
      {item?.id} - {item?.name}
    </div>
  );
};
