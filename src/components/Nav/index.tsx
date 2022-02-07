import React, { FC } from "react";
import { Cart, NavLink } from "@components";
import cn from "classnames";
import {
  navHeader,
  navFooter,
  listHeader,
  listFooter,
  titleClass,
} from "./Nav.module.scss";

type Links = {
  content: string;
  path: string;
  arrow?: string;
};

type Props = {
  location: string;
  links: Array<Links>;
  title: string;
};

const Nav: FC<Props> = ({ location = "header", links, title }) => {
  return (
    <>
      <nav
        className={cn({
          [navHeader]: location === "header",
          [navFooter]: location === "footer",
        })}
      >
        {location === "footer" && <span className={titleClass}>{title}</span>}
        <ul
          className={cn({
            [listHeader]: location === "header",
            [listFooter]: location === "footer",
          })}
        >
          {links?.length &&
            links.map(({ content, path, arrow }) => (
              <NavLink
                key={content}
                path={path}
                content={content}
                arrow={arrow}
                location={location}
              />
            ))}
        </ul>
      </nav>
      {location === "header" && <Cart />}
    </>
  );
};

export default Nav;
