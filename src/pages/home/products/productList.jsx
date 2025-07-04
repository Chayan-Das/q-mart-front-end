"use client";
import React, { useEffect, useRef, useState } from "react";
import products from "../../../json/products.json";
import ProductCard from "@/components/shared/productCard/productCard";

const CARD_WIDTH = 200; // width of each card in px
const GAP = 24; // gap between cards in px (Tailwind gap-6 => 1.5rem = 24px)

const ProductList = () => {
  const containerRef = useRef(null);
  const [columns, setColumns] = useState(1);

  useEffect(() => {
    const calculateColumns = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.offsetWidth;
        const totalCardWidth = CARD_WIDTH + GAP;
        const cols = Math.floor((containerWidth + GAP) / totalCardWidth);
        setColumns(cols || 1);
      }
    };

    calculateColumns();
    window.addEventListener("resize", calculateColumns);
    return () => window.removeEventListener("resize", calculateColumns);
  }, []);

  return (
    <div className="w-full bg-gray-100 py-5 ">
      <div className="max-w-7xl mx-auto px-4 ">
        <div
          ref={containerRef}
          className="flex flex-col items-center justify-center min-h-[400px] p-4"
        >
          {/* Header */}
          <div className="w-full max-w-screen-xl flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold">Featured Products</h2>
            <button className="text-brand cursor-pointer">View All</button>
          </div>

          {/* Product Grid */}
          <div
            className="w-full max-w-screen-xl grid gap-6 transition-all duration-300 place-items-center min-h-[400px]"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
