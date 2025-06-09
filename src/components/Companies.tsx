const companies = [
  {
    url: "/images/companies/amazon.png",
    label: "Amazon",
  },
  {
    url: "/images/companies/dribbble.png",
    label: "Dribbble",
  },
  {
    url: "/images/companies/bubspot.png",
    label: "HubSpot",
  },
  {
    url: "/images/companies/netflix.png",
    label: "Netflix",
  },
  {
    url: "/images/companies/notion.png",
    label: "Notion",
  },

  {
    url: "/images/companies/zoom.png",
    label: "Zoom",
  },
];

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
