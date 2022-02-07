import React from "react";
import { Button } from "@components";
import { hero, title } from "./Hero.module.scss";

const Hero = () => {
  return (
    <section className={hero}>
      <h1 className={title}>THE BED FOR EVERY ROOM</h1>
      <Button title="Shop now" />
      <div className="points">
        <div>
          <div>
            <img src="" alt="" />
          </div>
          <div>
            <span>Selling point</span>
            <p>
              A small paragraph explaining why this is so awesome. Could go to 2
              lines
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
