import React from "react";

const Header = () => {
  return (
    <div className="relative overflow-hidden">
      <img className="absolute top-0 right-0" src="./div.png" alt="" />
      <div className="flex flex-col lg:flex-row items-center justify-between gap-5 px-20 py-15">
        <div className="bg-white text-black rounded-xl shadow-md z-1">
          <img
            className="rounded-xl shadow-3xl"
            src="./tiley-hero.jpg"
            alt=""
          />
        </div>

        <div className="bg-white text-black rounded-xl shadow-md">
          <img
            className="rounded-xl shadow-3xl"
            src="./mini-chat-hero.png"
            alt=""
          />
        </div>

        <div className="flex flex-col gap-3 bg-white shadow-md p-4 rounded-xl text-black z-1">
          <div className="flex gap-2">
            <span className="font-bold">Ultimele designuri generate</span>
            <img className="cursor-pointer rounded-lg w-8 h-8" src="./button.svg" alt="" />
            <img className="cursor-pointer rounded-lg w-8 h-8" src="./button-1.svg" alt="" />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-2">
            <img className="rounded-lg w-35 h-35" src="./img.jpg" alt="" />
            <img className="rounded-lg w-35 h-35" src="./img-1.jpg" alt="" />
          </div>
          <div className="flex items-center flex-col md:flex-row gap-2">
            <img className="rounded-lg w-35 h-35" src="./img-2.jpg" alt="" />
            <img className="rounded-lg w-35 h-35" src="./img-3.jpg" alt="" />
          </div>
        </div>
      </div>
      <img className="absolute bottom-10 left-0" src="./div-1.png" alt="" />
    </div>
  );
};

export default Header;
