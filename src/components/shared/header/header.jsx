"use client";
import React, { useEffect, useState } from "react";
import navItems from "../../../json/navItems.json";
import Image from "next/image";
import logo from "../../../../public/logo.png";
import {
  ShoppingCart,
  Search,
  User2,
  Menu,
  X,
  Home,
  Store,
  Phone,
  Boxes,
} from "lucide-react";

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const onNavItemClick = (label) => {
    // Map nav labels to corresponding section IDs
    const sectionIds = {
      home: "home",
      products: "products",
      contact: "contact",
      search: "search", // optional if you want a search scroll
    };

    const sectionId = sectionIds[label.toLowerCase()];

    if (sectionId) {
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      console.log("Clicked nav item:", label);
    }

    // Close mobile menu on click
    setIsMobileMenuOpen(false);
  };

  const handleSearchScroll = () => {
    const searchSection = document.getElementById("search");
    if (searchSection) {
      searchSection.scrollIntoView({ behavior: "smooth" });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="bg-white h-[70px] w-full z-50 border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center justify-between">
        {/* Logo */}
        <div>
          <Image
            src={logo}
            alt="Logo"
            width={1239}
            height={1934}
            priority
            className="w-[27px] h-[43px] cursor-pointer"
          />
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-6 lg:space-x-12 text-brand text-sm font-bold">
          {navItems.map((item, idx) => (
            <button
              key={idx}
              onClick={() => onNavItemClick(item.label)}
              className="cursor-pointer bg-transparent border-none p-0 hover:text-gray-500 transition"
            >
              {item.label}
            </button>
          ))}
        </nav>

        {/* Icons */}
        <div className="flex items-center space-x-5 md:space-x-9 text-brand">
          <button
            onClick={handleSearchScroll}
            className="p-1 hover:bg-gray-100 rounded-full"
          >
            <Search className="w-5 h-5 cursor-pointer" />
          </button>

          <div className="relative cursor-pointer hover:bg-gray-100 rounded-full p-2 transition">
            <ShoppingCart className="w-5 h-5 text-brand" />
            <span className="absolute -top-1 -right-1 text-[10px] bg-brand text-white rounded-full w-5 h-5 flex items-center justify-center shadow-sm">
              9
            </span>
          </div>
          <User2 className="w-8 h-8 cursor-pointer p-1 hover:bg-gray-100 rounded-full" />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden focus:outline-none"
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={`md:hidden fixed top-[70px] right-0 w-1/3 bg-white text-brand text-sm font-bold z-40 border-gray-200 border shadow-md transform transition-transform duration-300 ${
          isMobileMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {navItems.map((item, idx) => (
          <div
            key={idx}
            className="flex items-center gap-3 border-b border-gray-300 px-4 py-4 cursor-pointer"
            onClick={() => onNavItemClick(item.label)}
          >
            {item.label === "Home" && <Home className="w-4 h-4" />}
            {item.label === "Products" && <Boxes className="w-4 h-4" />}
            {item.label === "Contact" && <Phone className="w-4 h-4" />}
            <span>{item.label}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Header;
