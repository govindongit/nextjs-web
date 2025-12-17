"use client";

import Link from "next/link";

export default function NavLinks({ onClick }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/pages/about" },
    { name: "Services", href: "/pages/ourservices" },
    { name: "Contact", href: "/pages/contact" },
  ];
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          onClick={onClick}
          className="text-gray-700 hover:text-black transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
}
