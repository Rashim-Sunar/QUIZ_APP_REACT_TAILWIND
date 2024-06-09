import React from "react";
import { FaGreaterThan } from "react-icons/fa6";

const Home = () => {
  return (
    <section className="lg:w-9/12 md:w-[90%] mt-12 flex flex-col md:flex-row-reverse justify-between items-center mx-auto px-4">

      {/* Right Side  */}
      <div className="md:w-1/2 w-full">
        <img src="./quizBanner.png" alt="quiz image" className="w-full mx-auto" />
      </div>

      {/* Left Side  */}
      <div className="md:w-1/2 w-full space-y-8 mb-5 md:mb-0">
        <h1
          className="my-8 lg:text-4xl text-3xl text-[#333] font-md sm:w-3/5 md:4/6
        md:leading-normal"
        >
          Learn new concepts for each question
        </h1>
        <p className="py-2 mb-6 text-slate-500 font-sm text-md border-l-4 pl-2 border-indigo-800">
          We help you prepare for exams ans quizes
        </p>
        <div className="text-lg font-medium sm:space-x-5 flex flex-col sm:flex-row">
          <button className="bg-yellow-400 text-white px-6 py-2 rounded ">
             Start Quiz
           </button>
          <button className="inline-flex items-center px-6 py-2 border-[2px] border-slate-200 rounded text-primary
          ">
         <FaGreaterThan/> Know more
          </button>
        </div>
      </div>
      
    </section>
  );
};

export default Home;
