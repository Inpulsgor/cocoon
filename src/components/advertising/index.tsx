import React, { FC } from "react";
import { Container } from "@components";
import cn from "classnames";
import {
  advertise,
  text,
  right,
  left,
  linkItem,
} from "./Advertising.module.scss";

type Props = {
  content: string;
  links: string[];
};

const Advertising: FC<Props> = ({
  content = "Nationwide free delivery on all orders!",
  links = [],
}) => {
  return (
    <div className={advertise}>
      <Container>
        <div
          className={cn({
            [right]: links.length,
            [left]: !links.length,
          })}
        >
          {links &&
            links.map((link: string) => (
              <span key={link} className={linkItem}>
                {link}
              </span>
            ))}
          {!links.length && <span className={text}>{content}</span>}
        </div>
      </Container>
    </div>
  );
};

export default Advertising;
