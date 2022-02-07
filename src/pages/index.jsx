import * as React from "react";
import { Layout, Hero, Advertising } from "@components";
import { HEADER_LINKS_HOME } from "@components/Nav/Nav.helpers";
import links from "../components/Advertising/Advertising.helpers";

const IndexPage = () => {
  return (
    <>
      <Advertising links={links} />
      <Layout links={HEADER_LINKS_HOME}>
        <Hero />
      </Layout>
    </>
  );
};

export default IndexPage;
