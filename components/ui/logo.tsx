import React from "react";
import Image from "next/image";

const Logo = () => {
  return (
    <div className="flex items-center space-x-2">
      <Image
        src="/ARCON_Element_RGB_Green-Light.svg"
        alt="Logo"
        width={20}
        height={20}
        className="mb-0.5"
      />
      <p className="text-xl">Arcon Agents</p>
    </div>
  );
};

export default Logo;
