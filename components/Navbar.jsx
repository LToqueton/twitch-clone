import Link from "next/link";
import Image from "next/image";
import React from "react";
import Logo from "../public/assets/logo.png";

const Navbar = () => {
  return (
    <div className="fixed h-14 w-full flex flex-nowarp items-center p-4 bg-[#7777fd] mb-[2px] z-10">
      
      {/* Left side */}
      <div className="flex grow items-center justify-start">
        
        <Link legacyBehavior href="/">
          <a className="flex">
            <Image
            src={Logo}
            alt="/"
            width="36"
            height="36"
            className="cursor-pointer z-10"
          />
          </a>
        </Link>
        
      </div>

      {/* Middle */}

      {/* Right side */}
    </div>
  );
};

export default Navbar;
