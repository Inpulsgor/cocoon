import React, { FC } from "react";
import { iconWrapper } from "./Icon.module.scss";

type Props = {
  width: number;
  height: number;
};

const Icon: FC<Props> = ({ width = 20, height = 20 }) => {
  const style = {
    width,
    height,
  };

  return (
    <div className={iconWrapper} style={style}>
      <span className={text}>{content}</span>
    </div>
  );
};

export default Icon;
