import React from "react";
import { container } from "./Container.module.scss";

const Container: React.FC = ({ children }) => {
  return <div className={container}>{children}</div>;
};

export default Container;
