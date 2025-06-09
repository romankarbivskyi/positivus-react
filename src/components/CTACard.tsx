import { Button } from "./ui";

const CTACard = () => {
  return (
    <div className="relative container mx-auto my-10 px-5 sm:my-20 sm:px-10">
      <div className="bg-gray rounded-[45px] p-[50px] lg:px-15 lg:py-0">
        <div className="space-y-[26px] lg:w-2/5">
          <h3>Let’s make things happen</h3>
          <p>
            Contact us today to learn more about how our digital marketing
            services can help your business grow and succeed online.
          </p>
          <Button className="w-full sm:w-auto">Get your free proposal</Button>
        </div>
      </div>
      <img
        src="/images/cta/Illustration.png"
        alt="CTA illustration"
        className="absolute top-1/2 right-0 hidden -translate-1/2 lg:block"
      />
    </div>
  );
};

export default CTACard;
