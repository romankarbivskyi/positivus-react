import { Button } from "./ui";

const navLinks = [
  { label: "About us", url: "#" },
  { label: "Services", url: "#" },
  { label: "Use Cases", url: "#" },
  { label: "Pricing", url: "#" },
  { label: "Blog", url: "#" },
];

const Header = () => {
  return (
    <header className="container mx-auto mt-[60px] flex justify-between px-5 sm:px-10">
      <img
        src="/images/common/logo.png"
        alt="Logo"
        className="object-contain"
      />
      <nav className="hidden items-center gap-[40px] xl:flex">
        <ul className="flex items-center gap-[40px]">
          {navLinks.map(({ label, url }) => (
            <li>
              <a href={url} className="text-[20px] leading-[28px]">
                {label}
              </a>
            </li>
          ))}
        </ul>

        <Button variant="secondary">Request a quote</Button>
      </nav>
    </header>
  );
};

export default Header;
