import { navLinks } from "@/data/navLinks";
import { Button } from "./ui";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="container mx-auto mt-10 flex items-center justify-between px-5 sm:px-10">
      <img
        src="/images/common/logo.png"
        alt="Logo"
        className="object-contain"
      />
      <nav className="hidden items-center gap-10 xl:flex">
        <ul className="flex items-center gap-10">
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
      <MobileNav />
    </header>
  );
};

export default Header;
