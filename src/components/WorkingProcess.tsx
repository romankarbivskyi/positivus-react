import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Heading,
} from "./ui";

interface IAccordionItem {
  title: string;
  content: string;
}

const accordionItems: IAccordionItem[] = [
  {
    title: "Consultation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Research and Strategy Development",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Implementation",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Monitoring and Optimization",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Reporting and Communication",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
  {
    title: "Continual Improvement",
    content:
      "During the initial consultation, we will discuss your business goals and objectives, target audience, and current marketing efforts. This will allow us to understand your needs and tailor our services to best fit your requirements.",
  },
];

const WorkingProcess = () => {
  return (
    <div className="container mx-auto space-y-20 px-5 sm:px-10">
      <div className="flex flex-col items-center gap-10 md:flex-row">
        <Heading>Our Working Process</Heading>
        <p className="max-w-[580px] text-center md:text-start">
          Step-by-Step Guide to Achieving Your Business Goals
        </p>
      </div>
      <div>
        <Accordion>
          {accordionItems.map(({ title, content }, index) => (
            <AccordionItem value={`val${index + 1}`}>
              <AccordionTrigger>
                <div className="flex items-center gap-[25px]">
                  <h1>
                    {index + 1 < 10 ? "0" : ""}
                    {index + 1}
                  </h1>
                  <h3>{title}</h3>
                </div>
              </AccordionTrigger>
              <AccordionContent>{content}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </div>
  );
};

export default WorkingProcess;
