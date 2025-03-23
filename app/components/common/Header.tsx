'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="container">
        <div className="flex justify-between items-center h-16">
          {/* 로고 */}
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold text-white">렛튜브</span>
          </Link>

          {/* 데스크톱 메뉴 */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="nav-link">
              홈
            </Link>
            <Link href="/services" className="nav-link">
              서비스 소개
            </Link>
            <Link href="/products" className="nav-link">
              제품 구매
            </Link>
            <Link href="/qna" className="nav-link">
              Q&A
            </Link>
          </nav>

          {/* 로그인/회원가입/장바구니 */}
          <div className="hidden md:flex items-center space-x-4">
            <Link href="/login" className="nav-link">
              로그인
            </Link>
            <Link href="/signup" className="nav-link">
              회원가입
            </Link>
            <Link href="/cart" className="flex items-center nav-link">
              <span>장바구니</span>
              <span className="ml-1 text-primary">0</span>
            </Link>
          </div>

          {/* 모바일 메뉴 버튼 */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* 모바일 메뉴 */}
        {isMenuOpen && (
          <div className="md:hidden py-2 bg-black">
            <Link href="/" className="block py-2 nav-link">
              홈
            </Link>
            <Link href="/services" className="block py-2 nav-link">
              서비스 소개
            </Link>
            <Link href="/products" className="block py-2 nav-link">
              제품 구매
            </Link>
            <Link href="/qna" className="block py-2 nav-link">
              Q&A
            </Link>
            <div className="border-t border-gray-800 mt-2 pt-2">
              <Link href="/login" className="block py-2 nav-link">
                로그인
              </Link>
              <Link href="/signup" className="block py-2 nav-link">
                회원가입
              </Link>
              <Link href="/cart" className="block py-2 nav-link">
                장바구니 <span className="text-primary">0</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
} 