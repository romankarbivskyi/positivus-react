import { navLinks } from "@/data/navLinks";
import { useState } from "react";
import { Button } from "./ui";
import { cn } from "@/lib/utils";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <div className="flex xl:hidden">
      <button className="w-10 space-y-2" onClick={() => setIsOpen(!isOpen)}>
        <div className="bg-dark h-1 w-full"></div>
        <div className="bg-dark h-1 w-full"></div>
        <div className="bg-dark h-1 w-full"></div>
      </button>
      <div
        className={cn(
          "fixed top-0 right-0 bottom-0 z-100 w-full space-y-5 bg-white p-10 shadow-2xl transition-all duration-300",
          isOpen ? "translate-x-0 sm:translate-x-1/2" : "translate-x-full",
        )}
      >
        <button
          className="relative h-10 w-10 space-y-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="bg-dark absolute h-1 w-full rotate-45"></div>
          <div className="bg-dark absolute h-1 w-full -rotate-45"></div>
        </button>
        <nav className="flex flex-col items-start gap-5">
          <ul className="flex flex-col items-start gap-10">
            {navLinks.map(({ label, url }) => (
              <li>
                <a href={url} className="text-[20px] leading-7">
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <Button variant="secondary">Request a quote</Button>
        </nav>
      </div>
    </div>
  );
};

export default MobileNav;
