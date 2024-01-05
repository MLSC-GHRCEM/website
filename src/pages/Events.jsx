import React from "react";
import { eventdata } from "../components/content";
import Layout from "../components/Layout";

function Events() {
  return (
    <>
      <Layout>
        <div className="pt-20" id="about">
          <h1 className="text-center font-bold text-4xl pb-20">Events</h1>
          <div class="px-8 lg:px-20 text-center md:space-y-0 grid grid-cols-1 md:grid-cols-3 lg:gap-20 gap-8 w-full pb-10">
            
            {eventdata.map((content) => (
                 <a href={`/event/${content.slug}`} target="_blank">
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
              </a>
            ))}
          </div>
        </div>
      </Layout>
    </>
  );
}

export default Events;
