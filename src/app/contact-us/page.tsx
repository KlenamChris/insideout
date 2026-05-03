"use client";
import ContactForm from "@/components/ContactForm";
import ContactMap from "@/components/ContactMap";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";

const ContactDetails = [
  {
    label: "Email",
    text: "Contact us by email, and we will respond shortly",
    detail: "info@insideout.com",
  },
  {
    label: "Phone",
    text: "Call us on weekdays from 9AM to 5PM",
    detail: "+233 123 456 7890",
  },
  {
    label: "Mobile",
    text: "Call us on weekdays from 9AM to 5PM",
    detail: "+233 124 357 6980",
  },
  {
    label: "Office",
    text: "Visit us at our office",
    detail: ["P.O. Box ABC 1455 ", "XYZ Street Road", "Accra-Ghana"],
  },
];

const page = () => {
  return (
    <div className="min-h-auto pb-5 p-4 md:h-full w-screen md:p-20 pt-20 bg-spring">
      <div>
        <div
          className="bg-cover md:bg-center w-full h-screen size-auto absolute inset-0"
          style={{ backgroundImage: "url(/1.jpg)" }}
        />
        <div className="absolute inset-0 bg-cover bg-black/50" />
        <div className="relative md:flex md:gap-4 h-full w-full text-white">
          <div className="basis-1/2 flex flex-col justify-between px-10 py-10">
            <div className="mb-5 md:mb-10 space-y-2 md:space-y-4">
              <h1 className="text-3xl md:text-6xl font-bold text-spring">
                Contact Us
              </h1>
              <p className="text-bud">
                We&apos;d love to hear from you. Please fill out this form, and
                w&apos;ll reply soon.
              </p>
            </div>
            <div className="flex itmes-center justify-center">
              <div className="grid grid-cols-1 md:grid-cols-2  gap-4 md:space-x-8 space-y-5 md:space-y-10">
                {ContactDetails.map((contact) => (
                  <div
                    key={contact.label}
                    className="space-y-2.5 md:space-y-5 text-white font-semi-bold"
                  >
                    <h1 className="text-2xl font-medium text-spring">
                      {contact.label}
                    </h1>
                    <p className="">{contact.text}</p>

                    <p>
                      {Array.isArray(contact.detail)
                        ? contact.detail.map((line, i) => (
                            <span key={i} className="block">
                              {line}
                            </span>
                          ))
                        : contact.detail}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="basis-1/2 bg-evergreen w-full  pt-15 md:pt-0 flex-col rounded-3xl flex justify-center items-center space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="flex"
            >
              <Link href={"/"}>
                <Image
                  alt="logo"
                  width={80}
                  height={80}
                  className="w-auto h-auto mb-6 md:mb-0"
                  src={"/logo-3.png"}
                />
              </Link>
            </motion.div>
            <ContactForm />
          </div>
        </div>
      </div>
      <ContactMap />
    </div>
  );
};

export default page;
