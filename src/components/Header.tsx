"use client";
import Link from "next/link";
import Logo from "./Logo";
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const MobileCloseButton = () => {
  return (
    <button className="navbar-burger flex items-center dark:text-white border rounded p-2">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="currentColor"
        height="15px"
        width="15px"
        version="1.1"
        id="Capa_1"
        viewBox="0 0 460.775 460.775"
      >
        <path d="M285.08,230.397L456.218,59.27c6.076-6.077,6.076-15.911,0-21.986L423.511,4.565c-2.913-2.911-6.866-4.55-10.992-4.55  c-4.127,0-8.08,1.639-10.993,4.55l-171.138,171.14L59.25,4.565c-2.913-2.911-6.866-4.55-10.993-4.55  c-4.126,0-8.08,1.639-10.992,4.55L4.558,37.284c-6.077,6.075-6.077,15.909,0,21.986l171.138,171.128L4.575,401.505  c-6.074,6.077-6.074,15.911,0,21.986l32.709,32.719c2.911,2.911,6.865,4.55,10.992,4.55c4.127,0,8.08-1.639,10.994-4.55  l171.117-171.12l171.118,171.12c2.913,2.911,6.866,4.55,10.993,4.55c4.128,0,8.081-1.639,10.992-4.55l32.709-32.719  c6.074-6.075,6.074-15.909,0-21.986L285.08,230.397z" />
      </svg>
    </button>
  );
};

const MobileOpenButton = () => {
  return (
    <button className="navbar-burger flex items-center dark:text-white border rounded p-2">
      <svg
        className="block h-4 w-4 fill-current"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>Mobile menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
      </svg>
    </button>
  );
};

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const clickOffMenuEvent = (e: MouseEvent) => {
      if (e.target !== document.getElementById("mobile-menu")) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("click", clickOffMenuEvent);
    }

    return () => {
      document.removeEventListener("click", clickOffMenuEvent);
    };
  }, [isOpen, setIsOpen]);

  return (
    <>
      <div className="sm:hidden" onClick={() => setIsOpen(!isOpen)}>
        {!isOpen && <MobileOpenButton />}
        {isOpen && <MobileCloseButton />}
      </div>
      {isOpen &&
        createPortal(
          <div
            id="mobile-menu"
            className="absolute top-20 right-4 bg-white dark:bg-dark p-6 border boder-color-white rounded flex flex-col gap-4 text-right"
          >
            <Link className="dark:text-white" href="/services">
              Services
            </Link>
            <Link className="dark:text-white" href="/about">
              About
            </Link>
          </div>,
          document.body
        )}
    </>
  );
};

const MainMenu = () => {
  return (
    <div className="hidden sm:flex gap-4">
      <Link className="dark:text-white" href="/services">
        Services
      </Link>
      <Link className="dark:text-white" href="/about">
        About
      </Link>
    </div>
  );
};

const Header = () => {
  return (
    <header className="container flex items-center justify-between py-4">
      <Link href="/">
        <Logo />
      </Link>
      <MobileMenu />
      <MainMenu />
      {/* oswald */}
      {/* anton */}
      {/* teko */}
      {/* khand */}
      {/* orbitron */}
    </header>
  );
};

export default Header;
