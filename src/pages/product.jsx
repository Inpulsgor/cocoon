import * as React from "react";
import {
  Layout,
  Advertising,
  Breadcrumbs,
  Product,
  Reviews,
  Benefit,
} from "@components";
import { HEADER_LINKS_PRODUCT } from "../components/Nav/Nav.helpers";

const ProductPage = () => {
  return (
    <>
      <Advertising />
      <Layout links={HEADER_LINKS_PRODUCT}>
        <Breadcrumbs />
        <Product />
        <Reviews />
        <Benefit />
      </Layout>
    </>
  );
};

export default ProductPage;
