import React from "react";
import aboutus from "../assets/whatwedo-icons/aboutus.png";

function AboutUs() {
  return (
    <>
      <div className="pt-20" id="about">
        <p className="text-center font-bold text-4xl">About Us</p>
        <div className="lg:px-48 px-8 flex justify-between flex-col md:flex-row pt-12 gap-12">
          <div className="md:w-1/2  ">
            <img
              alt="about image"
              src={aboutus}
              className="rounded-[2px] w-full"
            />
          </div>
          <div className="flex flex-col lg:gap-5 justify-center md:gap-12 sm:gap-3 md:w-1/2 lg:text-xl md:text-sm  font-medium">
            <div className="mb-8">
              <p className="text-center font-[400] md:text-xl mt-5">
                Our mission is to foster a dynamic and inclusive community of
                passionate learners, innovators, and problem-solvers. Through
                events, workshops, and hands-on experiences, we aim to equip
                students with the knowledge, skills, and resources they need to
                excel in the ever-evolving tech landscape. Our Microsoft Learn
                Student Club is committed to uplift the coding culture in G H
                Raisoni College of Engineering and Management, Pune.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
