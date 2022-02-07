import React, { FC } from "react";
import { Container, Logo, Nav } from "@components";
import Logotype from "@images/icons/logotype.svg";
import { header } from "./Header.module.scss";

type Props = {
  links: Array<string>;
};

const Header: FC<Props> = ({ links }) => {
  return (
    <header className={header}>
      <Container>
        <Logo type="header" logo={Logotype} />
        <Nav location="header" links={links} />
      </Container>
    </header>
  );
};

export default Header;
