import React from "react";
import Image from "next/image";
import Profile from "../public/profile.png";

function Header() {
  return (
    <div className="marginSection mt-10">
      <section className="relative flex items-center gap-5">
        <div className="bg-gray-400 rounded-full overflow-hidden h-32 w-32">
          <Image src={Profile} alt=""></Image>
        </div>
        <div className="w-fit">
          <h1 className="text-white text-4xl font-bold">Danial Zahidi</h1>
          <h3>Frontend Developer</h3>
        </div>
      </section>
    </div>
  );
}

export default Header;
