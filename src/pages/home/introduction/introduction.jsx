import React from "react";
import Image from "next/image";
import bg1 from "../../../../public/bg-1.svg";
import bg2 from "../../../../public/bg-2.png";

const Introduction = () => {
  return (
    <div
      style={{ height: "calc(100vh - 140px)" }}
      className="w-full mt-[70px] bg-white relative overflow-hidden "
    >
      {/* Decorative Vectors */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-green-100 rounded-full z-0 animate-pulse-slow opacity-40" />
      <div className="absolute top-[20%] right-[10%] w-16 h-16 border-4 border-green-300 rounded-full z-0 animate-pulse-slow" />
      <div className="absolute bottom-[15%] left-[5%] w-0 h-0 border-l-[30px] border-r-[30px] border-b-[60px] border-l-transparent border-r-transparent border-b-green-200 opacity-50 rotate-45 z-0" />
      <div className="absolute bottom-10 right-[40%] w-10 h-10 bg-lime-200 rotate-45 z-0 opacity-30" />

      {/* Content */}
      <div className="h-full w-full flex flex-col justify-center items-start px-4 sm:px-8 md:px-16 lg:px-24 xl:px-32 text-green-900 z-10 relative">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4 leading-tight animate-fade-in-down">
          Fresh Groceries, <br className="hidden sm:block" /> Delivered Fast
        </h1>
        <p className="text-base sm:text-lg md:text-xl mb-6 max-w-xl animate-fade-in-up">
          Get the best quality fruits, vegetables, and daily essentials
          delivered straight to your doorstep — anytime, anywhere.
        </p>
        <button className="bg-brand text-white px-6 py-3 rounded-full shadow-lg transition duration-300 animate-fade-in-up hover:bg-green-700 cursor-pointer">
          Shop Now
        </button>
      </div>

      {/* Background Illustrations */}
      <Image
        src={bg1}
        alt="Grocery Background"
        priority
        className="absolute bottom-0 right-0 w-48 sm:w-64 md:w-80 lg:w-[400px] pointer-events-none select-none z-0"
      />
      <Image
        src={bg2}
        alt="Decorative Element"
        priority
        className="absolute bottom-[30%] right-0 w-40 sm:w-48 md:w-56 lg:w-64 pointer-events-none select-none opacity-15 z-0"
      />
    </div>
  );
};

export default Introduction;
