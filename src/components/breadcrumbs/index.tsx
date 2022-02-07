import React from "react";
import { Container } from "@components";
import { breadcrumb } from "./Breadcrumbs.module.scss";

const Breadcrumbs = () => {
  return (
    <div className={breadcrumb}>
      <Container>
        <span>
          Home {">"} Shop {">"} Two-Seater Sofa Beds
        </span>
      </Container>
    </div>
  );
};

export default Breadcrumbs;
