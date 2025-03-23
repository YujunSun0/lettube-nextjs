'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import FadeInView from '../common/FadeInView';

const products = [
  { 
    id: 1, 
    name: '유튜브 프리미엄', 
    period: '6개월', 
    price: 42000, 
    originalPrice: 89400,
    icon: '/images/youtube.svg',
    color: 'bg-gradient-to-r from-red-600 to-red-500',
    logoColor: 'text-red-600',
    features: ['광고 없는 영상 시청', '백그라운드 재생', 'YouTube Music 이용']
  },
  { 
    id: 2, 
    name: '넷플릭스', 
    period: '6개월', 
    price: 48000, 
    originalPrice: 102000,
    icon: '/images/netflix.svg',
    color: 'bg-gradient-to-r from-red-700 to-red-600',
    logoColor: 'text-red-700',
    features: ['프리미엄 4K 화질', '4인 동시 시청', '다운로드 지원']
  },
  { 
    id: 3, 
    name: '디즈니 플러스', 
    period: '6개월', 
    price: 36000, 
    originalPrice: 59400,
    icon: '/images/disney.svg',
    color: 'bg-gradient-to-r from-blue-700 to-blue-600',
    logoColor: 'text-blue-700',
    features: ['4K UHD 및 HDR', '디즈니 컨텐츠', '최대 4대 기기 이용']
  },
  { 
    id: 4, 
    name: '스포티파이', 
    period: '6개월', 
    price: 36000, 
    originalPrice: 59400,
    icon: '/images/spotify.svg',
    color: 'bg-gradient-to-r from-green-600 to-green-500',
    logoColor: 'text-green-600',
    features: ['광고 없는 음악 감상', '오프라인 재생', '무제한 건너뛰기']
  },
  { 
    id: 5, 
    name: '애플 뮤직', 
    period: '6개월', 
    price: 36000, 
    originalPrice: 59400,
    icon: '/images/apple.svg',
    color: 'bg-gradient-to-r from-gray-800 to-gray-700',
    logoColor: 'text-gray-800',
    features: ['고음질 무손실 음악', '공간 음향', '시간 동기화 가사']
  },
  { 
    id: 6, 
    name: '티빙', 
    period: '6개월', 
    price: 42000, 
    originalPrice: 71400,
    icon: '/images/tving.svg',
    color: 'bg-gradient-to-r from-blue-500 to-blue-400',
    logoColor: 'text-blue-500',
    features: ['국내 인기 방송', '오리지널 컨텐츠', 'Full HD 화질']
  },
];

export default function Products() {
  const fadeInUpVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };
  
  return (
    <section className="py-24 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <FadeInView>
          <div className="text-center mb-16">
            <span className="inline-block px-4 py-1.5 bg-primary/10 rounded-full text-primary text-sm font-medium mb-4 font-pretendard">
              안전하고 합리적인 가격
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              공동구독으로 <span className="text-primary">최대 70% 절약</span>
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              렛튜브의 모든 서비스는 안전한 계정을 제공하며, 구매 후 즉시 이용 가능합니다.
              부담 없는 가격으로 프리미엄 서비스를 경험하세요.
            </p>
          </div>
        </FadeInView>
        
        {/* 서비스 선택 그리드 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {products.map((product, index) => (
            <FadeInView key={product.id} delay={0.1 * index}>
              <Link 
                href={`/products/${product.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 border border-gray-100 flex flex-col h-full"
              >
                <div className={`p-6 ${product.color} relative overflow-hidden`}>
                  <div className="absolute top-0 right-0 bg-white/10 w-24 h-24 rounded-full -mr-8 -mt-8 blur-2xl opacity-70 group-hover:opacity-100 transition-opacity"></div>
                  <div className="flex justify-between items-center relative z-10">
                    <span className="text-white text-xl font-bold">{product.name}</span>
                    <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center backdrop-blur-sm">
                      <span className="text-white text-xl">+</span>
                    </div>
                  </div>
                  <div className="mt-1 text-white/80 text-sm">{product.period}</div>
                </div>
                
                <div className="p-6 flex-grow flex flex-col">
                  <div className="flex justify-between items-start mb-4">
                    <div>
                      <p className="text-primary font-bold text-2xl">
                        {product.price.toLocaleString()}원
                      </p>
                      <p className="text-gray-400 text-sm line-through">
                        {product.originalPrice.toLocaleString()}원
                      </p>
                    </div>
                    <div className="bg-emerald-50 text-emerald-600 px-2.5 py-1 rounded-lg text-xs font-bold">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% 할인
                    </div>
                  </div>
                  
                  <div className="mt-2 space-y-2 text-sm text-gray-600 flex-grow">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center gap-2">
                        <svg className="w-4 h-4 text-emerald-500 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 pt-4 border-t border-gray-100">
                    <div className="text-sm text-gray-500 flex items-center gap-1">
                      <svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                      </svg>
                      <span>안전한 계정 제공</span>
                    </div>
                  </div>
                </div>
              </Link>
            </FadeInView>
          ))}
        </div>
        
        {/* 절감액 계산기 */}
        <FadeInView delay={0.3}>
          <div className="mt-24 max-w-4xl mx-auto bg-white rounded-2xl p-8 md:p-10 shadow-xl border border-gray-100 relative overflow-hidden">
            <div className="absolute -top-24 -right-24 w-48 h-48 bg-primary/5 rounded-full blur-[80px]"></div>
            <div className="absolute -bottom-24 -left-24 w-48 h-48 bg-blue-500/5 rounded-full blur-[80px]"></div>
            
            <div className="relative z-10">
              <h3 className="text-2xl md:text-3xl font-bold mb-2 text-center">비용 절감 효과 알아보기</h3>
              <p className="text-gray-500 text-center mb-8">직접 비교해보세요. 렛튜브가 더 저렴합니다.</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-gray-50 p-6 rounded-xl">
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-gray-200 rounded-full flex items-center justify-center text-gray-600 text-sm">1</span>
                    일반 구독 시
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between pb-3 border-b border-gray-200">
                      <span className="text-gray-600">유튜브 프리미엄</span>
                      <span className="font-medium">월 14,900원</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-gray-200">
                      <span className="text-gray-600">넷플릭스</span>
                      <span className="font-medium">월 17,000원</span>
                    </div>
                    <div className="flex justify-between font-bold pt-2">
                      <span>6개월 비용</span>
                      <span>191,400원</span>
                    </div>
                  </div>
                </div>
                
                <div className="bg-primary/5 p-6 rounded-xl relative">
                  <div className="absolute top-2 right-2 bg-primary text-white text-xs font-bold px-2 py-1 rounded">추천</div>
                  <h4 className="font-bold text-lg mb-4 flex items-center gap-2">
                    <span className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-white text-sm">2</span>
                    렛튜브 이용 시
                  </h4>
                  <div className="space-y-3">
                    <div className="flex justify-between pb-3 border-b border-primary/10">
                      <span className="text-gray-600">유튜브 프리미엄</span>
                      <span className="font-medium">6개월 42,000원</span>
                    </div>
                    <div className="flex justify-between pb-3 border-b border-primary/10">
                      <span className="text-gray-600">넷플릭스</span>
                      <span className="font-medium">6개월 48,000원</span>
                    </div>
                    <div className="flex justify-between text-primary font-bold pt-2">
                      <span>총 절감액</span>
                      <span>101,400원</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                <Link 
                  href="/products" 
                  className="px-8 py-4 bg-primary text-white rounded-xl font-medium hover:bg-red-600 transition-colors shadow-lg shadow-primary/20 text-center"
                >
                  구독 시작하기
                </Link>
                <Link 
                  href="/faq" 
                  className="px-8 py-4 bg-white border border-gray-200 text-gray-700 rounded-xl font-medium hover:bg-gray-50 transition-colors text-center"
                >
                  자주 묻는 질문
                </Link>
              </div>
            </div>
          </div>
        </FadeInView>
        
        {/* 신뢰 배지 섹션 */}
        <FadeInView delay={0.4}>
          <div className="mt-20 text-center">
            <h3 className="text-xl font-bold mb-8">50,000명 이상이 선택한 렛튜브</h3>
            <div className="flex flex-wrap justify-center items-center gap-4 md:gap-12">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">안전한 계정</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">VPN 없이 안전하게</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">24/7 고객 지원</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span className="text-gray-600">100% 만족 보장</span>
              </div>
            </div>
          </div>
        </FadeInView>
      </div>
    </section>
  );
} 