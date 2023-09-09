import React from "react";
import { AiFillTwitterCircle, AiFillLinkedin } from "react-icons/ai";

function Team() {
  const team = [
    {
      id: 1,
      name: "Kirtan Chandak",
      role: "Lead",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/991/321/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
    },
    {
      id: 2,
      name: "Devyani Chavan",
      role: "Co-Lead",
      image:
        "https://static.vecteezy.com/system/resources/previews/004/991/321/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg",
    },
  ];
  return (
    <>
      <h1 className="text-center text-4xl font-bold md:pt-32 pt-12">Team</h1>
      <div className="px-5 pt-8 flex items-center justify-center">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-16 gap-4">
          {team.map((member) => (
            <div
              className="bg-[#F5F7FB] rounded-lg my-2 w-full pb-2 px-2 py-2 cursor-pointer transform transition-transform hover:-translate-y-2"
              id={member.id}
            >
              <img
                src="https://static.vecteezy.com/system/resources/previews/004/991/321/original/picture-profile-icon-male-icon-human-or-people-sign-and-symbol-vector.jpg"
                alt=""
                className="rounded-tl rounded-tr w-64"
              />
              <div className="flex flex-col items-center justify-center">
                <h1 className="font-bold text-primary text-md py-1 text-center">
                  {member.name}
                </h1>
                <h3 className="font-xs text-primary -mt-1">{member.role}</h3>
                <div className="flex flex-row space-x-1">
                  <a href="" target="_blank">
                    <AiFillTwitterCircle size={25} color="#1CB7EB" />
                  </a>
                  <a href="" target="_blank">
                    <AiFillLinkedin size={25} color="#007BB5" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default Team;
