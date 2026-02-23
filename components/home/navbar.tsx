"use client";

import { useState } from "react";
import Link from "next/link";
import {
  Search,
  User,
  ChevronDown,
  Moon,
  Sun,
  Menu,
  ShoppingCart,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { useCart } from "@/lib/hooks/useCart";

const navLinks = [
  { name: "New Drops 🔥", href: "/new-drops" },
  { name: "Men", href: "/men", hasDropdown: true },
  { name: "Women", href: "/women", hasDropdown: true },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
const{items}=useCart()
console.log(items.length)
  return (
    <header className="py-4 md:py-6">
      <div className=" sticky top-0 z-20 max-w-7xl mx-auto bg-white rounded-2xl md:rounded-[24px] px-4 md:px-8 py-3 md:py-4 flex items-center justify-between">
        {/* Mobile Menu Trigger (Tablet & Mobile) */}
        <div className="flex md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="text-secondary-foreground"
              >
                <Menu size={24} />
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="bg-white w-75">
              <SheetHeader className="mb-5">
                <SheetTitle className="text-left font-black text-2xl tracking-tighter uppercase">
                  KICKS
                </SheetTitle>
              </SheetHeader>
              <div className="flex flex-col gap-6 px-5">
                {navLinks.map((link) => (
                  <Link
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-bold text-secondary-foreground hover:text-primary transition-colors flex justify-between items-center"
                  >
                    {link.name}
                    {link.hasDropdown && <ChevronDown size={18} />}
                  </Link>
                ))}
                <hr className="border-muted" />
                <Link
                  href="/profile"
                  className="flex items-center gap-3 font-bold"
                >
                  <User size={20} /> Account
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex items-center gap-6 lg:gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="flex items-center gap-1 text-[14px] font-bold text-secondary-foreground hover:text-primary transition-colors whitespace-nowrap"
            >
              {link.name}
              {link.hasDropdown && <ChevronDown size={14} strokeWidth={3} />}
            </Link>
          ))}
        </div>

        <Link
          href="/"
          className="text-primary-text translate-x-4 md:translate-x-0"
        >
          <div className="relative ">
            <h2 className="text-[50px] font-black text-primary-text text-center flex items-center justify-center tracking-[-0.05em] -ml-5">
              KI
              <div className="relative">
                <div className="z-0 absolute top-0 left-0.5 text-white stroke-text-small">
                  C
                </div>
                <div className="text-primary-text z-10 relative">C</div>
              </div>
              <span className="-ml-0.5">KS</span>
            </h2>
          </div>
        </Link>

        {/* Actions Group */}
        <div className="flex items-center gap-2 md:gap-4 lg:gap-6">
          <button className="hidden sm:block cursor-pointer hover:opacity-70 transition-opacity">
            <Search size={20} className="text-secondary-foreground" />
          </button>

        
          <button className="hidden md:block cursor-pointer hover:opacity-70 transition-opacity">
            <User size={20} fill="" className="text-secondary-foreground" />
          </button>
          <Link href="/cart" className="relative ml-1">
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-accent flex items-center justify-center font-bold text-[12px] text-secondary-foreground shadow-sm hover:scale-105 transition-transform">
              {items.length || 0}
            </div>
          </Link>
        </div>
      </div>
    </header>
  );
}