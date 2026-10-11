import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonArrowProps {
  name?: string;
  href?: string;
}

const ButtonArrowWhite = ({ href, name }: ButtonArrowProps) => {
  return (
    <>
      <button className="w-full sm:w-auto h-12 sm:h-12 rounded-md px-6 sm:px-8 text-base bg-white text-gray-900 hover:bg-white/90 transition-colors duration-200 group">
        <a href={href}>
          <span className="relative z-10 flex items-center justify-center sm:justify-start">
            {name}
            <ArrowRight className="ml-2 font-semibold h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
          </span>
        </a>
      </button>
    </>
  );
};

export default ButtonArrowWhite;
