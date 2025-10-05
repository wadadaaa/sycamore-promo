"use client";
import Link from "next/link";
import { Menu } from "lucide-react";
import { useState } from "react";

export default function Nav() {
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b">
      <div className="container flex items-center justify-between py-3">
        <Link href="/" className="font-bold text-xl">Sycamore</Link>
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <a href="#services" className="hover:underline">שירותים</a>
          <a href="#process" className="hover:underline">תהליך</a>
          <a href="#cases" className="hover:underline">מקרי בוחן</a>
          <a href="#faq" className="hover:underline">שאלות</a>
          <a href="#contact" className="btn-outline">צור קשר</a>
        </nav>
        <button className="md:hidden p-2" onClick={() => setOpen(v => !v)} aria-label="תפריט">
          <Menu className="w-6 h-6" />
        </button>
      </div>
      {open && (
        <div className="md:hidden border-t">
          <div className="container py-3 flex flex-col gap-3 text-sm">
            <a href="#services" onClick={()=>setOpen(false)}>שירותים</a>
            <a href="#process" onClick={()=>setOpen(false)}>תהליך</a>
            <a href="#cases" onClick={()=>setOpen(false)}>מקרי בוחן</a>
            <a href="#faq" onClick={()=>setOpen(false)}>שאלות</a>
            <a href="#contact" className="btn-outline text-center" onClick={()=>setOpen(false)}>צור קשר</a>
          </div>
        </div>
      )}
    </header>
  );
}
