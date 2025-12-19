import Link from "next/link";

export default function Button({ children, href, variant = "primary" }) {
  const baseClasses =
    "inline-block px-6 py-3 rounded-2xl text-sm font-medium transition";
  const variantClasses =
    variant === "primary"
      ? "bg-black text-white hover:bg-gray-800"
      : "bg-white text-black border border-gray-300 hover:bg-gray-100 ml-3";

  return (
    <Link href={href} className={`${baseClasses} ${variantClasses}`}>
      {children}
    </Link>
  );
}
