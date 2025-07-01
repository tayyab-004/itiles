import React from "react";

const AiBanner = () => {
  return (
    <div className="flex flex-col items-center gap-10 py-10 px-4 md:px-10">
      {/* Heading Section */}
      <div className="flex flex-col items-center text-center">
        <div className="flex flex-col md:flex-row items-center gap-2">
          <img className="w-10 h-10" src="./brain-ai.png" alt="" />
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
            Vorbește cu Tiley AI Interior Designer
          </h1>
        </div>
        <p className="py-3 text-sm sm:text-base">
          Obține idei de design uimitoare cu doar câteva cuvinte.
        </p>
      </div>

      {/* Bulb Section */}
      <div className="flex flex-col md:flex-row items-center shadow-md rounded-xl px-0 md:px-5 py-5 md:py-10 max-w-4xl">
        <div className="flex-shrink-0">
          <img
            className="w-32 h-32 md:w-36 md:h-36"
            src="./ai-bulb.png"
            alt=""
          />
        </div>
        <div className="px-0 md:px-5 mt-5 md:mt-0 text-center md:text-left">
          <p className="text-sm sm:text-base">
            Poți să și vorbești cu Tiley! El te ascultă în timp real şi îți
            oferă <br /> recomandări personalizate pe loc. Nu e nevoie să
            tastezi totul.
          </p>
          <div className="px-0 md:px-10 py-5">
            <button className="cursor-pointer bg-gradient-to-r from-red-400 via-green-400 to-purple-500 text-white font-semibold px-4 py-2 rounded">
              🎤 Începe conversația acum
            </button>
          </div>
        </div>
      </div>

      {/* Chat Section */}
      <div className="flex flex-col items-center py-5 shadow-xl rounded-xl md:py-10 w-full max-w-4xl">
        <div className="flex flex-col items-start gap-3 w-full max-w-2xl pt-40">
          <div className="flex items-start gap-1 md:gap-3 mx-4 md:mx-2">
            <img
              className="w-10 h-10 rounded-full"
              src="./tiley-user.jpg"
              alt=""
            />
            <div className="bg-white px-4 rounded-xl text-sm">
              <p>Bună! Sunt pregătit să te ajut să-ți proiectezi spațiul.</p>
              <p className="pt-1">
                Te rog să încarci poza încăperii. Apasă pe agrafa de mai jos.
              </p>
              <button className="mt-3 flex items-center gap-2 px-4 py-1.5 bg-lime-100 text-gray-700 text-sm rounded-xl border border-lime-500 hover:bg-lime-200 transition">
                <img className="w-5 h-5" src="./attach.svg" alt="attach" />
                Încarcă poza
              </button>
            </div>
          </div>

          {/* Chat input */}
          <div className="mt-5 w-full">
            <div className="flex items-center justify-between border border-red-300 rounded-xl shadow-md mx-4 md:mx-2 px-4 py-2">
              <input
                type="text"
                placeholder="Mesaj către Tiley"
                className="flex-grow bg-transparent outline-none text-sm placeholder-gray-400"
              />
              <div className="flex items-center gap-2">
                <img
                  className="w-5 h-5 cursor-pointer"
                  src="./attach.svg"
                  alt="Attach"
                />
                <button className="p-2 rounded-xl">
                  <img
                    className="w-5 h-5 cursor-pointer"
                    src="./send-icon.svg"
                    alt="Send"
                  />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AiBanner;
