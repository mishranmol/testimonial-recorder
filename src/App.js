import React from "react";
import reviews from "./data.js";
import Testimonial from "./Components/Testimonial.jsx";



const App = () => {


  return (
    <div className="flex flex-col w-[100vw] h-[100vh] justify-center items-center bg-gray-200">

      <div className="text-center">

        <h1 className="text-center font-bold text-4xl">Our testimonials</h1>

        <div className="w-[150px] mx-auto mt-4 h-[5px] bg-violet-400 "></div>

        <Testimonial data={reviews} />
      </div>


    </div>
  );
};

export default App;
