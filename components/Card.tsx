import clsx from "clsx";

export default function Card({ className = "", children = undefined }) {
  return (
    <div className={clsx("rounded-md rop-shadow-xl", className)}>
      {children}
    </div>
  );
}
