import React, { FC } from "react";
import { Header, Footer } from "@components";
import { layout } from "./Layout.module.scss";

const Layout: FC<JSX.Element> = ({ links, children }) => {
  return (
    <div className={layout}>
      <Header links={links} />
      <main>{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
