import React from 'react'
import { useState } from 'react'

export default function AddRoom() {
   const [newRoom, setNewRoom] = useState({
    photo : null,
    roomType: "",
    roomPrice: ""
   }); 
   
  return (
    <div>AddRoom</div>
  )
}
