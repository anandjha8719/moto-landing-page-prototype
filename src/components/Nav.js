"use client";
import Image from "next/image";
import React, { useState } from "react";

export const Nav = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <nav className="container mx-auto py-4 px-4 md:px-6 flex justify-between items-center">
      <div className="flex items-center">
        <Image
          src="/motomate123-logo.png"
          alt="MotoMate123 Logo"
          width={180}
          height={50}
        />
      </div>

      <div className="hidden md:flex items-center space-x-6">
        <a href="#overview" className="text-gray-800 hover:text-gray-600">
          Overview
        </a>
        <a href="#train" className="text-gray-800 hover:text-gray-600">
          Train
        </a>
        <a href="#about" className="text-gray-800 hover:text-gray-600">
          About
        </a>
        <a href="#free-trial" className="text-gray-800 hover:text-gray-600">
          Free Trial
        </a>
        <a
          href="#login"
          className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800"
        >
          Dealership Login
        </a>
      </div>

      <div className="md:hidden">
        <button
          className="text-gray-800 focus:outline-none"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
      </div>
      <div
        className={`fixed inset-y-0 right-0 transform ${
          mobileMenuOpen ? "translate-x-0" : "translate-x-full"
        } w-64 bg-white shadow-lg z-50 transition-transform duration-300 ease-in-out md:hidden`}
      >
        <div className="p-6 space-y-6">
          <button
            className="absolute top-4 right-4 text-gray-800"
            onClick={() => setMobileMenuOpen(false)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>

          <div className="flex flex-col space-y-4 mt-8">
            <a
              href="#overview"
              className="text-gray-800 hover:text-gray-600 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Overview
            </a>
            <a
              href="#train"
              className="text-gray-800 hover:text-gray-600 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Train
            </a>
            <a
              href="#about"
              className="text-gray-800 hover:text-gray-600 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#free-trial"
              className="text-gray-800 hover:text-gray-600 text-lg"
              onClick={() => setMobileMenuOpen(false)}
            >
              Free Trial
            </a>
            <a
              href="#login"
              className="bg-black text-white px-6 py-2 rounded-full hover:bg-gray-800 inline-block text-center"
              onClick={() => setMobileMenuOpen(false)}
            >
              Dealership Login
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
