import Image from "next/image";
import React from "react";

export const Hero = () => {
  return (
    <section className="container mx-auto py-12 px-4 md:px-6 text-center relative">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">
          Empower your motorcycle appraisals with precision
        </h1>
        <p className="text-lg mb-8 max-w-2xl mx-auto">
          Discover streamlined, accurate valuation software tailored for
          businesses, enhancing your decision-making and profitability.
        </p>
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-16">
          <a
            href="#learn-more"
            className="bg-white border-2 border-black text-black px-6 py-3 rounded-full hover:bg-gray-100"
          >
            Learn More
          </a>
          <a
            href="#free-trial"
            className="bg-green-400 text-black px-6 py-3 rounded-full hover:bg-green-500"
          >
            Start A Free Trial
          </a>
        </div>
      </div>

      <div className="hidden md:block absolute left-0 top-24 transform -translate-x-3/7 animate-slide-in-left">
        <Image
          src="/motorcycle-left.jpeg"
          alt="Black Motorcycle"
          width={580}
          height={360}
          className="object-contain"
        />
      </div>
      <div className="hidden md:block absolute right-0 top-24  transform translate-x-3/7 animate-slide-in-left ">
        <Image
          src="/motorcycle-right.jpeg"
          alt="Red Motorcycle"
          width={580}
          height={360}
          className="object-contain"
        />
      </div>

      {/* Appraisals Counter */}
      <div className="mt-8 text-center">
        <p className="text-lg font-medium">Appraisals Completed</p>
        <h2 className="text-5xl md:text-7xl font-bold mt-2">4,208,039</h2>
      </div>
    </section>
  );
};
