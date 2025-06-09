import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type HeadingProps = {
  color?: "green" | "white" | "black";
  as?: "h2" | "h3";
  className?: string;
} & React.ComponentProps<"h2"> &
  React.ComponentProps<"h3">;

const headingVariants = cva("px-[7px] rounded-[7px] max-w-max", {
  variants: {
    color: {
      green: "bg-green",
      white: "bg-white",
      black: "bg-dark text-white",
    },
  },
  defaultVariants: {
    color: "green",
  },
});

const Heading = ({ className, color, as = "h2", ...props }: HeadingProps) => {
  const Component = as;

  return (
    <Component
      {...props}
      className={cn(headingVariants({ color }), className)}
    />
  );
};

export default Heading;
