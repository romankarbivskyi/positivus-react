import { companies } from "@/data/companies";

const Companies = () => {
  return (
    <section className="container mx-auto flex flex-wrap justify-evenly gap-4 overflow-hidden grayscale sm:px-10 lg:justify-between">
      {companies.map(({ url, label }, i) => (
        <img src={url} alt={label} />
      ))}
    </section>
  );
};

export default Companies;
