"use client";
import { motion } from "motion/react";

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen" id="home">
      <div
        className="absolute inset-0 bg-cover md:bg-center"
        style={{
          backgroundImage: "url(/1.jpg)",
        }}
      />
      <div className="absolute inset-0 bg-cover bg-black/40" />
      <div className="relative flex h-full items-center justify-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 1 }}
          transition={{ duration: 0.8, ease: "easeInOut" }}
        >
          <div className="md:font-bold font-semibold text-4xl md:text-7xl">
            <h2>Smart Living</h2>
            <h2>Designed for Ghana</h2>
            <p className="font-light text-xs md:text-sm text-gray-300">
              Outage-resilient smart homes for renters and professional 3D
              virtual <br className="block md:hidden" />
              tours for real estate. Select your path below.
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default HeroSection;
