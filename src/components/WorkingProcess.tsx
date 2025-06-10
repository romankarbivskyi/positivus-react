import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
  Heading,
} from "./ui";
import { workingProcesses } from "@/data/workProcesses";

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
          {workingProcesses.map(({ title, content }, index) => (
            <AccordionItem value={`val${index + 1}`}>
              <AccordionTrigger>
                <div className="flex items-center gap-[25px]">
                  <span className="text-3xl font-medium md:text-6xl">
                    {index + 1 < 10 ? "0" : ""}
                    {index + 1}
                  </span>
                  <p className="text text-[18px] font-medium md:text-3xl">
                    {title}
                  </p>
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
