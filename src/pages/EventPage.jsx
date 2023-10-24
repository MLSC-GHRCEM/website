import React from 'react'
import { eventdata } from "../components/content";

function EventPage() {
  return (
    <div>
  {eventdata.map((content)=>(
<div>
    <p>{content.title}</p>
 
</div>
  ))}
    </div>
  )
}

export default EventPage
