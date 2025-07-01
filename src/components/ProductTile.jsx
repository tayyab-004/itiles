import React from "react";

const ProductTile = ({ image, title, delivery, oldPrice, newPrice }) => {
  return (
    <div className="w-60 border border-gray-200 rounded-lg shadow-sm overflow-hidden flex flex-col items-center text-center p-3">
      <div className="w-full border-b border-gray-100 pb-3">
        <img src={image} alt={title} className="w-full h-32 object-cover" />
      </div>

      <h3 className="mt-3 text-sm font-semibold whitespace-pre-line">
        {title}
      </h3>

      <div className="flex justify-center mt-2 text-orange-400">
        {[...Array(5)].map((_, idx) => (
          <span key={idx}>★</span>
        ))}
      </div>

      <div className="flex items-center justify-center gap-2 bg-lime-100 text-black text-xs px-3 py-1 mt-2 rounded">
        <img src="./delivery.svg" alt="Truck" className="w-4 h-4" />
        <span>{delivery}</span>
      </div>

      <div className="mt-2 text-sm">
        <p className="line-through text-gray-400">{oldPrice} Lei</p>
        <p className="text-red-600 font-semibold">{newPrice} Lei / m²</p>
      </div>

      <button className="mt-3 cursor-pointer bg-black text-white text-sm px-4 py-2 rounded hover:text-lime-600 transition">
        Adauga in cos
      </button>
    </div>
  );
};

export default ProductTile;
