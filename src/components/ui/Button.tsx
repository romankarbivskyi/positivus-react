import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
};

const buttonVariants = cva(
  "py-[20px] px-[35px] rounded-[14px] text-[20px] transition-all duration-100 cursor-pointer",
  {
    variants: {
      variant: {
        primary: "bg-dark text-white active:bg-green",
        secondary:
          "bg-transparent text-black border border-dark active:bg-gray",
        tertiary: "bg-green text-black active:bg-gray",
      },
    },
    defaultVariants: {
      variant: "primary",
    },
  },
);

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

export default Button;
