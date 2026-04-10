"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { name: "トップ", href: "/" },
  { name: "お知らせ", href: "/#news" },
  { name: "企画一覧", href: "/events" },
  { name: "タイムテーブル", href: "/schedule" },
  { name: "Q&A", href: "/faq" },
  { name: "アクセス", href: "/access" },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white shadow-[0_4px_0px_rgba(0,0,0,1)] py-3 border-b-4 border-black"
          : "bg-[#f8f9fa] py-5 border-b-4 border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo (Box Style) */}
          <Link 
            href="/" 
            className="flex items-center group active:scale-95 transition-transform"
          >
            <div className="bg-black text-white px-4 py-1 border-4 border-black group-hover:bg-white group-hover:text-black transition-colors -skew-x-12">
              <span className="text-2xl font-black tracking-tighter uppercase leading-none">
                SEISHUN <span className="text-orange-600 tracking-normal text-xl ml-1 group-hover:text-orange-600">'26</span>
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="relative text-sm font-bold tracking-widest text-blue-900 uppercase transition-colors hover:text-orange-600 group active:scale-95"
              >
                {link.name}
                {/* 炎のようなオレンジのアンダーラインエフェクト */}
                <span className="absolute -bottom-1 left-0 w-0 h-1 bg-orange-600 transition-all duration-300 group-hover:w-full skew-x-12"></span>
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-4 -m-2 text-black hover:text-orange-600 hover:border-black transition-all bg-transparent active:scale-90"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="h-8 w-8 stroke-[3]" /> : <Menu className="h-8 w-8 stroke-[3]" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div 
        className={`md:hidden absolute top-full left-0 w-full bg-white border-b-4 border-black shadow-[0_8px_0px_rgba(0,0,0,1)] overflow-y-auto transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? "max-h-[80vh] border-t-4" : "max-h-0 border-t-0"
        }`}
      >
        <nav className="flex flex-col px-4 py-4 space-y-4">
          {navLinks.map((link) => (
              <Link
              key={link.name}
              href={link.href}
              className="text-lg font-black tracking-widest text-blue-900 uppercase px-4 py-3 border-2 border-black bg-white hover:bg-orange-600 hover:text-white hover:-translate-y-1 hover:shadow-[4px_4px_0px_rgba(0,0,0,1)] active:translate-y-1 active:translate-x-1 active:shadow-none transition-all -skew-x-6 block"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <div className="skew-x-6">{link.name}</div>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
