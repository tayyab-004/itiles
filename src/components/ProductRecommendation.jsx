import React, { useState, useEffect } from "react";
import ProductTile from "./ProductTile";
import products from "./productData";
import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";

const ProductRecommendations = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(5);
  const total = products.length;

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setVisibleCount(1);
      } else if (window.innerWidth < 1024) {
        setVisibleCount(2);
      } else {
        setVisibleCount(5);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const goLeft = () => {
    setCurrentIndex((prev) => (prev - 1 + total) % total);
  };

  const goRight = () => {
    setCurrentIndex((prev) => (prev + 1) % total);
  };

  const getVisibleProducts = () => {
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (currentIndex + i) % total;
      return products[index];
    });
  };

  return (
    <div className="relative px-4 md:px-10 py-10 overflow-hidden">
      <button
        onClick={goLeft}
        className="absolute top-1/2 left-2 sm:left-12 z-10 transform -translate-y-1/2"
      >
        <ChevronLeftIcon className="cursor-pointer w-5 h-5" />
      </button>

      <button
        onClick={goRight}
        className="absolute top-1/2 right-2 sm:right-8 z-10 transform -translate-y-1/2"
      >
        <ChevronRightIcon className="cursor-pointer w-5 h-5" />
      </button>

      <div
        className={`flex gap-1 transition-transform translate-x-255px duration-700 ease-in-out ${
          visibleCount < 3 ? "justify-center" : "justify-start"
        }`}
      >
        {getVisibleProducts().map((product, index) => (
          <div
            key={index}
            className={`flex-shrink-0 flex justify-center ${
              visibleCount === 1
                ? "w-full"
                : visibleCount === 2
                ? "w-[45vw] sm:w-[255px]"
                : "w-[255px]"
            }`}
          >
            <ProductTile
              image={product.image}
              title={product.title}
              delivery={product.delivery}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductRecommendations;
