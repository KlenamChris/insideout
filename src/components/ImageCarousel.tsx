"use client";

import { useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";

import { ChevronLeft, ChevronRight } from "lucide-react";
import GetStartedButton from "./GetStartedButton";

const products = [
  {
    title: "HomePod (2nd generation)",
    subtitle: "Improved internals, newer chip, updated features",
    image: "/2.jpg",
  },
  {
    title: "AirPods Max",
    subtitle: "Spatial audio with premium comfort and sound",
    image: "/1.jpg",
  },
  {
    title: "Apple Watch Ultra",
    subtitle: "Built for performance, adventure, and precision",
    image: "/2.jpg",
  },
];

export default function ImageCarousel() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % products.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev === 0 ? products.length - 1 : prev - 1));
  };

  return (
    <div className="relative flex items-center justify-center gap-3 lg:gap-2 overflow-hidden">
      {/* LEFT PREVIEW */}
      <div className="hidden relative -top-25 h-99 w-35 overflow-hidden rounded-3xl bg-[#d9d9d9] md:block lg:w-47.5 -translate-x-6">
        <div className="relative h-full w-full">
          <Image
            src={
              products[current === 0 ? products.length - 1 : current - 1].image
            }
            alt=""
            fill
            className="object-cover opacity-95"
          />
        </div>
      </div>

      {/* MAIN CARD */}
      <div className="relative h-120 w-full rounded-3xl bg-transparent sm:h-130 lg:h-150">
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{
              opacity: 0,
              scale: 0.98,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            exit={{
              opacity: 0,
              scale: 0.98,
            }}
            transition={{
              duration: 0.4,
            }}
            className="absolute inset-0"
          >
            {/* CONTENT */}
            <div className="absolute left-0 top-0 z-10 flex h-full w-full flex-col justify-between p-6 sm:p-10 lg:p-12">
              {/* TEXT */}
              <div className="">
                <h3 className="text-xl font-semibold tracking-tight text-bud sm:text-2xl">
                  {products[current].title}
                </h3>

                <p className="mt-2 text-sm text-white/80 sm:text-base">
                  {products[current].subtitle}
                </p>
              </div>

              {/* BUTTON */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
                className="flex justify-end"
              >
                <GetStartedButton
                  className="bg-white text-black font-medium"
                  iconBg="bg-evergreen text-bud"
                />
              </motion.div>
            </div>

            {/* PRODUCT IMAGE */}
            <div
              className="relative h-full w-full rounded-3xl bg-black/55 bg-blend-darken"
              style={{
                backgroundImage: `url(${products[current].image})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* RIGHT PREVIEW */}
      <div className="hidden relative top-25 h-99 w-35 overflow-hidden rounded-3xl bg-white md:block lg:w-47.5 translate-x-6">
        <div className="relative h-full w-full">
          <Image
            src={products[(current + 1) % products.length].image}
            alt=""
            fill
            className="object-cover opacity-95"
          />
        </div>
      </div>

      {/* LEFT BUTTON */}
      <button
        onClick={prevSlide}
        className="absolute bottom-5 left-3 md:left-20 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-white/10 backdrop-blur-md transition hover:bg-white/20 sm:left-6 lg:bottom-10"
      >
        <ChevronLeft className="h-6 w-6 text-bud" />
      </button>

      {/* RIGHT BUTTON */}
      <button
        onClick={nextSlide}
        className="absolute right-60 md:right-20 bottom-5 md:top-5 z-30 flex h-14 w-14 items-center justify-center rounded-full bg-bud transition hover:scale-105 sm:right-6 lg:top-10"
      >
        <ChevronRight className="h-6 w-6 text-evergreen" />
      </button>
    </div>
  );
}
