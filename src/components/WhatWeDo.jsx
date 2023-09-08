import React from "react";
import event from "../assets/whatwedo-icons/events.png";
import opensource from "../assets/whatwedo-icons/open-source.png";
import technical from "../assets/whatwedo-icons/projects.png";

function WhatWeDo() {
  return (
    <>
      <h1 className="text-center text-3xl font-bold pt-20">What we do?</h1>
      <div className="flex justify-center items-center px-5 pt-8">
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
                  Hot Module Replacement (HMR) that stays fast <br />
                  regardless of app size.
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
                  Hot Module Replacement (HMR) that stays fast <br />
                  regardless of app size.
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
                  Hot Module Replacement (HMR) that stays fast <br />
                  regardless of app size.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default WhatWeDo;
