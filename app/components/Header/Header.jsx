"use client";

import { useState } from "react";
import NavLinks from "./NavLinks";
import Link from "next/link";
import MobileMenu from "./MobileMenu";
import { Menu } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="w-full shadow-sm bg-white sticky top-0 z-40">
        <div className="max-w-6xl mx-auto flex justify-between items-center py-4 px-4">
          {/* Logo */}
          <Link href="/">
            <img src="/next.svg" alt="Logo" className="h-6" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex gap-8 text-sm font-medium">
            <NavLinks />
          </nav>

          {/* Mobile Hamburger */}
          <div className="md:hidden">
            <Menu
              size={28}
              onClick={() => setOpen(true)}
              className="cursor-pointer"
            />
          </div>
        </div>
      </header>

      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}
