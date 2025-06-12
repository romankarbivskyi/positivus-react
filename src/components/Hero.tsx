import { Button } from "./ui";

const Hero = () => {
  return (
    <section className="relative container mx-auto my-[70px] px-5 sm:px-10">
      <div className="w-full space-y-[35px] lg:w-2/5">
        <h1>Navigating the digital landscape for success</h1>
        <img
          src="/positivus-react/images/hero/illustration.png"
          alt="Illustration"
          className="lg:absolute lg:top-0.5 lg:right-7"
        />
        <p>
          Our digital marketing agency helps businesses grow and succeed online
          through a range of services including SEO, PPC, social media
          marketing, and content creation.
        </p>
        <Button className="w-full sm:w-auto">Book a consultation</Button>
      </div>
    </section>
  );
};

export default Hero;
