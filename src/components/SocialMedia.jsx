import React from "react";

const SocialMedia = () => {
  return (
    <div className="relative overflow-hidden bg-white rounded-xl shadow-md px-10 py-10 mx-15">
      <img
        src="./bg-circle.png"
        alt=""
        className="absolute top-0 right-0 w-40 h-40 opacity-20 pointer-events-none"
      />
      <div className="text-center mb-8 relative z-10">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 leading-tight">
          Mândru de spațiul tău? <br />
          Împărtășește-l cu prietenii tăi!
        </h2>
        <p className="text-gray-500 mt-2 text-sm sm:text-base">
          Mândru de spațiul tău? Împărtășește-l cu prietenii tăi!
        </p>
        <div className="mt-6 flex justify-center gap-4 flex-wrap">
          <button className="flex items-center cursor-pointer gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-lg text-sm font-medium">
            <img src="./facebook.png" alt="fb" className="w-5 h-5" />
            Share pe Facebook
          </button>
          <button className="flex items-center cursor-pointer gap-2 bg-gradient-to-r from-purple-500 to-orange-500 hover:brightness-110 text-white px-5 py-2 rounded-lg text-sm font-medium">
            <img src="./instagram.png" alt="insta" className="w-5 h-5" />
            Share pe Instagram
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-6 px-2 relative z-10">
        <img
          src="./img.jpg"
          alt="Living Room"
          className="rounded-xl shadow-sm object-cover w-full h-40"
        />
        <img
          src="./img-2.jpg"
          alt="Bedroom"
          className="rounded-xl shadow-sm object-cover w-full h-40"
        />
        <img
          src="./img-3.jpg"
          alt="Kitchen"
          className="rounded-xl shadow-sm object-cover w-full h-40"
        />
      </div>
    </div>
  );
};

export default SocialMedia;
