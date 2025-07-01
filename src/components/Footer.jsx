import React from "react";
import {
  Mail,
  CirclePlay,
  Headphones,
  Images,
  TvMinimalPlay,
  Clock8,
} from "lucide-react";

const Footer = () => {
  return (
    <div className="bg-black text-white px-6 md:px-20 py-10 text-sm">
      <div className="grid md:grid-cols-4 gap-10">
        {/* Social & Contact */}
        <div>
          <h2 className="font-bold mb-4">Urmărește-ne pe social media!</h2>
          <div className="flex space-x-4 text-lime-500 text-xl mb-4">
            <CirclePlay className="cursor-pointer hover:text-lime-600" />
            <Headphones className="cursor-pointer hover:text-lime-600" />
            <Images className="cursor-pointer hover:text-lime-600" />
            <TvMinimalPlay className="cursor-pointer hover:text-lime-600" />
          </div>
          <div className="flex items-center space-x-2 mb-2 text-lime-500">
            <Mail className="hover:text-lime-600" />
            <span className="text-white cursor-pointer hover:text-lime-600">
              office@itiles.ro
            </span>
          </div>
          <div className="flex items-center space-x-2 text-lime-500">
            <Clock8 className="hover:text-lime-600" />
            <span className="text-white">Luni-Vineri 9-18 / Sambata 10-13</span>
          </div>
        </div>

        {/* Links */}
        <div className="space-y-2">
          <p className="cursor-pointer hover:text-lime-600">Mesterii ITILES</p>
          <p className="cursor-pointer hover:text-lime-600">Franciza ITILES</p>
          <p className="cursor-pointer hover:text-lime-600">Cont Profesional</p>
          <p className="cursor-pointer hover:text-lime-600">Blog</p>
          <p className="cursor-pointer hover:text-lime-600">
            Informatii livrare
          </p>
          <p className="cursor-pointer hover:text-lime-600">Plati</p>
        </div>

        {/* Policies */}
        <div className="space-y-2">
          <p className="cursor-pointer hover:text-lime-600">
            Termeni si conditii
          </p>
          <p className="cursor-pointer hover:text-lime-600">
            Politica de confidentialitate
          </p>
          <p className="cursor-pointer hover:text-lime-600">
            Garantie si mentenanta
          </p>
          <p className="cursor-pointer hover:text-lime-600">Conditii Retur</p>
          <p className="cursor-pointer hover:text-lime-600">Politica Cookie</p>
          <p className="cursor-pointer hover:text-lime-600">Contact</p>
          <p className="cursor-pointer hover:text-lime-600">ANPC</p>
        </div>

        {/* Company and Payment Info */}
        <div className="space-y-3">
          <p className="text-gray-400">
            DS Ceramica SRL, Strada Borhanciului Nr 64 Birou 1 Parter,
            RO17895083
          </p>
          <div className="flex flex-wrap gap-2">
            <img
              src="./netopia.jpg"
              alt="Netopia"
              className="h-15 w-full rounded-xl"
            />
          </div>
          <div className="flex flex-wrap gap-2">
            <img src="./anpc.jpg" alt="ANPC" className="h-7 rounded-xl" />
            <img
              src="./solutii.jpg"
              alt="Solutii Online"
              className="h-7 rounded-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
