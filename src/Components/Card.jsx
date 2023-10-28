import React, { useState } from "react";
import { FaQuoteLeft, FaQuoteRight, } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";




const Card = ({ review, index, setIndex }) => {


    function leftShiftHanlder() {
        if (index - 1 < 0) {
            setIndex(review.length - 1);
        }
        else {
            setIndex(index - 1);
        }
    }

    function RightShiftHanlder() {
        if (index + 1 === review.length) {
            setIndex(0);
        }
        else {
            setIndex(index + 1);
        }
    }

    function SurpriseHanlder() {
        let randomIndex = Math.floor(Math.random() * review.length);
        setIndex(randomIndex);
    }


    return (

        <div className="flex flex-col mt-10 p-10 transition-all duration-700 justify-center items-center relative w-[50vw] h-[65vh] md:w[700px] bg-white  ">





            <img className="rounded-full absolute top-[-40px] left-[60px] w-[140px] h-[140px] z-[250]" src={review[index].image} alt="" />
            <div className="rounded-full absolute left-[63px] bg-violet-500 w-[140px] h-[140px] top-[-50px] z-[100] "></div>





            <div className="mt-20">
                <div className="text-2xl font-bold flex flex-col gap-2 mt-7">
                    <span>{review[index].name}</span>
                    <span className="text-capital text-violet-300 text-sm">{review[index].job}</span>
                </div>

                <div className="flex flex-row justify-center text-violet-400 mt-5">
                    <FaQuoteLeft />
                </div>

                <div className="mt-4 text-slate-500">
                    {review[index].text}
                </div>

                <div className=" flex flex-row justify-center text-violet-400 mt-7">
                    <FaQuoteRight />
                </div>

                <div className="mt-5 gap-3">
                    <button onClick={leftShiftHanlder} className="text-violet-400 cursor-pointer text-4xl "><FiChevronLeft /></button>


                    <button onClick={RightShiftHanlder} className="text-violet-400 cursor-pointer text-4xl "><FiChevronRight /></button>
                </div>

                <div className="mx-auto hover:bg-violet-500 opacity-50 mb-16 rounded-md cursor-pointer border-none bg-violet-900  w-[200px] mt-8 h-[50px]">
                    <button onClick={SurpriseHanlder} className="text-white font-semibold mb-4 text-lg  mt-3">Surprise Me</button>
                </div>
            </div>




        </div>
    )
}

export default Card;