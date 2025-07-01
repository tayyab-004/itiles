// Reviews.jsx
import React from "react";
import ReviewCard from "./ReviewCard";

const Reviews = () => {
  const reviewData = [
    {
      name: "Maria F",
      image: "./img.png",
      text: "Tiley mi-a transformat complet sufrageria. Sugestiile AI au fost foarte precise, iar vizualizarea m-a ajutat să iau decizii cu încredere!",
      rating: 5,
      link: "#",
    },
    {
      name: "Mihai N",
      image: "./img-1.png",
      text: "Eram sceptic în privința designului AI, dar Tiley m-a surprins. Sugestiile pentru gresie s-au potrivit perfect cu stilul și bugetul meu!",
      rating: 4,
      link: "#",
    },
    {
      name: "Emma R",
      image: "./img-2.png",
      text: "Designul băii a depășit așteptările mele. Sugestiile oferite de Tiley m-au ajutat să creez acasă o atmosferă ca la spa!",
      rating: 5,
      link: "#",
    },
  ];

  return (
    <div className="bg-gray-50 py-12 px-4 md:px-10">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-10">
        Clientii îl recomandă pe Tiley
      </h2>
      <div className="flex flex-col md:flex-row gap-6 justify-center items-stretch flex-wrap">
        {reviewData.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>
    </div>
  );
};

export default Reviews;
