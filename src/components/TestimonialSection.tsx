"use client";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Testimonials = [
  {
    id: 1,
    name: "Kwame Mensah",
    role: "Property Developer",
    title: "Seamless smart home integration",
    testimony:
      "The team handled everything from design to installation. Our apartments now have reliable smart lighting and power management, even during outages.",
  },
  {
    id: 2,
    name: "Ama Boateng",
    role: "Homeowner",
    title: "Convenience and control",
    testimony:
      "I can control my lights, security cameras, and appliances from my phone. It’s simple, reliable, and makes daily life much easier.",
  },
  {
    id: 3,
    name: "Kofi Asare",
    role: "Facility Manager",
    title: "Improved security systems",
    testimony:
      "The access control and surveillance setup has significantly improved security across our property. Monitoring remotely has been a game changer.",
  },
  {
    id: 4,
    name: "Naa Adjeley",
    role: "Real Estate Agent",
    title: "Enhanced property value",
    testimony:
      "Smart home features have made our listings more attractive to buyers. Clients love the modern feel and energy efficiency.",
  },
];

const TestimonialSection = () => {
  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % Testimonials.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + Testimonials.length) % Testimonials.length);
  };

  const testimonial = Testimonials[index];
  const isSingle = Testimonials.length <= 1;

  return (
    <div className="h-screen hidden p-2 md:flex flex-col items-center bg-black/5 justify-center space-y-4">
      <h1 className="font-medium text-2xl md:text-4xl text-black/25 relative right-10 md:right-65 mb-6">
        Client Reviews & <span className="text-black">Testimonials</span>
      </h1>
      <div className="bg-white flex flex-col-reverse md:flex-row-reverse md:h-90 md:w-250 rounded-2xl p-2 gap-2">
        <div
          className="bg-gray-300/55 basis-2/3 rounded-2xl flex flex-col justify-between p-6"
          key={testimonial.id}
        >
          <div className="space-y-2">
            <h1 className="font-semibold">{testimonial.title}</h1>
            <p className="font-extralight text-xs transition-opacity duration-300">
              {testimonial.testimony}
            </p>
          </div>
          <div>
            <hr className="text-black/15" />
          </div>
          <div className="flex items-center gap-4">
            <div className="basis-5xs h-50 md:h-auto">
              <Image
                className="rounded-xl md:h-22"
                alt="img"
                width={200}
                height={250}
                src={"/1.jpg"}
              />
            </div>
            <div className="basis-xl h-50 md:h-auto flex flex-col md:relative md:top-1">
              <Quote className="rotate-180 mb-4 text-black/30" />
              <div className="text-left">
                <h1 className="text-sm font-semibold">{testimonial.name}</h1>
                <p className="text-xs font-extralight ">{testimonial.role}</p>
              </div>
            </div>

            {/* Left & Right Button : I'm yet to configure them */}
            <div className="basis-xs flex flex-row justify-end gap-2 relative bottom-0 top-24 md:top-8 ml-auto">
              <button onClick={prev} disabled={isSingle}>
                <ChevronLeft className="h-8 w-8 p-2 bg-gray-50 text-black hover:text-white hover:bg-black transition-all rounded-full  duration-300" />
              </button>
              <button onClick={next}>
                <ChevronRight className="h-8 w-8 p-2 bg-gray-50 text-black hover:text-white hover:bg-black transition-all rounded-full  duration-300" />
              </button>
            </div>
          </div>
        </div>
        <div
          className="bg-cover basis-1/3 rounded-2xl"
          style={{ backgroundImage: "url(/2.jpg)" }}
        ></div>
      </div>
    </div>
  );
};

export default TestimonialSection;
