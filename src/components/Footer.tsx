import { Button } from "./ui";

const navLinks = [
  { label: "About us", url: "#" },
  { label: "Services", url: "#" },
  { label: "Use Cases", url: "#" },
  { label: "Pricing", url: "#" },
  { label: "Blog", url: "#" },
];

const Footer = () => {
  return (
    <footer className="mx-auto sm:container sm:px-10">
      <div className="bg-dark rounded-t-[45px] px-5 py-12.5 sm:px-15 sm:py-[55px]">
        <div className="mb-15 flex flex-col items-center justify-between gap-9 xl:flex-row">
          <img
            src="/images/common/logo-white.png"
            alt="Logo"
            className="object-contain"
          />
          <nav>
            <ul className="flex flex-col items-center gap-[40px] md:flex-row">
              {navLinks.map(({ label, url }) => (
                <li>
                  <a
                    href={url}
                    className="text-[20px] leading-[28px] text-white"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
          <div className="flex gap-5">
            <img src="/icons/social-media/linked-in.svg" alt="LinkedIn" />
            <img src="/icons/social-media/facebook.svg" alt="Facebook" />
            <img src="/icons/social-media/twitter.svg" alt="Twitter" />
          </div>
        </div>
        <div className="flex flex-col items-center justify-between gap-20 md:flex-row">
          <div className="flex flex-1 flex-col items-start space-y-7 text-center md:text-start xl:flex-2">
            <h4 className="bg-green mx-auto rounded-[7px] px-[7px] md:mx-0">
              Contact us:
            </h4>
            <ul className="space-y-5 text-white">
              <li>Email: info@positivus.com</li>
              <li>Phone: 555-567-8901</li>
              <li>
                Address: 1234 Main St Moonstone City, Stardust State 12345
              </li>
            </ul>
          </div>
          <form className="flex flex-1 flex-col items-center justify-center gap-5 self-stretch rounded-[14px] bg-[#292A32] px-10 py-7.5 xl:flex-3 xl:flex-row">
            <input
              type="email"
              placeholder="Email"
              className="rounded-[14px] border border-white px-[25px] py-[21px] text-white sm:px-[35px] sm:py-[22px]"
            />
            <Button variant="tertiary" className="text-nowrap">
              Subscribe to news
            </Button>
          </form>
        </div>
        <div className="my-12.5 w-full border border-white"></div>
        <div className="flex flex-col items-center gap-10 text-white sm:flex-row">
          <p>
            &copy; {new Date().getFullYear()} Positivus. All Rights Reserved.
          </p>
          <a href="#" className="border-b border-white">
            Privacy Policy
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
