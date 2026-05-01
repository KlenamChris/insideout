import { ChevronRight } from "lucide-react";
import { ReactNode } from "react";

type GetStartedButtonProps = {
  label?: string;
  icon?: ReactNode;
  iconBg?: string;
  iconText?: string;
  onClick?: () => void;
  className?: string;
};

const GetStartedButton = ({
  label = "Get Started",
  iconBg = "",
  icon = <ChevronRight className={`w-5 h-5`} />,
  onClick,
  className = "",
}: GetStartedButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={`flex py-5 px-2 pr-1.5 rounded-4xl h-0 items-center ${className}`}
    >
      <span className="ml-1 text-xs capitalize">{label}</span>
      <span className={`${iconBg} rounded-full p-1 ml-2 font-extralight`}>
        {icon}
      </span>
    </button>
  );
};

export default GetStartedButton;
