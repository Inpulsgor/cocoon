import React, { FC } from "react";
import { Link } from "gatsby";
import cn from "classnames";
import ArrowIcon from "@images/icons/arrow.svg";
import {
  navigationLinkHeader,
  navigationLinkFooter,
  icon,
  text,
} from "./NavLink.module.scss";

type Props = {
  path: string;
  content: string;
  arrow: boolean;
  location: string;
};

const NavLink: FC<Props> = ({
  path,
  content,
  arrow = false,
  location = "header",
}) => {
  return (
    <Link
      key={content}
      to={path}
      className={cn({
        [navigationLinkHeader]: location === "header",
        [navigationLinkFooter]: location === "footer",
      })}
    >
      <span className={text}>{content}</span>
      {arrow && <img className={icon} src={ArrowIcon} alt="Link arrow icon" />}
    </Link>
  );
};

export default NavLink;
