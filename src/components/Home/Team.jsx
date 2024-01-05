import React, { useState } from "react";
import {Teamele} from "../Home/Teamele";
import  {TeamInformation}  from "../Home/TeamInformation";

const Team = () => {
  const [room, setRoom] = useState(1);

  return (
    <div
      className="lg:px-40 px-8 pt-4 flex flex-col items-center justify-center space-y-8 py-4"
      id="volunteers"
    >
      <h1 className="text-3xl text-[#00133B] font-bold">Team</h1>
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center items-center gap-4 px-6 lg:px-0">
          <button
            className={
              room == 1
                ? "bg-secondary text-white py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
                : "bg-[#F5f7fb]  py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
            }
            onClick={() => setRoom(1)}
          >
            Leads{" "}
          </button>
          <button
            className={
              room == 2
                ? "bg-secondary  text-white py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
                : "bg-[#F5f7fb] py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
            }
            onClick={() => setRoom(2)}
          >
            Tech
          </button>
          <button
            className={
              room == 3
                ? "bg-secondary  text-white py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
                : "bg-[#F5f7fb] py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
            }
            onClick={() => setRoom(3)}
          >
            Design{" "}
          </button>
          <button
            className={
              room == 4
                ? "bg-secondary  text-white py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
                : "bg-[#F5f7fb] py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
            }
            onClick={() => setRoom(4)}
          >
            PR{" "}
          </button>
          <button
            className={
              room == 5
                ? "bg-secondary  text-white py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
                : "bg-[#F5f7fb] py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
            }
            onClick={() => setRoom(5)}
          >
            Event Management
          </button>
          <button
            className={
              room == 6
                ? "bg-secondary  text-white py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
                : "bg-[#F5f7fb] py-1 lg:px-5 px-2 lg:text-lg text-sm rounded-sm"
            }
            onClick={() => setRoom(6)}
          >
            Content
          </button>
        </div>
        <div className="flex flex-wrap items-center my-8  justify-center  px-4 ">
          {room == 1 &&
          TeamInformation.filter((item) => item.type === "leads").map(
              (item) => <Teamele organizer={item} />
            )}
          {room == 2 &&
           TeamInformation.filter((item) => item.type === "tech").map(
              (item) => <Teamele organizer={item} />
            )}
          {room == 3 &&
            TeamInformation.filter((item) => item.type === "design").map(
              (item) => <Teamele organizer={item} />
            )}

          {room == 4 &&
            TeamInformation.filter((item) => item.type === "pr").map(
              (item) => <Teamele organizer={item} />
            )}
          {room == 5 &&
            TeamInformation.filter(
              (item) => item.type === "event"
            ).map((item) => <Teamele organizer={item} />)}
          {room == 6 &&
            TeamInformation.filter(
              (item) => item.type === "content"
            ).map((item) => <Teamele organizer={item} />)}
        </div>
      </div>
    </div>
  );
};

export default Team;
