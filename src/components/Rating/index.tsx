import React, { FC } from "react";

import StarIcon from "@images/icons/star_filled.svg";

import {
  wrapper,
  horizontal,
  vertical,
  reviews,
  star,
} from "./Rating.module.scss";

type Props = {
  starsCount: number;
  reviewsCount: number;
  orientation: string;
  location: string;
};

const Rating: FC<Props> = ({
  starsCount = 5,
  reviewsCount = 5,
  orientation = "horizontal",
  location = "",
}) => {
  const stars = new Array(starsCount).fill("");

  return (
    <div className={orientation === "horizontal" ? horizontal : vertical}>
      <div className={wrapper}>
        {stars.map((_, index) => (
          <img className={star} src={StarIcon} key={index} alt="star" />
        ))}
      </div>
      {location !== "avatar" && (
        <p className={reviews}>{reviewsCount} reviews</p>
      )}
    </div>
  );
};

export default Rating;
