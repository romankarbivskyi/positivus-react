import { navLinks } from "@/data/navLinks";
import { Button } from "./ui";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="container mx-auto mt-10 flex items-center justify-between px-5 sm:px-10">
      <img
        src="/positivus-react/images/common/logo.png"
        alt="Logo"
        className="object-contain"
      />
      <nav className="hidden items-center gap-10 xl:flex">
        <ul className="flex items-center gap-10">
          {navLinks.map(({ label, url }) => (
            <li>
              <a
                href={url}
                className="relative text-[20px] leading-7 before:absolute before:bottom-0 before:left-0 before:h-0.5 before:w-0 before:bg-black before:transition-all before:duration-300 before:content-[''] hover:before:w-full"
              >
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="secondary">Request a quote</Button>
      </nav>
      <MobileNav />
    </header>
  );
};

export default Header;
