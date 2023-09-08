import React from "react";
import mlsclogo from "../assets/New Project.png";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 md:mt-12 px-5">
      <div className="flex flex-col mb-4">
        <p className="text-5xl font-[800] font-dm-serif-display text-center">
          <span className="text-primary">MLSC</span> GHRCEM <br />
        </p>
        <p className="text-center pt-2 font-medium">We Build; Don't Talk</p>
      </div>
      <div></div>
      <div>
        <img src={mlsclogo} alt="hero-img" className="w-[500px] pt-4" />
      </div>
    </div>
  );
}

export default Hero;
