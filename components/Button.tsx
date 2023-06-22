import { cva, VariantProps } from "class-variance-authority";

const buttonClasses = cva(
  [
    "flex",
    "justify-center",
    "rounded-md",
    "px-30",
    "py-1.5",
    "font-semibold",
    "leading-6",
    "shadow-sm",
  ],
  {
    variants: {
      intent: {
        primary: ["bg-greeny", "text-sm", "text-blacky", "border-transparent"],
        secondary: ["bg-blacky", "text-whity"],
        text: ["bg-transparent", "text-blacky", "hover:bg-gray-100"],
      },
      size: {
        small: ["text-xs", "py-1", "px-2"],
        medium: ["text-md", "px-8", "py-2"],
        large: ["text-xlg", "px-8", "py-4"],
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "medium",
    },
  }
);

export interface ButtonProps
  extends React.HTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonClasses> {}

export default function Button({
  children,
  className,
  intent,
  size,
  ...props
}: ButtonProps) {
  return (
    <button className={buttonClasses({ intent, size, className })} {...props}>
      {children}
    </button>
  );
}
