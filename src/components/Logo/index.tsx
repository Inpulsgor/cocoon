import React, { FC, SVGProps } from "react";
import { Link } from "gatsby";
import cn from "classnames";
import {
  headerLogo,
  footerLogo,
  footerImage,
  headerImage,
} from "./Logo.module.scss";

type Props = {
  type: string;
  logo: string;
};

const Logo: FC<Props> = ({ type, logo }) => {
  return (
    <Link
      className={cn({
        [headerLogo]: type === "header",
        [footerLogo]: type === "footer",
      })}
      to="/"
    >
      <img
        className={cn({
          [headerImage]: type === "header",
          [footerImage]: type === "footer",
        })}
        src={logo}
        alt="Cocoon logo"
      />
    </Link>
  );
};

export default Logo;
