import React from "react";
import { contacts, contact, link, icon } from "./Contacts.module.scss";
import { contactLink } from "./Contacts.helpers";

const Contacts = () => {
  return (
    <ul className={contacts}>
      {contactLink.map((item) => (
        <li className={contact} key={item.content}>
          <img className={icon} src={item.icon} alt={item.alt} />
          <a className={link} href={item.path}>
            {item.content}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Contacts;
