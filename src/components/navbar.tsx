"use client";
import { useRouter } from "next/navigation";
import { useState, useRef, useEffect } from "react";

export default function NavBar() {
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false);
  // reference for navbar container; tracks click outside!
  const navRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // if menu is open and click is outside of navbar, close it
      if (
        isOpen &&
        navRef.current &&
        !navRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };
    // add event listener for clicks outside of navbar
    document.addEventListener("mousedown", handleClickOutside);
    // remove event listener when component unmounts
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const closeMenu = () => setIsOpen(false);

  const navLinks = (
    <>
      <button
        className="lg:text-[20px] md:text-[18px] sm:text-[16px] hover:text-gray-300"
        onClick={() => {
          router.push("/about");
          closeMenu();
        }}
      >
        About
      </button>
      <button
        className="lg:text-[20px] md:text-[18px] sm:text-[16px] hover:text-gray-300"
        onClick={() => {
          router.push("/work");
          closeMenu();
        }}
      >
        Work
      </button>
      <button
        className="lg:text-[20px] md:text-[18px] sm:text-[16px] hover:text-gray-300"
        onClick={closeMenu}
      >
        Contact
      </button>
      <a
        className="lg:text-[20px] md:text-[18px] sm:text-[16px] hover:text-gray-300"
        href={"/Jimin_Kim_Resume.pdf"}
        target="_blank"
        onClick={closeMenu}
      >
        Resume
      </a>
    </>
  );

  return (
    <div ref={navRef} className="flex flex-col relative z-50">
      {/* Top row: Logo and nav links (desktop) or Logo and hamburger (mobile) */}
      <div className="flex flex-row justify-between items-center">
        <button
          className="lg:text-[20px] md:text-[18px] sm:text-[16px] hover:text-gray-300"
          onClick={() => router.push("/")}
        >
          JK
        </button>

        {/* Desktop nav - same row as Logo when hamburger not visible */}
        <div className="hidden md:flex flex-row space-x-[36px]">{navLinks}</div>

        {/* Hamburger button - visible on md and below, same row as Logo */}
        <button
          className="md:hidden flex flex-col justify-center items-center w-8 h-8 gap-1 shrink-0"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          <span
            className={`block w-4 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-4 h-0.5 bg-current transition-all duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile overlay - visible when menu is open */}
      {isOpen && (
        <>
          <div
            className="md:hidden fixed inset-0 bg-white/70 z-30"
            onClick={closeMenu}
            aria-hidden
          />
          <div className="md:hidden fixed inset-x-0 top-0 pt-12 pb-12 px-6 bg-background border-b border-gray-300 shadow-sm z-40 rounded-b-[12px] flex flex-col">
            <div className="flex flex-row justify-between items-center mb-4">
              <button
                className="lg:text-[20px] md:text-[18px] sm:text-[16px] hover:text-gray-300"
                onClick={() => {
                  router.push("/");
                  closeMenu();
                }}
              >
                Logo
              </button>
              <button
                className="flex flex-col justify-center items-center w-8 h-8 gap-1 shrink-0"
                onClick={closeMenu}
                aria-label="Close menu"
              >
                <span className="block w-4 h-0.5 bg-current rotate-45 translate-y-1.5" />
                <span className="block w-4 h-0.5 bg-current opacity-0" />
                <span className="block w-4 h-0.5 bg-current -rotate-45 -translate-y-1.5" />
              </button>
            </div>
            <div className="flex flex-col gap-4 items-start pt-4 border-t border-gray-300">
              {navLinks}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
