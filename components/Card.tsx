import clsx from "clsx";

interface CardProps {
  className?: string;
  children?: any;
}

export default function Card({ className, children }: CardProps) {
  return (
    <div className={clsx("rounded-md rop-shadow-xl py-2", className)}>
      {children}
    </div>
  );
}
