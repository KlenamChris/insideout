"use client";
import ImageCarousel from "@/components/ImageCarousel";
import { motion } from "motion/react";

export default function ProductSection() {
  return (
    <section className="px-3 py-6 sm:px-6 lg:px-2 lg:py-10 bg-black/5">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9, ease: "easeIn" }}
        className="rounded-3xl bg-evergreen px-4 py-10 sm:px-8 sm:py-14 lg:px-0 lg:py-16"
      >
        {/* Heading */}
        <div className="mb-8 flex items-center justify-center lg:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="relative md:right-52 text-3xl font-medium md:font-light tracking-tight text-white/45 sm:text-5xl lg:text-6xl"
          >
            Discover Our Smart{" "}
            <span className="font-semibold md:font-medium text-bud">
              Products
            </span>
          </motion.h2>
        </div>

        {/* Carousel */}
        <ImageCarousel />
      </motion.div>
    </section>
  );
}
