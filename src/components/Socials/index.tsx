import React, { FC } from "react";
import { SocialLink } from "@components";
import { socials } from "./Socials.module.scss";
import links from "./Socials.helpers";

const Socials: FC = () => {
  return (
    <ul className={socials}>
      {links.length &&
        links.map((link) => (
          <SocialLink
            key={link.path}
            path={link.path}
            socialIcon={link.socialIcon}
            alt={link.alt}
          />
        ))}
    </ul>
  );
};

export default Socials;
