import { cn } from "@/lib/utils";
import {
  createContext,
  ReactNode,
  useContext,
  useState,
  useCallback,
} from "react";
import { FaMinus, FaPlus } from "react-icons/fa";

interface IAccordionContext {
  selectedValue: string | null;
  toggle: (value: string) => void;
}

const AccordionContext = createContext<IAccordionContext | null>(null);
const AccordionItemContext = createContext<string | null>(null);

const useAccordionContext = () => {
  const context = useContext(AccordionContext);
  if (!context) {
    throw new Error("useAccordionContext must be used within an Accordion");
  }
  return context;
};

interface AccordionProps {
  children: ReactNode;
  defaultValue?: string;
}

interface AccordionItemProps {
  value: string;
  children: ReactNode;
}

interface AccordionTriggerProps {
  children: ReactNode;
}

interface AccordionContentProps {
  children: ReactNode;
}

const Accordion = ({ children, defaultValue }: AccordionProps) => {
  const [selectedValue, setSelectedValue] = useState<string | null>(
    defaultValue || null,
  );

  const toggle = useCallback((value: string) => {
    setSelectedValue((prev) => (prev === value ? null : value));
  }, []);

  return (
    <AccordionContext.Provider value={{ selectedValue, toggle }}>
      <div className="space-y-5">{children}</div>
    </AccordionContext.Provider>
  );
};

const AccordionItem = ({ children, value }: AccordionItemProps) => {
  const { selectedValue, toggle } = useAccordionContext();
  const isOpen = selectedValue === value;

  const handleClick = useCallback(() => {
    toggle(value);
  }, [toggle, value]);

  return (
    <AccordionItemContext.Provider value={value}>
      <div
        className={cn(
          "shadow-[0_5px_0_0_theme('colors.dark')] cursor-pointer overflow-hidden rounded-[45px] border border-black px-15 transition-all duration-200",
          isOpen ? "bg-green h-auto" : "bg-gray max-h-35",
        )}
        onClick={handleClick}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

const AccordionTrigger = ({ children }: AccordionTriggerProps) => {
  const { selectedValue } = useAccordionContext();
  const value = useContext(AccordionItemContext);
  const isOpen = selectedValue === value;

  return (
    <div
      className={cn(
        "flex h-35 items-center justify-between py-[41px]",
        isOpen ? "mb-[30px] border-b" : "",
      )}
    >
      {children}
      {isOpen ? (
        <div className="bg-gray rounded-full border p-4">
          <FaMinus />
        </div>
      ) : (
        <div className="bg-gray rounded-full border p-4">
          <FaPlus />
        </div>
      )}
    </div>
  );
};

const AccordionContent = ({ children }: AccordionContentProps) => {
  const { selectedValue } = useAccordionContext();
  const value = useContext(AccordionItemContext);
  const isOpen = selectedValue === value;

  return (
    <div
      className={cn(
        "overflow-hidden transition-all duration-200",
        isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0",
      )}
    >
      <div className="pb-[41px]">{children}</div>
    </div>
  );
};

export { Accordion, AccordionItem, AccordionContent, AccordionTrigger };
