import { ArrowLink, Heading } from "./ui";

const CaseStudies = () => {
  return (
    <div className="container mx-auto space-y-20 px-5 sm:px-10">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <Heading>Case Studies</Heading>
        <p className="max-w-[580px] text-center md:text-start">
          Explore Real-Life Examples of Our Proven Digital Marketing Success
          through Our Case Studies
        </p>
      </div>
      <div className="overflow-x-auto">
        <div className="xl:bg-dark flex min-w-6xl gap-5 rounded-[45px]">
          <div className="bg-dark flex flex-col gap-5 rounded-[45px] px-[50px] py-[42px]">
            <p className="text-white">
              For a local restaurant, we implemented a targeted PPC campaign
              that resulted in a 50% increase in website traffic and a 25%
              increase in sales.
            </p>
            <ArrowLink
              href="#"
              variant="secondary"
              color="green"
              background="dark"
              className="text-green"
            >
              Learn more
            </ArrowLink>
          </div>
          <div className="bg-dark flex flex-col gap-5 rounded-[45px] px-[50px] py-[42px]">
            <p className="text-white">
              For a B2B software company, we developed an SEO strategy that
              resulted in a first page ranking for key keywords and a 200%
              increase in organic traffic.
            </p>
            <ArrowLink
              href="#"
              variant="secondary"
              color="green"
              background="dark"
              className="text-green"
            >
              Learn more
            </ArrowLink>
          </div>
          <div className="bg-dark flex flex-col gap-5 rounded-[45px] px-[50px] py-[42px]">
            <p className="text-white">
              For a national retail chain, we created a social media marketing
              campaign that increased followers by 25% and generated a 20%
              increase in online sales.
            </p>
            <ArrowLink
              href="#"
              variant="secondary"
              color="green"
              background="dark"
              className="text-green"
            >
              Learn more
            </ArrowLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CaseStudies;
