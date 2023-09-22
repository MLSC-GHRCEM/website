import React from "react";
import event from "../../assets/whatwedo-icons/events.png";
import opensource from "../../assets/whatwedo-icons/open-source.png";
import technical from "../../assets/whatwedo-icons/projects.png";
import networking from "../../assets/whatwedo-icons/networking.png";
import hackathon from "../../assets/whatwedo-icons/icons8-hackathon-64.png";

function WhatWeDo() {
  return (
    <>
      <div id="what">
        <h1 className="text-center text-4xl font-bold md:pt-32 pt-20">
          What we do?
        </h1>
        <div className="flex justify-center items-center lg:px-24 px-5 pt-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="bg-[#F6F6F7] p-2 rounded-lg hover:bg-gray-200">
              <div className="p-3">
                <img
                  src={event}
                  alt=""
                  className="bg-[#e3e3e5] inline-block p-2 rounded-md"
                />
                <div className="mt-4">
                  <h1 className="font-semibold text-xl">Events</h1>
                  <p className="text-sm mt-2">
                    Meticulously plan and execute a diverse range of events,
                    from workshops to hosting challenges, fostering hands-on
                    learning experiences.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F7] p-2 rounded-lg hover:bg-gray-200">
              <div className="p-3">
                <img
                  src={opensource}
                  alt=""
                  className="bg-[#e3e3e5] inline-block p-2 rounded-md"
                />
                <div className="mt-4">
                  <h1 className="font-semibold text-xl">Open Source</h1>
                  <p className="text-sm mt-2">
                    Through open-source projects as a means of hands-on learning
                    and collaboration we focus on giving back to the global
                    community of developers.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F7] p-2 rounded-lg hover:bg-gray-200">
              <div className="p-3">
                <img
                  src={technical}
                  alt=""
                  className="bg-[#e3e3e5] inline-block p-2 rounded-md"
                />
                <div className="mt-4">
                  <h1 className="font-semibold text-xl">Technical Projects</h1>
                  <p className="text-sm mt-2">
                    Our support system ensures students receive resources, and
                    opportunities to make their ideas into impactful projects.
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#F6F6F7] p-2 rounded-lg hover:bg-gray-200">
              <div className="p-3">
                <img
                  src={networking}
                  alt=""
                  className="bg-[#e3e3e5] inline-block p-2 rounded-md w-16"
                />
                <div className="mt-4">
                  <h1 className="font-semibold text-xl">Networking</h1>
                  <p className="text-sm mt-2">
                    Cultivate a vibrant networking environment, facilitating
                    connections among students and tech professionals to enhance
                    learning and career opportunities.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#F6F6F7] p-2 rounded-lg hover:bg-gray-200">
              <div className="p-3">
                <img
                  src={hackathon}
                  alt=""
                  className="bg-[#e3e3e5] inline-block p-2 rounded-md w-16"
                />
                <div className="mt-4">
                  <h1 className="font-semibold text-xl">Hackathons</h1>
                  <p className="text-sm mt-2">
                    Through open-source projects as a means of hands-on learning
                    and collaboration we focus on giving back to the global
                    community of developers.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
