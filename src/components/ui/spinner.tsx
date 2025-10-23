
import { Loader2 } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils"; 

const spinnerVariants = cva(
  "animate-spin text-primary", 
  {
    variants: {
      size: {
        default: "h-8 w-8",
        sm: "h-4 w-4",
        lg: "h-12 w-12",
        icon: "h-5 w-5",
      },
    },
    defaultVariants: {
      size: "default",
    },
  }
);

interface SpinnerProps
  extends React.HTMLAttributes<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {}

const Spinner = ({ className, size, ...props }: SpinnerProps) => {
  return (
    <Loader2 className={cn(spinnerVariants({ size, className }))} {...props} />
  );
};

export { Spinner, spinnerVariants };