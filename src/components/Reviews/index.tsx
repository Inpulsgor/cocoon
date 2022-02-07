import React, { useState } from "react";
import { Container, Rating, Select, Review } from "@components";
import ArrowIcon from "@images/icons/arrow_light.svg";
import {
  reviews,
  heading,
  title,
  vote,
  wrapper,
  scoreStyle,
  showMore,
  list,
} from "./Reviews.module.scss";
import reviewsData from "./Reviews.helpers";

const Reviews = () => {
  const [rateScore, setRateScore] = useState(4.7);

  return (
    <div className={reviews}>
      <Container>
        <div className={wrapper}>
          <div className={heading}>
            <h2 className={title}>Customer Reviews</h2>
            <div className={vote}>
              <span className={scoreStyle}>{rateScore}</span>
              <Rating orientation="vertical" />
              <Select />
            </div>
          </div>
          <ul className={list}>
            {reviewsData.map(({ name, rate, reason, review, date }) => (
              <Review
                key={`${name}_${rate}`}
                name={name}
                rate={rate}
                reason={reason}
                review={review}
                date={date}
              />
            ))}
          </ul>
          <button className={showMore}>
            <span>Show more</span>
            <img src={ArrowIcon} alt="arrow icon" />
          </button>
        </div>
      </Container>
    </div>
  );
};

export default Reviews;
