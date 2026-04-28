import React from "react";

const stats = [
  { label: "Experience", data: "12Y" },
  { label: "Products", data: "4K" },
  { label: "Happy Clients", data: "40K" },
];

const AboutUsSection = () => {
  return (
    <div className="h-250 md:h-150 flex justify-center items-center bg-black/5">
      <div className="flex h-220 md:h-100 md:w-250 bg-white rounded-2xl p-2 flex-col md:flex-row md:space-x-2 space-y-2 md:space-y-0">
        <div
          className="basis-1/2 md:basis-1/3 bg-cover rounded-xl"
          style={{ backgroundImage: "url(/1.jpg)" }}
        ></div>
        <div
          className="bg-gray-300/40 rounded-xl px-10 md:px-18 basis-1/2 md:basis-2/3 flex flex-col items-left justify-center space-y-4
        "
        >
          <h1 className="font-semibold">About Us</h1>
          <p className="font-extralight text-sm">
            Insideout creates smart technology solutions that make homes and
            properties safer, simpler and more intelligent
          </p>
          <div className="flex flex-row text-white text-center gap-3">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="bg-black rounded-lg flex flex-col py-3 text-sm font-bold w-25 h-16"
              >
                {stat.data}
                <span className="text-xs pt-1 font-extralight text-white/55">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUsSection;
