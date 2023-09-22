import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import {eventdata} from './content'
function Events() {
  return (
    <>
    <Navbar/>
    <div className="pt-20" id="about">
   <h1 className="text-center font-bold text-4xl pb-20">Events</h1>
   <div class=" px-20 text-center space-y-4 md:space-y-0  grid grid-cols-1 md:grid-cols-3 gap-20  w-full pb-10">
    {eventdata.map((content)=>(
      <div className="bg-[#F5F7FB]   shadow-[0_3px_10px_rgb(0,0,0,0.2)]  cursor-pointer transform transition-transform ">
    
       <img className='block m-auto ' src={content.image}/>     
  <p className="py-1 font-bold text-md lg:text-xl text-primary">
                {content.eventname}
              </p>
        </div>
    ))};
   </div>
    </div>
    <Footer/>
    </>
  )
}

export default Events

