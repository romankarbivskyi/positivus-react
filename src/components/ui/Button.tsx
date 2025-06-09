import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "tertiary";
};

const buttonVariants = cva("py-[20px] px-[35px] rounded-[14px] text-[20px]", {
  variants: {
    variant: {
      primary: "bg-dark text-white",
      secondary: "bg-transparent text-black border border-dark",
      tertiary: "bg-green text-black",
    },
  },
  defaultVariants: {
    variant: "primary",
  },
});

const Button = ({ className, variant, ...props }: ButtonProps) => {
  return (
    <button {...props} className={cn(buttonVariants({ variant }), className)} />
  );
};

export default Button;
