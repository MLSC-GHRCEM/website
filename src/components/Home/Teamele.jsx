import React from 'react'

const Teamele=({organizer})=> {
  return (
    <div className="bg-[#F5F7FB] min-w-[260px] rounded-lg my-2 w-full sm:w-[50%] md:w-[30%] lg:w-[20%] pb-2 px-2 py-2 shadow-[0_3px_10px_rgb(0,0,0,0.2)] cursor-pointer transform transition-transform hover:-translate-y-2 mx-1">
      <img
        src={organizer.img}
        alt={`${organizer.name}-Image`}
        className="rounded-tl rounded-tr w-full"
        loading="lazy"
      />
      <div className="flex flex-col items-center justify-center">
        <h1 className="font-bold text-primary text-md mt-2 text-center">
          {organizer.name}
        </h1>
        <h1 className="font-bold text-primary text-md mt-2 text-center">
          {organizer.position}
        </h1>
      </div>
    </div>
  )
}

export default Teamele;
