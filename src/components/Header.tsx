"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X, Sparkles } from "lucide-react";

const navLinks = [
  { name: "トップ", href: "/" },
  { name: "お知らせ", href: "/#news" },
  { name: "企画一覧", href: "/events" },
  { name: "タイムテーブル", href: "/schedule" },
  { name: "Q&A", href: "/faq" },
  { name: "アクセス", href: "/access" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-indigo-500/20 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Sparkles className="h-6 w-6 text-indigo-400" />
          <Link
            href="/"
            className="text-xl font-bold tracking-wider text-slate-100 transition-colors hover:text-indigo-300"
          >
            ぎんが祭 <span className="text-indigo-400">2026</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden space-x-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-indigo-400 hover:drop-shadow-[0_0_8px_rgba(129,140,248,0.5)]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Mobile Menu Button */}
        <div className="flex items-center md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-slate-300 transition-colors hover:text-indigo-400 focus:outline-none"
            aria-expanded={isOpen}
          >
            <span className="sr-only">メニューを開く</span>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="space-y-1 bg-slate-900/90 px-4 pb-4 pt-2 shadow-lg backdrop-blur-md">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block rounded-md px-3 py-3 text-base font-medium text-slate-300 transition-colors hover:bg-slate-800 hover:text-indigo-400"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
