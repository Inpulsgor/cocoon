import React from "react";
import {
  benefit,
  conditions,
  photo,
  img,
  list,
  item,
  icon,
} from "./Benefit.module.scss";
import ChairSample from "@images/chair_sample.jpg";
import conditionsList from "./Benefit.helpers";

const Benefit = () => {
  return (
    <div className={benefit}>
      <div className={photo}>
        <img className={img} src={ChairSample} alt="chair" />
      </div>
      <div className={conditions}>
        <ul className={list}>
          {conditionsList.map((condition) => (
            <li key={condition.content} className={item}>
              <img className={icon} src={condition.icon} alt={condition.alt} />
              <span>{condition.content}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Benefit;
