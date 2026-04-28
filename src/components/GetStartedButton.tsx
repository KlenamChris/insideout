import { ChevronRight } from "lucide-react";


const GetStartedButton = () => {
  return (
    <button className="flex py-5 px-2 pr-1.5 rounded-4xl bg-green-800 h-0 items-center">
    <div className="ml-1 text-xs capitalize text-white">Get Started</div>
      <div className="bg-white rounded-full p-1 ml-2 font-extralight">
        <ChevronRight className="w-5 h-5 text-green-700" />
      </div>
    </button>
  );
};

export default GetStartedButton;
