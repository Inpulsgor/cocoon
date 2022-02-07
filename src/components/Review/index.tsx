import React, { useState, useEffect, FC } from "react";
import { Rating } from "@components";
import {
  content,
  customer,
  comment,
  avatar,
  character,
  contact,
  time,
  heading,
  title,
  text,
} from "./Review.module.scss";

type Props = {
  name: string;
  rate: string;
  reason: string;
  review: string;
  image: string;
  date: string;
};

const Review: FC<Props> = ({
  name,
  rate,
  reason,
  review,
  date,
  image = "",
}) => {
  const [firsLetter, setFirsLetter] = useState("");

  useEffect(() => {
    if (name) setFirsLetter(name.split("")[0]);
  }, []);

  return (
    <li className={comment}>
      <div className={customer}>
        <div className={avatar}>
          {image ? (
            <img src={image} alt="Customer avatar" />
          ) : (
            <span className={character}>{firsLetter}</span>
          )}
        </div>
        <div className={contact}>
          <span>{name}</span>
          <Rating rate={rate} location="avatar" />
        </div>
      </div>
      <div className={content}>
        <div className={heading}>
          <span className={title}>{reason}</span>
          <span className={time}>{date}</span>
        </div>
        <p className={text}>{review}</p>
      </div>
    </li>
  );
};

export default Review;
