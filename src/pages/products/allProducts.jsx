"use client";
import React, { useEffect, useRef, useState } from "react";
import ProductCard from "@/components/shared/productCard/productCard";
import products from "../../../src/json/products.json";
import Breadcrumb from "@/components/ui/breadcrumb";
import Pagination from "@/components/ui/pagination";

const CARD_WIDTH = 200;
const GAP = 24;

const AllProducts = () => {
  const containerRef = useRef(null);
  const [columns, setColumns] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(5);
  const [currentPage, setCurrentPage] = useState(1);

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

  // Calculate total pages
  const totalPages = Math.ceil(products.length / itemsPerPage);

  // Calculate products for current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentProducts = products.slice(startIndex, startIndex + itemsPerPage);

  // Handle page change with bounds checking
  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  // Reset to page 1 if itemsPerPage changes
  useEffect(() => {
    setCurrentPage(1);
  }, [itemsPerPage]);

  return (
    <div className="w-full bg-gray-100 py-5">
      <div className="max-w-7xl mx-auto px-4">
        <div
          ref={containerRef}
          className="flex flex-col items-center justify-center min-h-[400px] p-4"
        >
          <Breadcrumb pageIndex={0} currentPage="Products" />

          <div className="w-full max-w-screen-xl flex justify-between items-center mb-6 mt-2">
            <h2 className="text-2xl font-semibold">Products</h2>

            <div className="flex items-center gap-2">
              <label
                htmlFor="perPage"
                className="text-sm font-bold text-gray-700"
              >
                Show
              </label>
              <select
                id="perPage"
                className="border border-gray-300 rounded px-3 py-1 text-sm focus:outline-none focus:ring-1 focus:ring-brand"
                value={itemsPerPage}
                onChange={(e) => setItemsPerPage(Number(e.target.value))}
              >
                <option value={5}>5</option>
                <option value={20}>20</option>
                <option value={50}>50</option>
                <option value={100}>100</option>
              </select>
            </div>
          </div>

          <div
            className="w-full max-w-screen-xl grid gap-6 transition-all duration-300 place-items-center min-h-[400px]"
            style={{
              gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`,
            }}
          >
            {currentProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>

        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
  );
};

export default AllProducts;
