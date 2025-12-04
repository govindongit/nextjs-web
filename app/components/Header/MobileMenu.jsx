"use client";

import { motion } from "framer-motion";
import NavLinks from "./NavLinks";
import { X } from "lucide-react";

export default function MobileMenu({ open, setOpen }) {
  if (!open) return null;
  return (
    <motion.div
      initial={{ x: "100%" }}
      animate={{ x: 0 }}
      exit={{ x: "100%" }}
      transition={{ duration: 0.3 }}
      className="fixed top-0 right-0 h-full w-3/4 bg-white shadow-lg p-6 z-50"
    >
      <div className="flex justify-end">
        <X
          size={20}
          onClick={() => setOpen(false)}
          className="cursor-pointer"
        />
      </div>
      <div className="mt-10 flex flex-col gap-6 text-lg">
        <NavLinks onClick={() => setOpen(false)} />
      </div>
    </motion.div>
  );
}
