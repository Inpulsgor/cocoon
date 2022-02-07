import React, { FC } from "react";
import { link, icon } from "./SocialLink.module.scss";

type Props = {
  path: string;
  alt: string;
  socialIcon: any;
};

const SocialLink: FC<Props> = ({ path, socialIcon, alt }) => {
  return (
    <a className={link} href={path}>
      <img className={icon} src={socialIcon} alt={alt} />
    </a>
  );
};

export default SocialLink;
