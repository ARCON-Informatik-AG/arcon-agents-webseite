import { ArrowRight } from "lucide-react";
import React from "react";

interface ButtonArrowProps {
  name?: string;
  href?: string;
  target?: string;
  variant?: "default" | "dark";
}

const variantClasses = {
  default: "bg-[#1bcb80] text-white hover:bg-[#00b36b]",
  dark: "bg-arcon-dark-green text-white hover:bg-arcon-dark-green/90",
};

const ButtonArrow = ({ href, name, target, variant = "default" }: ButtonArrowProps) => {
  return (
    <a
      href={href}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      className={`inline-flex w-full sm:w-auto h-12 sm:h-12 rounded-md px-6 sm:px-8 text-base ${variantClasses[variant]} transition-colors duration-200 group items-center justify-center sm:justify-start`}
    >
      <span className="relative z-10 flex items-center justify-center sm:justify-start">
        {name}
        <ArrowRight className="ml-2 font-semibold h-5 w-5 transition-transform duration-200 group-hover:translate-x-1" />
      </span>
    </a>
  );
};

export default ButtonArrow;
