'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">렛튜브</h3>
            <p className="text-gray-400 mb-4">OTT 서비스를 더 합리적이고 안전하게 이용할 수 있는 OTT 계정 판매 서비스입니다.</p>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">서비스 안내</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/about" className="text-gray-400 hover:text-white transition-colors">
                  서비스 소개
                </Link>
              </li>
              <li>
                <Link href="/products" className="text-gray-400 hover:text-white transition-colors">
                  상품 구매
                </Link>
              </li>
              <li>
                <Link href="/faq" className="text-gray-400 hover:text-white transition-colors">
                  자주 묻는 질문
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">고객 지원</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-white transition-colors">
                  문의하기
                </Link>
              </li>
              <li>
                <Link href="/refund" className="text-gray-400 hover:text-white transition-colors">
                  환불 정책
                </Link>
              </li>
              <li>
                <Link href="/terms" className="text-gray-400 hover:text-white transition-colors">
                  이용약관
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="text-gray-400 hover:text-white transition-colors">
                  개인정보처리방침
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">고객센터</h3>
            <ul className="space-y-2 text-gray-400">
              <li>이메일: cs@lettube.com</li>
              <li>전화: 02-123-4567</li>
              <li>운영시간: 평일 10:00 - 18:00</li>
              <li>(주말, 공휴일 휴무)</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 mt-10 pt-6 text-gray-500 text-sm">
          <p className="mb-2">(주)렛튜브 | 대표: 홍길동 | 사업자등록번호: 123-45-67890</p>
          <p className="mb-2">주소: 서울특별시 강남구 테헤란로 123 렛튜브빌딩 5층</p>
          <p>© {new Date().getFullYear()} 렛튜브 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 