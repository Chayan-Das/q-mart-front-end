import CartCard from "@/components/shared/cart/cartCard";
import { ArrowRight, ShoppingCart, X } from "lucide-react";
import React from "react";

const CartSidebar = ({ isOpen, onClose }) => {
  const products = [
    {
      productId: 2,
      name: "Whole Milk - 1 Gallon",
      price: 3.49,
      quantity: 5,
      image:
        "data:image/jpeg;base64,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",
      brand: "DairyLand",
      inStock: true,
    },
  ];

  const totalPrice = products
    .reduce((total, item) => total + item.price * item.quantity, 0)
    .toFixed(2);

  return (
    <div
      className={`fixed top-0 right-0 h-full w-full sm:w-[420px] bg-white shadow-2xl z-100 transform transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between p-4 border-b border-gray-200">
        <div className="flex flex-row gap-2 items-center">
          <ShoppingCart size={25} className="text-green-700" />
          <h3 className="font-bold text-green-700 text-lg">Cart</h3>
          <span className="text-black text-md">({products.length} items)</span>
        </div>
        <X
          size={27}
          onClick={onClose}
          className="text-red-600 rounded-full p-1 hover:bg-gray-100 cursor-pointer"
        />
      </div>

      {products.length > 0 ? (
        <div className="p-3 h-[calc(100vh-64px)] overflow-x-hidden overflow-y-auto flex flex-col gap-3">
          {products.map((product) => (
            <CartCard key={product.productId} product={product} />
          ))}
          <div className=" p-3 bg-brand rounded-md border-gray-300 flex flex-row justify-between items-center">
            <h3 className="font-bold text-white">Total Amount</h3>

            <h3 className="font-medium text-white">$ {totalPrice}</h3>
          </div>

          <div className=" p-3 bg-green-600 rounded-md border-gray-300 flex flex-row justify-center items-center gap-4 select-none cursor-pointer">
            <h3 className="font-bold text-white">Proceed to Checkout</h3>
            <ArrowRight color="white" />
          </div>
        </div>
      ) : (
        <div className="w-full h-full flex flex-row items-center justify-center text-red-700 text-xl">
          <div className="flex flex-row gap-2">
            <ShoppingCart size={28} />
            <h3>Cart Empty</h3>
          </div>
        </div>
      )}
    </div>
  );
};

export default CartSidebar;
