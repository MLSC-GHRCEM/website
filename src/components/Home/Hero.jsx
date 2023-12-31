import React from "react";
import mlsclogo from "../../assets/New Project.png";

function Hero() {
  return (
    <div className="flex flex-col justify-center items-center mt-10 md:mt-12 px-5">
      <div className="flex flex-col mb-4">
        <p className="text-6xl font-[800] font-dm-serif-display text-center">
          <span className="text-primary">MLSC</span> GHRCEM <br />
        </p>
        <p className="text-center text-xl pt-2 font-medium">
          Learn. Collaborate. Build.
        </p>
      </div>
      <div>
        <a
          href="https://forms.office.com/r/CRFrcmN2jG
"
          className="bg-primary py-2 px-3 rounded-full"
          target="_blank"
        >
          Apply Now
        </a>
      </div>
      <div>
        <img src={mlsclogo} alt="hero-img" className="w-[500px] pt-4" />
      </div>
    </div>
  );
}

export default Hero;
