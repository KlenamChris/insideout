import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsLinkedin, BsTwitterX } from "react-icons/bs";
import { FaFacebook } from "react-icons/fa";
import { ImInstagram } from "react-icons/im";
import GetStartedButton from "./GetStartedButton";

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
    { label: "Buy Now", href: "/contact" },
    { label: "Starter Guide", href: "/products" },
    { label: "About", href: "/about" },
    { label: "Partner With Us", href: "/partner" },
  ];
  const Socials = [
    { name: "Facebook", href: "/facebook.com", icon: <FaFacebook /> },
    { name: "Instagram", href: "/instagram.com", icon: <ImInstagram /> },
    { name: "X", href: "/x.com", icon: <BsTwitterX /> },
    { name: "Linkedin", href: "/linkedin.com", icon: <BsLinkedin /> },
  ];

  return (
    <div className="h-auto py-1 bg-black/5">
      <div className="flex flex-col md:flex-row px-2 pt-4 h-auto md:h-100 p-2 space-x-3 space-y-3 md:space-y-0">
        <div
          className="flex bg-center bg-cover w-full h-90 md:w-100 md:h-auto rounded-2xl"
          style={{
            backgroundImage: "url(/2.jpg)",
          }}
        ></div>
        <div className="md:h-auto bg-white px-2 md:px-32 py-12 flex-1 flex flex-col  items-center md:items-start justify-center rounded-2xl space-y-2">
          <h1 className="text-2xl md:text-4xl font-semibold md:font-medium">
            Bring Smart Sound Home Today
          </h1>
          <p className="px-8 md:px-0 mb-6 text-xs md:text-sm text-slate-500">
            Have a question or need help choosing the right solution?
          </p>
          <GetStartedButton />
        </div>
      </div>
      <div className="m-1 p-12 rounded-2xl bg-green-800 h-auto flex flex-col">
        <div className="flex flex-col md:flex-row md:items-center space-y-4 space-x-4 md:justify-between text-slate-400">
          <div className="">
            <div className="flex">
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
                <h2 className="font-bold text-2xl text-lime-300 hover:text-lime-300/40">
                  Insideout Automation
                </h2>
                <p className="-ml-6 md:ml-0">
                  Smart Living & 3D Virtual Tours in Ghana
                </p>
              </div>
            </div>
            <div className="mt-4 text-sm">
              Smart-living and property-technology designed for Ghanaian homes{" "}
              <br />
              and urban realities. Reliable. Renter-friendly. Outage-ready.
            </div>
          </div>

          {/* About Insideout */}
          <div className="flex flex-col text-lime-300 space-y-4">
            <p className="text-sm">About Insideout</p>
            {AboutInsideout.map((url) => (
              <Link
                key={url.href}
                href={url.href}
                className="text-slate-400 text-xs hover:text-lime-300 transition-colors duration-300"
              >
                {url.label}
              </Link>
            ))}
          </div>

          {/* Products */}
          <div className="flex flex-col space-y-4 text-lime-300">
            <p className="text-sm">Products</p>
            {Products.map((url) => (
              <Link
                key={url.href}
                href={url.href}
                className="text-slate-400 text-xs hover:text-lime-300 transition-colors duration-300"
              >
                {url.label}
              </Link>
            ))}
          </div>

          {/* Support */}
          <div className="flex flex-col space-y-4 text-lime-300">
            <p className="text-sm">Support</p>
            {Support.map((url) => (
              <Link
                key={url.href}
                href={url.href}
                className="text-slate-400 text-xs hover:text-lime-300 transition-colors duration-300"
              >
                {url.label}
              </Link>
            ))}
          </div>

          {/* Quick Links */}
          <div className="flex flex-col md:-mt-4 space-y-4 text-lime-300">
            <p className="text-sm">Get Started</p>
            {GetStarted.map((url) => (
              <Link
                key={url.href}
                href={url.href}
                className="text-slate-400 text-xs hover:text-lime-300 transition-colors duration-300"
              >
                {url.label}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col md:flex-row mt-4 md:items-end justify-between text-slate-400">
          <div className="flex space-x-4 space-y-4">
            {Socials.map((url) => (
              <div
                key={url.href}
                className="w-8 h-5 hover:text-lime-300 transition-colors duration-300"
              >
                {url.icon}
              </div>
            ))}
          </div>
          <div className="">
            <p className="text-xs">
              &copy; {new Date().getFullYear()} Insideout Automation. All Rights
              Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
