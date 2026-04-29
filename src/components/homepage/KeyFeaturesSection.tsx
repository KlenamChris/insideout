"use client";
import {
  AudioLines,
  Crown,
  ShieldCheck,
  MessageCircleMore,
} from "lucide-react";
import { motion, Variants } from "motion/react";

const Features = [
  {
    label: "Smart Home Automation",
    subtext:
      "Integrates smart systems for easy control of lighting, climate, security, and appliances.",
    icon: <Crown />,
  },
  {
    label: "System Integration",
    subtext:
      "Unifies multiple technologies into one simple, seamless control system.",
    icon: <AudioLines />,
  },
  {
    label: "Security & Surveillance Systems",
    subtext:
      "Delivers smart cameras, access control, and remote monitoring for property security.",
    icon: <ShieldCheck />,
  },
  {
    label: "Smart Energy & Efficiency",
    subtext:
      "Cuts energy use with automated lighting, smart power control, and scheduling.",
    icon: <MessageCircleMore />,
  },
];

const ContainerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
      delayChildren: 0.2,
    },
  },
};

const itemsVariants: Variants = {
  hidden: {
    opacity: 0,
    x: -40,
  },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut",
    },
  },
};

const KeyFeaturesSection = () => {
  return (
    <div className="h-auto pt-15 md:pt-0 md:h-150 p-2 flex flex-col items-center bg-black/5 justify-center rounded-2xl space-y-4">
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="font-medium text-2xl md:text-4xl text-black/25 relative right-17 md:right-75 md:mb-6"
      >
        Key <span className="text-black">Features</span> & Benefits
      </motion.h1>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.6, ease: "easeIn", delay: 0.2 }}
        className="bg-white flex flex-col md:flex-row h-200 md:h-auto md:w-250 rounded-2xl p-2 gap-2"
      >
        <motion.div
          variants={ContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="bg-gray-300/55 basis-1/2 rounded-2xl"
        >
          {Features.map((feature) => (
            <motion.div
              key={feature.label}
              variants={itemsVariants}
              className="bg-white rounded-2xl p-4 m-1.5 h-22 flex flex-row gap-4 items-center"
            >
              <div className="p-3 bg-black/15 rounded-full ">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h1 className="">{feature.label}</h1>
                <p className="font-extralight text-xs">{feature.subtext}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        <div
          className="bg-cover basis-1/2 rounded-2xl"
          style={{ backgroundImage: "url(/2.jpg)" }}
        ></div>
      </motion.div>
    </div>
  );
};

export default KeyFeaturesSection;
