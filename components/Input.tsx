import clsx from "clsx";

export default function Input({ className = "", ...props }) {
  return (
    <input
      className={clsx(
        "w-full shadow-sm border-0 px-3 py-1.5 ring-inset text-gray-600 rounded",
        className
      )}
      {...props}
    />
  );
}
