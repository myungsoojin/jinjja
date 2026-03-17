"use client";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="border-b border-gray-100 sticky top-0 bg-white z-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 h-14 flex items-center justify-between">
        <Link href="/" className="font-black text-xl tracking-tight">
          진짜<span className="text-[#FF6B35]">.</span>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          <Link href="/상황별" className="hover:text-[#FF6B35] transition-colors">상황별</Link>
          <Link href="/지역" className="hover:text-[#FF6B35] transition-colors">지역</Link>
          <Link href="/솔직리뷰" className="hover:text-[#FF6B35] transition-colors">솔직리뷰</Link>
          <Link href="/about" className="hover:text-[#FF6B35] transition-colors">소개</Link>
        </nav>

        {/* Mobile menu button */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="메뉴 열기"
        >
          <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black mb-1"></div>
          <div className="w-5 h-0.5 bg-black"></div>
        </button>
      </div>

      {/* Mobile nav */}
      {menuOpen && (
        <nav className="md:hidden border-t border-gray-100 px-4 py-4 flex flex-col gap-4 text-sm font-medium bg-white">
          <Link href="/상황별" onClick={() => setMenuOpen(false)}>상황별</Link>
          <Link href="/지역" onClick={() => setMenuOpen(false)}>지역</Link>
          <Link href="/솔직리뷰" onClick={() => setMenuOpen(false)}>솔직리뷰</Link>
          <Link href="/about" onClick={() => setMenuOpen(false)}>소개</Link>
        </nav>
      )}
    </header>
  );
}
