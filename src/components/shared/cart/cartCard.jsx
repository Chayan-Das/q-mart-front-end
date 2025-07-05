import { Minus, Plus, Trash } from "lucide-react";
import React from "react";

const CartCard = ({ product }) => {
  return (
    <div className="border border-slate-100 rounded-md">
      {/* Header */}
      <div className="p-4 bg-slate-50 rounded-t-md flex justify-between items-center gap-4">
        <div className="w-full flex flex-row justify-between items-center gap-2 overflow-hidden">
          <div className="text-green-600 cursor-pointer">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.58 20 4 16.42 4 12C4 7.58 7.58 4 12 4C16.42 4 20 7.58 20 12C20 16.42 16.42 20 12 20Z"
                fill="currentColor"
              />
              <path
                d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
                fill="currentColor"
              />
            </svg>
          </div>

          <h5 className="truncate line-clamp-1 flex-1 select-none text-sm font-semibold">
            {product.name}
          </h5>

          <Trash size={18} color="red" className="cursor-pointer" />
        </div>
      </div>

      {/* Product Section */}
      <div className="p-4 flex flex-col gap-3">
        <div className="bg-white flex gap-4 w-full group">
          {/* Product Image */}
          <div className="w-[72px] h-[72px]  shrink-0 cursor-pointer">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>

          {/* Product Details */}
          <div className="flex flex-col gap-2 grow  overflow-hidden">
            <div className="text-primary text-xs cursor-pointer">
              {product.brand}
            </div>
            
            <div className="text-primary text-base font-bold">
              ${product.price.toFixed(2)}
            </div>

            <div className="text-brand text-sm font-medium">
                ${product.price.toFixed(2)} x {product.quantity}
            </div>

            <div className="flex justify-end items-center gap-2 flex-wrap">
              <div className="p-1 rounded-md border border-slate-200 flex items-center gap-2">
                {/* Decrease */}
                <button className="bg-white border border-gray-300 p-1 w-6 h-6 rounded flex items-center justify-center">
                  <Minus size={12} color="green" />
                </button>

                <span className="w-6 text-center text-slate-950 text-sm">
                  {product.quantity}
                </span>

                {/* Increase */}
                <button className="bg-white border border-gray-300 p-1 w-6 h-6 rounded flex items-center justify-center">
                  <Plus size={12} color="green" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartCard;
