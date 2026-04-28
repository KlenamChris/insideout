// components/ProductCarousel.tsx
"use client";

import { useRef, useState } from "react";
import ProductCard from "@/components/ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Product = {
  id: number;
  title: string;
  description: string;
  image: string;
};

const products: Product[] = [
  {
    id: 1,
    title: "HomePod (2nd generation)",
    description: "Improved internals, newer chip, updated features",
    image: "/1.jpg",
  },
  {
    id: 2,
    title: "Smart Speaker Pro",
    description: "Immersive audio with spatial awareness",
    image: "/2.jpg",
  },
  {
    id: 3,
    title: "Smart Speaker Pro",
    description: "Immersive audio with spatial awareness",
    image: "/2.jpg",
  },
  {
    id: 4,
    title: "Smart Speaker Pro",
    description: "Immersive audio with spatial awareness",
    image: "/2.jpg",
  },
];

export default function ProductCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const handlePrev = () => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  };

  const handleNext = () => {
    setActiveIndex((prev) => Math.min(prev + 1, products.length - 1));
  };

  return (
    <div className="relative">
      {/* LEFT BUTTON */}
      <button className="absolute -bottom-33 z-10 bg-white/10 backdrop-blur-md border border-white/10 hover:text-black p-3 rounded-full hover:bg-white transition" onClick={handlePrev}>
        <ChevronLeft />
      </button>

      {/* RIGHT BUTTON */}
      <button className="absolute right-2 -top-20 z-10 bg-white/10 backdrop-blur-md border border-white/10 hover:text-black p-3 rounded-full hover:bg-white transition" onClick={handleNext}>
        <ChevronRight />
      </button>

      {/* SCROLL AREA */}
      <div className={`flex gap-6 overflow-x-auto scroll-smooth snap-x snap-mandatory no-scrollbar rounded-lg`}>
        {products.map((p, i) => (
          <div key={i} className={`${activeIndex === i ? "scale-110" : ""}`}>
          <ProductCard key={i} {...p} />
          </div>
        ))}
      </div>
    </div>
  );
}
