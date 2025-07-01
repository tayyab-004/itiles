import React from "react";

const Designs = () => {
  return (
    <div className="bg-gray-50 py-12 px-10">
      <div className="flex justify-between mx-4 md:mx-2">
        <div>
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
            Ultimele designuri generate de alti utilizatori
          </h2>
        </div>
        <div className="flex">
          <img className="cursor-pointer w-7 h-7 m-1" src="./button.svg" alt="" />
          <img className="cursor-pointer w-7 h-7 m-1" src="./button-1.svg" alt="" />
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 mt-6 px-2 relative z-10">
        <img
          src="./img.jpg"
          alt="Living Room"
          className="rounded-xl shadow-sm object-cover w-70 h-70"
        />
        <img
          src="./img-1.jpg"
          alt="Bedroom"
          className="rounded-xl shadow-sm object-cover w-70 h-70"
        />
        <img
          src="./img-2.jpg"
          alt="Kitchen"
          className="rounded-xl shadow-sm object-cover w-70 h-70"
        />
        <img
          src="./img-3.jpg"
          alt="Kitchen"
          className="rounded-xl shadow-sm object-cover w-70 h-70"
        />
      </div>
    </div>
  );
};

export default Designs;
