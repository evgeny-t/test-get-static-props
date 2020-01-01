import * as React from "react";

import { readJsonSync } from "fs-extra";

import { User } from "../../interfaces";
import Layout from "../../components/Layout";
import ListDetail from "../../components/ListDetail";

type Props = {
  item?: User;
  errors?: string;
};

class InitialPropsDetail extends React.Component<Props> {
  render() {
    const { item, errors } = this.props;

    if (errors) {
      return (
        <Layout title={`Error | Next.js + TypeScript Example`}>
          <p>
            <span style={{ color: "red" }}>Error:</span> {errors}
          </p>
        </Layout>
      );
    }

    return (
      <Layout
        title={`${
          item ? item.name : "User Detail"
        } | Next.js + TypeScript Example`}
      >
        {item && <ListDetail item={item} />}
      </Layout>
    );
  }
}

// @ts-ignore
export async function unstable_getStaticProps({ params }) {
  console.log("getStaticProps", params);

  const data: User[] = readJsonSync("./data.json");
  const item = data.find(({ id }) => params.id === `${id}`);
  console.log("item", item);
  return {
    props: {
      item
    }
  };
}

export async function unstable_getStaticPaths() {
  const data: User[] = readJsonSync("./data.json");
  return data.map(user => ({ params: { id: `${user.id}` } }));
}

export default InitialPropsDetail;
