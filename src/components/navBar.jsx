// eslint-disable-next-line no-unused-vars
import React from "react";

const NavBar = () => {
  return (
    <div className="flex-shrink-0 h-16 md:h-16 lg:h-16 shadow-lg flex items-center justify-between px-8 md:px-8 lg:px-14 text-black text-base md:text-lg lg:text-xl font-sans font-medium leading-6 tracking-tighter">
      <div className="flex gap-2 xs:gap-4 items-center md:justify-start justify-center ">
        <div className="container flex items-center p-0 m-0 gap-2">
          <img
            className="w-10 h-10 xs:w-12 sx:h-12 lg:w-14 lg:h-14 flex-shrink-0 hover:cursor-pointer"
            src="/src/assets/Logo_Cozmek_Black.png"
            alt="COZMEK"
            width={10}
            height={10}
          />
          <span className="hidden md:inline uppercase font-bold text-xl lg:text-2xl">
            COZMEK
          </span>
        </div>
        <div>
          <a href="/">Contact</a>
        </div>
        <div>
          <a href="/">About</a>
        </div>
        <div>
          <a href="/">Register</a>
        </div>
      </div>
      <div className="hidden md:block">
        <h1>Welcome You !...</h1>
      </div>
    </div>
  );
};

export default NavBar;
