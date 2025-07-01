import React from "react";

const ReviewCard = ({ name, image, text, rating, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm text-left">
      <div className="flex items-center gap-3 mb-2">
        <img
          src={image}
          alt={name}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold">{name}</p>
          <div className="text-yellow-400 text-sm">
            {Array.from({ length: Math.floor(rating) }, (_, i) => (
              <span key={i}>★</span>
            ))}
            {rating % 1 >= 0.5 && <span>½</span>}
          </div>
        </div>
      </div>
      <p className="text-sm text-gray-700 mb-4">{text}</p>
      <a
        href={link}
        className="text-lime-400 text-sm font-semibold hover:underline flex items-center gap-1"
      >
        Vezi rezultat <span>→</span>
      </a>
    </div>
  );
};

export default ReviewCard;
