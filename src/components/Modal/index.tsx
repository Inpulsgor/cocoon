import React, { FC, useState } from "react";
import colorOptions from "./Modal.helpers";
import CloseIcon from "@images/icons/close.svg";
import {
  backdrop,
  modal,
  heading,
  title,
  close,
  body,
  fabric,
  segment,
  cross,
  colorItem,
  segmentTitle,
  detailsBtn,
  active,
} from "./Modal.module.scss";

type Props = {
  closeModal: Function;
  colorSelected: string;
  setColorSelected: Function;
};

const Modal: FC<Props> = ({ closeModal, colorSelected, setColorSelected }) => {
  return (
    <div className={backdrop}>
      <div className={modal}>
        <div className={heading}>
          <span className={title}>Fabric Selection</span>
          <button onClick={() => closeModal(false)} className={close}>
            <img className={cross} src={CloseIcon} alt="cross icon" />
          </button>
        </div>
        <div className={body}>
          {colorOptions.map((item, index) => (
            <div className={segment} key={item.name}>
              {index === 0 && (
                <span className={segmentTitle}>
                  Choose your fabric from the options below
                </span>
              )}
              <div className={fabric}>
                <span>{item.name}</span>
                <button className={detailsBtn}>Fabric details</button>
              </div>
              <div>
                {item.colors.map((color, index) => (
                  <span
                    key={index}
                    className={`${colorItem} ${
                      colorSelected === color ? active : ""
                    }`}
                    style={{ background: `${color}` }}
                    onClick={() => setColorSelected(color)}
                  ></span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Modal;
