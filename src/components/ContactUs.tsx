import { Button, Heading } from "./ui";

const ContactUs = () => {
  return (
    <div className="container mx-auto space-y-20 px-5 sm:px-10">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <Heading>Contact Us</Heading>
        <p className="max-w-[580px] text-center md:text-start">
          Connect with Us: Let's Discuss Your Digital Marketing Needs
        </p>
      </div>
      <div className="bg-gray px- relative overflow-hidden rounded-[45px] px-7.5 py-10 md:px-15 lg:px-25 lg:py-20">
        <form className="w-full space-y-10 xl:max-w-[556px]">
          <div className="xs:gap-[35px] flex gap-2">
            <label
              htmlFor="sayHi"
              className="xs:gap-3.5 flex items-center gap-2"
            >
              <input
                type="radio"
                id="sayHi"
                name="msgType"
                defaultChecked
                hidden
              />
              <span className="checkmark"></span>
              Say Hi
            </label>
            <label
              htmlFor="getQuote"
              className="xs:gap-3.5 flex items-center gap-2"
            >
              <input type="radio" id="getQuote" name="msgType" hidden />
              <span className="checkmark"></span>
              Get a Quote
            </label>
          </div>
          <div className="space-y-[25px]">
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                placeholder="Name"
                className="placeholder: focus:outline-green rounded-[14px] border bg-white px-[30px] py-[18px] placeholder:text-[#898989]"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="email">Email*</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                className="placeholder: focus:outline-green rounded-[14px] border bg-white px-[30px] py-[18px] placeholder:text-[#898989]"
              />
            </div>
            <div className="flex flex-col gap-[5px]">
              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                placeholder="Message"
                rows={6}
                required
                className="placeholder: focus:outline-green rounded-[14px] border bg-white px-[30px] py-[18px] placeholder:text-[#898989]"
              />
            </div>
            <Button className="w-full">Send Message</Button>
          </div>
        </form>
        <img
          src="/images/contact-us/Illustration.png"
          alt="Contact Us img"
          className="absolute top-1/2 -right-2/8 hidden -translate-y-1/2 object-contain xl:block"
        />
      </div>
    </div>
  );
};

export default ContactUs;
