import { cn } from "@/lib/utils";
import { ArrowLink, Heading } from "./ui";

const services: ServiceProps[] = [
  {
    className: "bg-gray",
    title: {
      content: ["Search engine", "optimization"],
      color: "green",
    },
    image: {
      url: "/images/services/tokyo-magnifier-web-search-with-elements.png",
      label: "tokyo-magnifier-web-search-with-elements",
    },
    link: {
      url: "#",
      color: "green",
      background: "black",
      className: "text-black",
    },
  },
  {
    className: "bg-green",
    title: {
      content: ["Pay-per-click", "advertising"],
      color: "white",
    },
    image: {
      url: "/images/services/tokyo-selecting-a-value-in-the-browser-window.png",
      label: "tokyo-selecting-a-value-in-the-browser-window",
    },
    link: {
      url: "#",
      color: "green",
      background: "black",
      className: "text-black",
    },
  },
  {
    className: "bg-dark",
    title: {
      content: ["Social Media", "Marketing"],
      color: "white",
    },
    image: {
      url: "/images/services/tokyo-browser-window-with-emoticon-likes-and-stars-around.png",
      label: "tokyo-browser-window-with-emoticon-likes-and-stars-around",
    },
    link: {
      url: "#",
      color: "black",
      background: "white",
      className: "text-white",
    },
  },
  {
    className: "bg-gray",
    title: {
      content: ["Email", "Marketing"],
      color: "white",
    },
    image: {
      url: "/images/services/tokyo-sending-messages-from-one-place-to-another.png",
      label: "tokyo-sending-messages-from-one-place-to-another",
    },
    link: {
      url: "#",
      color: "green",
      background: "black",
      className: "text-black",
    },
  },
  {
    className: "bg-green",
    title: {
      content: ["Content", "Creation"],
      color: "white",
    },
    image: {
      url: "/images/services/tokyo-many-browser-windows-with-different-information.png",
      label: "tokyo-many-browser-windows-with-different-information",
    },
    link: {
      url: "#",
      color: "green",
      background: "black",
      className: "text-black",
    },
  },
  {
    className: "bg-black",
    title: {
      content: ["Analytics and ", "Tracking"],
      color: "white",
    },
    image: {
      url: "/images/services/tokyo-volumetric-analytics-of-different-types-in-web-browsers.png",
      label: "tokyo-volumetric-analytics-of-different-types-in-web-browsers",
    },
    link: {
      url: "#",
      color: "black",
      background: "white",
      className: "text-white",
    },
  },
];

const Services = () => {
  return (
    <div className="container mx-auto space-y-20 px-5 sm:px-10">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <Heading>Services</Heading>
        <p className="max-w-[580px] text-center md:text-start">
          At our digital marketing agency, we offer a range of services to help
          businesses grow and succeed online. These services include:
        </p>
      </div>
      <div className="grid h-full w-full grid-cols-1 grid-rows-6 gap-20 lg:grid-cols-2 lg:grid-rows-3">
        {services.map((service, i) => (
          <Service key={i} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;

interface ServiceProps {
  className?: string;
  title: {
    content: string[];
    color?: "green" | "white" | "black";
  };
  image: {
    url: string;
    label?: string;
  };
  link: {
    url: string;
    color?: "white" | "black" | "green";
    background?: "white" | "black" | "green";
    className?: string;
  };
}

const Service = ({ className, title, image, link }: ServiceProps) => {
  return (
    <div
      className={cn(
        "shadow-[0_5px_0_0_theme('colors.dark')] relative flex h-full w-full flex-col justify-between gap-5 rounded-[45px] border border-black p-[50px] sm:flex-row",
        className,
      )}
    >
      <div className="flex h-full justify-between gap-5 sm:flex-col">
        <div>
          {title.content.map((chunk) => (
            <Heading color={title.color} as="h3">
              {chunk}
            </Heading>
          ))}
        </div>
        <ArrowLink
          href={link.url}
          variant="primary"
          color={link.color}
          background={link.background}
          className={cn(
            "absolute bottom-[50px] left-[50px] sm:static",
            link.className,
          )}
          hideText
        >
          Learn more
        </ArrowLink>
      </div>
      <img
        src={image.url}
        alt={image?.label}
        className="w-2/5 max-w-36 self-end object-contain sm:w-full sm:self-center xl:max-w-[210px]"
      />
    </div>
  );
};
