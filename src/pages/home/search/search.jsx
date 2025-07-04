"use client";
import React from "react";
import searchIcon from "../../../../public/search.png";
import Image from "next/image";
import { ArrowDown, ChevronDown, SearchIcon, SearchX } from "lucide-react";

const Search = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Add your search logic here
  };

  return (
    <div className="w-full bg-gray-100 py-12">
      <div className="max-w-7xl mx-auto px-4">
        <form
          onSubmit={handleSubmit}
          className="flex items-center justify-center max-w-3xl mx-auto w-full gap-3"
        >
          {/* Category Button */}
          <div className="flex flex-row gap-1  items-center h-12 px-4 text-sm font-medium bg-white border border-gray-300 rounded-md transition cursor-pointer">
            <Image
              src={searchIcon}
              alt="Search Icon"
              width={36}
              height={36}
              className="w-9 h-9 object-contain"
            />
            <ChevronDown className="hidden md:flex"/>
          </div>

          {/* Search Input */}
          <div className="relative flex-grow">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <SearchIcon/>
            </div>

            <input
              type="text"
              id="site-search"
              placeholder="Search products..."
              required
              className="w-full h-12 pl-10 pr-4 text-sm text-gray-900 bg-white border border-gray-300 rounded-lg outline-none"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="h-12 px-5 inline-flex items-center text-sm font-medium text-white bg-brand rounded-lg hover:bg-green-700 transition cursor-pointer"
          >
            <svg
              className="w-5 h-5 mr-2"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
            Search
          </button>
        </form>
      </div>
    </div>
  );
};

export default Search;
