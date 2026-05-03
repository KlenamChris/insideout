"use client";
import { Menu, X, XIcon } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

const Navbar = () => {
  const links = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/" },
    { label: "Features", href: "/" },
    { label: "Contact", href: "/contact-us" },
  ];

  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
        className={`fixed top-0 left-0 z-50 flex text-sm space-x-6 px-10 w-full h-24 items-center justify-between font-medium ${
          isScrolled
            ? "bg-white text-evergreen duration-300"
            : "bg-linear-to-b from-black/60 to-transparent text-white duration-300"
        }`}
      >
        <Link href={"/"} className="">
          <Image
            alt="logo"
            width={40}
            height={40}
            src={`${isScrolled ? "/logo.png" : "/logo-bud.png"}`}
            className="object-contain hover:scale-110 transition-transform duration-300 h-auto w-auto"
          />
        </Link>
        <ul className="md:flex space-x-4 hidden">
          {links.map((link) => (
            <li
              key={link.href}
              className="hover:text-spring transition-colors duration-300"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-4">
          <motion.button
            whileHover={{ scale: 1.15 }}
            whileTap={{ scale: 0.95 }}
            className="uppercase hover:text-spring transition-colors duration-300"
          >
            buy now
          </motion.button>
          <div
            className={`h-4 w-px ${isScrolled ? "bg-evergreen" : "bg-white"}`}
          />
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:pointer-events-none"
          >
            <Menu
              className={`w-5 h-5 ${isScrolled ? "text-evergreen" : "text-white"} hover:text-spring transition-colors duration-300`}
            />
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-0 z-40 h-screen bg-spring/95 backdrop-blur-xl pt-24 px-6 md:hidden flex flex-col gap-8"
            >
              <button
                className="text-bud"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <XIcon className="md:hidden absolute top-10 right-10" />
              </button>
              <nav className="flex flex-col gap-6 items-center text-center">
                {links.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-lg font-medium text-bud transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <Link
                  href="/contact"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="mt-4"
                >
                  <button className="rounded-full bg-spring text-white px-8 py-3 text-lg font-medium shadow-lg w-full">
                    Buy Now
                  </button>
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
};

export default Navbar;
