"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import GetStartedButton from "./GetStartedButton";
import { motion, Variants } from "motion/react";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants: Variants = {
  hidden: {
    opacity: 0,
    y: 30,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      ease: "easeOut",
    },
  },
};

const Footer = () => {
  const AboutInsideout = [
    { label: "About", href: "/about" },
    { label: "Press", href: "/press" },
    { label: "Sustainability", href: "/sustainability" },
    { label: "Licensing", href: "/licensing" },
  ];
  const Products = [
    { label: "All Devices", href: "/all-devices" },
    { label: "Engine", href: "/engine" },
    { label: "Design", href: "/design" },
    { label: "Updates", href: "/updates" },
  ];
  const Support = [
    { label: "Join Account", href: "/join-account" },
    { label: "Warranty", href: "/warranty" },
    { label: "Shipping & Returns", href: "/returns" },
    { label: "Privacy Policy", href: "/privacy-policy" },
  ];
  const GetStarted = [
    { label: "Buy Now", href: "/contact-us" },
    { label: "Starter Guide", href: "/products" },
    { label: "Blog", href: "/blog" },
    { label: "Partner With Us", href: "/partner" },
  ];
  const Socials = [
    { name: "Facebook", href: "/facebook.com", icon: <FaFacebook /> },
    { name: "Instagram", href: "/instagram.com", icon: <ImInstagram /> },
    { name: "X", href: "/x.com", icon: <BsTwitterX /> },
    { name: "Linkedin", href: "/linkedin.com", icon: <BsLinkedin /> },
  ];

  return (
    <div className="h-auto py-1 bg-spring">
      <div className="flex flex-col md:flex-row px-2 pt-4 h-auto md:h-100 p-2 space-x-3 space-y-3 md:space-y-0">
        <div
          className="flex bg-center bg-cover w-full h-90 md:w-100 md:basis-1/3 md:h-auto rounded-2xl"
          style={{
            backgroundImage: "url(/2.jpg)",
          }}
        ></div>
        <div className="bg-bud md:px-32 rounded-2xl space-y-2 md:h-auto md:items-start flex basis-2/3 py-12 px-2">
          <motion.div
            variants={containerVariants}
            initial={"hidden"}
            whileInView={"visible"}
            viewport={{ once: true, amount: 0.4 }}
            className="px-2 py-12 flex-1 flex flex-col  items-center  justify-center "
          >
            <motion.h1
              variants={itemVariants}
              className="text-2xl md:text-4xl font-semibold md:font-medium text-evergreen"
            >
              Bring Smart Sound Home Today
            </motion.h1>
            <motion.p
              variants={itemVariants}
              className="px-2 pt-2 md:px-0 mb-6 text-xs md:text-sm text-black"
            >
              Have a question or need help choosing the right solution?
            </motion.p>
            <motion.div variants={itemVariants}>
              <GetStartedButton
                className="bg-evergreen text-white font-medium"
                iconBg="bg-bud text-evergreen"
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
      <div className="m-1 p-12 rounded-2xl bg-evergreen h-auto flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 space-x-4 md:justify-between text-slate-400">
          <div className="">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex"
            >
              <Link href={"/"}>
                <Image
                  alt="logo-bud"
                  width={50}
                  height={50}
                  className="w-auto h-auto"
                  src={"/logo-bud.png"}
                />
              </Link>
              <div className="ml-1 md:ml-3">
                <h2 className="font-bold text-2xl text-bud hover:text-bud/40">
                  Insideout Automation
                </h2>
                <p className="-ml-6 md:ml-0">
                  Smart Living & 3D Virtual Tours in Ghana
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="mt-4 text-sm"
            >
              Smart-living and property-technology designed for Ghanaian homes{" "}
              <br />
              and urban realities. Reliable. Renter-friendly. Outage-ready.
            </motion.div>
          </div>

          {/* About Insideout */}
          <div className="flex flex-col text-bud space-y-4">
            <p className="text-sm">About Insideout</p>
            {AboutInsideout.map((url, index) => (
              <motion.a
                key={url.href}
                href={url.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="text-slate-400 text-xs hover:text-bud transition-colors duration-300"
              >
                {url.label}
              </motion.a>
            ))}
          </div>

          {/* Products */}
          <div className="flex flex-col space-y-4 text-bud">
            <p className="text-sm">Products</p>
            {Products.map((url, index) => (
              <motion.a
                key={url.href}
                href={url.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="text-slate-400 text-xs hover:text-bud transition-colors duration-300"
              >
                {url.label}
              </motion.a>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col space-y-4 text-bud">
            <p className="text-sm">Support</p>
            {Support.map((url, index) => (
              <motion.a
                key={url.href}
                href={url.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="text-slate-400 text-xs hover:text-bud transition-colors duration-300"
              >
                {url.label}
              </motion.a>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:-mt-4 space-y-4 text-bud">
            <p className="text-sm">Get Started</p>
            {GetStarted.map((url, index) => (
              <motion.a
                key={url.href}
                href={url.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="text-slate-400 text-xs hover:text-bud transition-colors duration-300"
              >
                {url.label}
              </motion.a>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-4 md:items-end justify-between text-slate-400">
          <div className="flex space-x-4 space-y-4">
            {Socials.map((url, index) => (
              <motion.div
                key={url.href}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.4 }}
                transition={{
                  duration: 0.8,
                  ease: "easeOut",
                  delay: index * 0.2,
                }}
                className="w-8 h-5 hover:text-bud transition-colors duration-300"
              >
                {url.icon}
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className=""
          >
            <p className="text-xs">
              &copy; {new Date().getFullYear()}
              <span className="text-bud"> Insideout Automation. </span>
              All Rights Reserved
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
