import React from "react";
import { Container, Logo, Nav, Socials, Contacts } from "@components";
import Logotype from "@images/icons/logotype_light.svg";
import {
  FOOTER_LINKS_LEFT,
  FOOTER_LINKS_RIGHT,
  FOOTER_TITLES,
} from "../../Nav/Nav.helpers";
import {
  footer,
  contact,
  content,
  navigation,
  copy,
} from "./Footer.module.scss";

const Footer = () => {
  return (
    <footer className={footer}>
      <Container>
        <div className={contact}>
          <Logo type="footer" logo={Logotype} />
          <p className={content}>
            Sofa beds built from the mattress up. A great night’s sleep. every
            night. Shop confident with nationwide delivery, and take advantage
            of our 14-night sleep trial.
          </p>
          <Contacts />
          <span className={copy}>
            © Copyright Cocoon 2020. All Rights Reserved
          </span>
        </div>
        <div className={navigation}>
          <Nav
            location="footer"
            links={FOOTER_LINKS_LEFT}
            title={FOOTER_TITLES.useful}
          />
          <Nav
            location="footer"
            links={FOOTER_LINKS_RIGHT}
            title={FOOTER_TITLES.about}
          />
          <Socials />
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
