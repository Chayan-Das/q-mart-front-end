"use client";
import React from "react";
import { Star, Heart, ShoppingCart } from "lucide-react";
import pic from "../../../../public/logo.png";

const ProductCard = ({ product }) => {
  const { current, original, discount } = product.price;
  const isOutOfStock = product.inStock === false; // Assuming this prop exists

  return (
    <div className="w-[200px] bg-white border border-[#D8D9E0] rounded-md p-4 relative">
      {/* Out of Stock Badge */}
      {isOutOfStock && (
       <div className="absolute inset-0 bg-gray-100/80 z-10 flex items-center justify-center">
  <div className="px-2 py-0.5 bg-red-600 text-white font-bold text-xs border border-red-200 rounded shadow">
    Out of stock
  </div>
</div>

      )}

      {/* Wishlist Button */}
      <button className="absolute top-1 right-1 bg-white rounded-full w-7 h-7 flex items-center justify-center shadow-sm z-10">
        <Heart className="text-red-600 w-5 h-5 p-[1px]" />
      </button>

      {/* Image Section */}
      <div className="w-full h-[190px] bg-gray-100 rounded-sm overflow-hidden flex items-center justify-center relative">
        <img
          src={product.image}
          alt={product.name}
          onError={(e) => (e.target.src = pic.src)}
          className="object-contain h-full rounded-sm"
        />
      </div>

      {/* Product Info */}
      <div className="mt-4 space-y-1 px-2">
        <span className="block text-[#363842] text-sm font-bold truncate">
          {product.name}
        </span>

        <div className="flex items-center gap-1 text-[#363842]">
          {Array.from({ length: 5 }, (_, i) => (
            <Star
              key={i}
              className={`w-3 h-3 ${
                i < Math.floor(product.rating)
                  ? "fill-[#0dac0d] text-[#0dac0d]"
                  : "text-gray-300"
              }`}
            />
          ))}
          <span className="text-sm text-[#81859C] ml-2">
            ({product.reviewCount})
          </span>
        </div>

        <div>
          <div className="flex items-center gap-2">
            <span className="line-through text-[#81859C] text-sm">
              ${original}
            </span>
            <span className="bg-[#E9F0FF] text-[#102B6B] text-xs px-2 py-0.5 rounded">
              {discount}
            </span>
          </div>
          <div className="text-[#363842] font-semibold text-md">${current}</div>
        </div>
      </div>

      {/* Add to Cart Button */}
      {!isOutOfStock && (
        <button className="absolute bottom-3 right-3 w-7 h-7 bg-[#2667FF] rounded-sm flex items-center justify-center">
          <ShoppingCart className="text-white w-4 h-4" />
        </button>
      )}
    </div>
  );
};

export default ProductCard;
