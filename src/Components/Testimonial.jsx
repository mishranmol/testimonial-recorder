import React from "react";
import Card from "./Card";
import { useState } from "react";



const Testimonials = ({ data }) => {

  const [index, setIndex] = useState(0);

  return (
    <div >
      {
        <Card review={data} index={index} setIndex={setIndex}></Card>
      }


    </div>
  )
}

export default Testimonials; 