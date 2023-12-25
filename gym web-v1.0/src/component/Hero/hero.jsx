import React from "react";
import Header from "../Header/header";
import "./hero.css";
import hero_image from "../../assets/hero_image.png";
import hero_image_back from "../../assets/hero_image_back.png";
import Heart from "../../assets/heart.png";
import Calories from "../../assets/calories.png";

const Hero = () => {
  return (
    <div className="hero">
      <div className="left-h">
        <Header />
        <div className="the-best-ad">
          <div></div>
          <span>the best fitness club in the town</span>
        </div>

        {/*  */}
        <div className="hero-text">
          <div>
            <span className="stroke-text">Shape </span>
            <span>Your </span>
          </div>
          <div>
            <span>Ideal body</span>
          </div>
          <div>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Error
              sint quas, quod excepturi voluptas quasi nesciunt dolor.
            </span>
          </div>
        </div>
        {/*  */}
        {/* figure stats */}
        <div className="figures">
          <div>
            <span>+140</span>
            <span>Expert Coach</span>
          </div>

          <div>
            <span>+978</span>
            <span>members joined</span>
          </div>

          <div>
            <span>+50</span>
            <span>fitness programs</span>
          </div>
        </div>
        {/* ends*/}

        {/* hero buttons*/}
        <div className="hero-buttons">
          <button className="btn">Get Started</button>
          <button className="btn">Learn More</button>
        </div>
        {/* hero buttons ends*/}
      </div>
      <div className="right-h">
        <button className="btn">Join Now</button>
        <div className="heart-rate">
          <img src={Heart} alt="" />
          <span>Heart Rate</span>
          <span>116 bpms</span>
        </div>

        <img src={hero_image} alt="" className="hero-image" />
        <img src={hero_image_back} alt="" className="hero-image-back" />
        {/* calories */}
        <div className="calories">
          <img src={Calories} alt="" />
          <span>Calories Burned</span>
          <span>220 kcal</span>
        </div>
        {/* calories ends */}
      </div>
    </div>
  );
};

export default Hero;
