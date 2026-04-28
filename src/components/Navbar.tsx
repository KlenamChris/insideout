"use client";
import { Menu } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "Features", href: "/features" },
    { label: "Contact", href: "/contact" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 250) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 z-50 flex text-sm space-x-6 px-10 w-full h-24 items-center justify-between ${
          isScrolled
            ? "bg-white text-black duration-300"
            : "bg-linear-to-b from-black/60 to-transparent text-white duration-300"
        }`}
      >
        <Link href={"/"} className="">
          <Image
            alt="logo"
            width={40}
            height={40}
            src={"/logo.png"}
            className="object-contain hover:scale-110 transition-transform duration-300 h-auto w-auto"
          />
        </Link>
        <ul className="md:flex space-x-4 hidden">
          {links.map((link) => (
            <li
              key={link.href}
              className="hover:text-green-800 transition-colors duration-300"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="uppercase hover:text-green-800 transition-colors duration-300"
          >
            buy now
          </motion.button>
          <div
            className={`h-4 w-px ${isScrolled ? "bg-black" : "bg-white"}`}
          ></div>
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
          >
            <Menu className="w-5 h-5 hover:text-green-800 transition-colors duration-300" />
          </motion.button>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
