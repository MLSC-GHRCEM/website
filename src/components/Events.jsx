import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { eventdata } from "./content";
function Events() {
  return (
    <>
      <Navbar />
      <div className="pt-20" id="about">
        <h1 className="text-center font-bold text-4xl pb-20">Events</h1>
        <div class="px-8 md:px-20 text-center md:space-y-0 grid grid-cols-1 md:grid-cols-3 md:gap-20 gap-12 w-full pb-10">
          {eventdata.map((content) => (
            <div className="bg-[#F5F7FB] shadow-[0_3px_10px_rgb(0,0,0,0.2)]  cursor-pointer transform transition-transform p-4">
              <div>
                <img className="block m-auto w-44" src={content.image} />
              </div>
              <div>
                <p className="font-bold text-2xl lg:text-xl text-primary pt-6">
                  {content.title}
                </p>
                <p>{content.description}</p>
              </div>
              <div>
                <button className="p-2 bg-primary rounded-full text-white mt-2">
                  Register Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Events;
