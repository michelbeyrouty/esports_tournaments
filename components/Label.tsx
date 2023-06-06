import clsx from "clsx";

export default function Label({ className = "", ...props }) {
  return (
    <label
      className={clsx(
        "block text-sm font-medium leading-6 text-gray-300",
        className
      )}
      {...props}
    />
  );
}
