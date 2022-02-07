import React, { useState } from "react";
import { Container, Rating, Select, Button, Modal, Slider } from "@components";
import ArrowIcon from "@images/icons/arrow.svg";

import {
  controlPanel,
  priceOffer,
  striked,
  addToBasketWrapper,
  productDetails,
  label,
  btn,
  type,
  material,
  color,
  arrow,
  sliderContainer,
  productSection,
} from "./Product.module.scss";

const Product = () => {
  const [openModal, setOpenModal] = useState(false);
  const [colorSelected, setColorSelected] = useState("");

  return (
    <section className={productSection}>
      <Container>
        <div className={sliderContainer}>
          <Slider />
        </div>
        <div className={controlPanel}>
          <h2>Alice Two-Seater Sofa Bed</h2>
          <Rating orientation="horizontal" />
          <p className={productDetails}>
            The Alice two-seater sofa bed is designed to deliver a wider bed
            within a narrower sofa width. A pocket-sprung mattress offers a
            luxury sleeping experience for everyday use.
          </p>
          <div className={priceOffer}>
            <p className={striked}>£1099</p>
            <p>£999</p>
          </div>
          <div>
            <span className={label}>Fabric selection</span>
            <button className={btn} onClick={() => setOpenModal(true)}>
              <span className={type}>Micro Suede</span>
              <span className={material}>Coconut Shell</span>
              <span
                className={color}
                style={{ background: `${colorSelected}` }}
              ></span>
              <img className={arrow} src={ArrowIcon} alt="arrow icon" />
            </button>
          </div>
          <Select label="Arm size selection" />
          <div className={addToBasketWrapper}>
            <Select type="small" />
            <Button title="Add to basket" />
          </div>
        </div>
      </Container>
      {openModal && (
        <Modal
          closeModal={setOpenModal}
          colorSelected={colorSelected}
          setColorSelected={setColorSelected}
        />
      )}
    </section>
  );
};

export default Product;
