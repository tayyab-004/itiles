import React from "react";
import { CircleUserRound, ShoppingCart, Dot } from "lucide-react";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center bg-black text-white px-15 py-3 border-b-2 border-b-lime-500">
      <div className="flex items-center gap-4">
        <img className="w-28" src="/logo.png" alt="logo" />
      </div>

      <div className="flex items-center gap-6">
        <div className="flex items-center gap-2 cursor-pointer">
          <CircleUserRound className="text-lime-500" />
          <span className="hidden sm:inline">Control Menu</span>
        </div>
        <div className="flex items-center gap-2 cursor-pointer">
          <ShoppingCart className="text-lime-500" />
          <span className="hidden sm:inline">Cosul Meu</span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
