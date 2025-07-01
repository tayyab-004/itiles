import React from "react";

const EmailUs = () => {
  return (
    <div className="bg-gray-600 text-white py-3 px-10">
      <h2 className="text-2xl md:text-3xl font-bold">
        Fii primul care afla de cele mai noi promotii!
      </h2>
      <p>Inscrie-te la Newsletter-ul nostru si afla instant de promotii</p>
      <div className="flex py-3 flex-col md:flex-row">
        <input
          className="bg-white text-gray-600 w-60 px-5 rounded-lg h-10 mr-2"
          type="text"
          placeholder="Introdu adresa ta de e-mail"
        />
        <button className="bg-lime-500 hover:bg-lime-600 text-black w-20 cursor-pointer rounded-lg h-10 font-bold text-sm mt-1 md:mt-0">
          Inscrie-te
        </button>
      </div>
      <p className="text-sm">
        Prin abonarea la newsletter confirm ca am peste 16 ani si sunt de acord
        cu
      </p>
      <p className="text-sm">
        Termenii si conditiile de utilizare a site-ului itiles.ro
      </p>
    </div>
  );
};

export default EmailUs;
