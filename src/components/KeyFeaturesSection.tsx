import {
  AudioLines,
  Crown,
  ShieldCheck,
  MessageCircleMore,
} from "lucide-react";

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

const KeyFeaturesSection = () => {
  return (
    <div className="h-auto pt-15 md:pt-0 md:h-150 p-2 flex flex-col items-center bg-black/5 justify-center rounded-2xl space-y-4">
      <h1 className="font-medium text-2xl md:text-4xl text-black/25 relative right-17 md:right-75 md:mb-6">
        Key <span className="text-black">Features</span> & Benefits
      </h1>
      <div className="bg-white flex flex-col md:flex-row h-200 md:h-auto md:w-250 rounded-2xl p-2 gap-2">
        <div className="bg-gray-300/55 basis-1/2 rounded-2xl">
          {Features.map((feature) => (
            <div
              key={feature.label}
              className="bg-white rounded-2xl p-4 m-1.5 h-22 flex flex-row gap-4 items-center"
            >
              <div className="p-3 bg-black/15 rounded-full ">
                {feature.icon}
              </div>
              <div className="flex flex-col">
                <h1 className="">{feature.label}</h1>
                <p className="font-extralight text-xs">{feature.subtext}</p>
              </div>
            </div>
          ))}
        </div>
        <div
          className="bg-cover basis-1/2 rounded-2xl"
          style={{ backgroundImage: "url(/2.jpg)" }}
        ></div>
      </div>
    </div>
  );
};

export default KeyFeaturesSection;
