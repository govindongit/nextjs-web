"use client";

export default function NavLinks({ onClick }) {
  const links = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Contact", href: "/contact" },
  ];
  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={onClick}
          className="text-gray-700 hover:text-black transition-color"
        >
          {link.name}
        </a>
      ))}
    </>
  );
}
