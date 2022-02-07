import React, { FC } from "react";
import cn from "classnames";
import { wrapper, wrapperSmall, wrapperSquare } from "./Button.module.scss";

type Props = {
  title: string;
  type: "default" | "small" | "square";
  border?: string;
  radius?: string;
};

const Button: FC<Props> = ({ title = "", type = "default" }) => {
  return (
    <button
      type="button"
      className={cn(wrapper, {
        [wrapperSmall]: type === "small",
        [wrapperSquare]: type === "square",
      })}
    >
      <span>{title}</span>
    </button>
  );
};

export default Button;
