import clsx from "clsx";

export default function Card({ className = "", children }) {
  return (
    <div className={clsx("rounded-md rop-shadow-xl", className)}>
      {children}
    </div>
  );
}
