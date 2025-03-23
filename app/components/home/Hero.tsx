'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import LogoSlider from '../common/LogoSlider';
import FadeInView from '../common/FadeInView';

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // 로고 데이터
  const logos = [
    {
      id: 'youtube',
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60" className="w-16 h-16">
          <rect width="60" height="60" fill="#121212" rx="12"></rect>
          <path fill="#FF0000" d="M44.3 21.5c-.4-1.6-1.6-2.8-3.2-3.2-2.8-.8-14.1-.8-14.1-.8s-11.3 0-14.1.8c-1.6.4-2.8 1.6-3.2 3.2-.8 2.8-.8 8.5-.8 8.5s0 5.7.8 8.5c.4 1.6 1.6 2.8 3.2 3.2 2.8.8 14.1.8 14.1.8s11.3 0 14.1-.8c1.6-.4 2.8-1.6 3.2-3.2.8-2.8.8-8.5.8-8.5s0-5.7-.8-8.5Z"></path>
          <path fill="#fff" d="m25 33.5 9-4.5-9-4.5v9Z"></path>
        </svg>
      )
    },
    {
      id: 'netflix',
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60" className="w-16 h-16">
          <rect width="60" height="60" fill="#121212" rx="12"></rect>
          <path fill="#E50914" d="M15 15h3v30l-3-1V15Zm27 0v29l3 1V15h-3Zm-19.5 3.53v18.01l7.5 2.58V21.05l-7.5-2.53v.01Zm12 4.01v16.04l-7.5-2.58V20.01l7.5 2.53Z"></path>
        </svg>
      )
    },
    {
      id: 'disney',
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60" className="w-16 h-16">
          <rect width="60" height="60" fill="#121212" rx="12"></rect>
          <path fill="#fff" d="M41.5 29.5c0 7.2-5.8 13-13 13s-13-5.8-13-13 5.8-13 13-13 13 5.8 13 13Z"></path>
          <path fill="#0063E5" d="M40 20H20c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V22c0-1.1-.9-2-2-2Zm-3.6 11.8-7.7 1.2h-.2c-.4 0-.8-.2-1-.6L25 27.9c-.1-.3 0-.6.2-.9.2-.3.5-.4.8-.4h.1l2.6.3c.5 0 1 .4 1.1.9l.5 1.7 2.6-6.9c.2-.5.6-.8 1.1-.8h1.5c.4 0 .7.2 1 .5.2.3.3.7.2 1l-2.8 7.3 2.6-.4c.5-.1.9.1 1.2.5.2.4.2.9-.3 1.1Z"></path>
        </svg>
      )
    },
    {
      id: 'tving',
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60" className="w-16 h-16">
          <rect width="60" height="60" fill="#121212" rx="12"></rect>
          <path fill="#FF0048" d="M15 20.5h30v4h-13v15h-4v-15H15v-4Z"></path>
        </svg>
      )
    },
    {
      id: 'wavve',
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60" className="w-16 h-16">
          <rect width="60" height="60" fill="#121212" rx="12"></rect>
          <path fill="#3A3AFF" d="M19 30c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Zm12 0c0-2.8 2.2-5 5-5s5 2.2 5 5-2.2 5-5 5-5-2.2-5-5Z"></path>
        </svg>
      )
    },
    {
      id: 'watcha',
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60" className="w-16 h-16">
          <rect width="60" height="60" fill="#121212" rx="12"></rect>
          <path fill="#FF0045" d="M30 40c-5.5 0-10-4.5-10-10s4.5-10 10-10 10 4.5 10 10-4.5 10-10 10Zm0-4c3.3 0 6-2.7 6-6s-2.7-6-6-6-6 2.7-6 6 2.7 6 6 6Z"></path>
        </svg>
      )
    },
    {
      id: 'appletv',
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60" className="w-16 h-16">
          <rect width="60" height="60" fill="#121212" rx="12"></rect>
          <path fill="#A1A1A1" d="M30.5 18.5c1.6-2 4.1-2.3 4.1-2.3s.4 2.4-1.2 4.6c-1.7 2.4-3.7 2-3.7 2s-.5-2.1.8-4.3Zm-.7 6.1c.8 0 2.3-.9 4.2-.9 3.3 0 4.7 2.4 4.7 2.4S36 28 36 31.8c0 4.3 3.8 5.8 3.8 5.8s-2.7 7.4-6.3 7.4c-1.6 0-2.9-1.1-4.7-1.1-1.8 0-3.5 1.1-4.7 1.1-3.3 0-7.4-7.1-7.4-12.8 0-5.6 3.5-8.6 6.8-8.6 2.1 0 3.8 1 4.6 1Z"></path>
        </svg>
      )
    },
    {
      id: 'primevideo',
      content: (
        <svg xmlns="http://www.w3.org/2000/svg" width="60" height="60" fill="none" viewBox="0 0 60 60" className="w-16 h-16">
          <rect width="60" height="60" fill="#121212" rx="12"></rect>
          <path fill="#00A8E1" d="M32 30.8 30 34l-2-3.2v5.4h-2V27h2l2 3.4 2-3.4h2v7.2h-2v-3.4ZM41 34h-6v-2h6v2Zm-3-4h-3v-2h3v2Zm3 5h-6v-1h6v1Z"></path>
          <path fill="#fff" d="M15 28h4c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2h-2v3h-2v-9Zm4 4v-2h-2v2h2Z"></path>
        </svg>
      )
    }
  ];

  return (
    <section className="relative bg-gradient-to-b from-[#0A0A0A] via-[#141414] to-[#1A1A1A] text-white overflow-hidden">
      {/* 배경 효과 */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2 }}
          className="absolute -top-40 -right-40 w-96 h-96 bg-primary/5 rounded-full blur-[100px]"
        ></motion.div>
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute top-60 -left-20 w-72 h-72 bg-blue-500/5 rounded-full blur-[80px]"
        ></motion.div>
      </div>
      
      <div className="container mx-auto px-4 pt-28 pb-24 relative z-10">
        {/* 상단 그라데이션 효과 */}
        <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-primary/10 to-transparent opacity-40"></div>
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-12">
          {/* 텍스트 콘텐츠 */}
          <div className="md:w-1/2 max-w-xl">
            <FadeInView delay={0.1}>
              <div className="mb-5 inline-flex items-center gap-2 bg-primary/10 py-2 px-4 rounded-full">
                <span className="animate-pulse w-2 h-2 bg-primary rounded-full"></span>
                <span className="text-primary font-medium text-sm font-pretendard">최대 70% 할인된 가격</span>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
                저렴하게 즐기는 <br />
                <span className="text-primary mt-3 inline-block">유튜브 프리미엄</span>
              </h1>
            </FadeInView>
            
            <FadeInView delay={0.3}>
              <p className="text-lg text-gray-300 mb-8 font-light leading-relaxed">
                안전하고 합리적인 가격으로 유튜브 프리미엄을 이용하세요.<br className="hidden md:block" />
                월 4,000원 대에 광고 없는 동영상 시청과 백그라운드 재생까지!
              </p>
            </FadeInView>
            
            <FadeInView delay={0.4}>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/products" 
                  className="bg-primary hover:bg-red-600 text-white font-medium py-4 px-8 rounded-xl shadow-lg shadow-primary/20 transition-all duration-300 text-center"
                >
                  구독 시작하기
                </Link>
                <Link 
                  href="/services" 
                  className="bg-white/10 backdrop-blur-sm hover:bg-white/20 border border-white/20 font-medium py-4 px-8 rounded-xl transition-all duration-300 text-center"
                >
                  서비스 알아보기
                </Link>
              </div>
            </FadeInView>
            
            <FadeInView delay={0.5}>
              <div className="mt-8 flex items-center gap-3">
                <div className="flex -space-x-2 wave-animation">
                  <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-gray-900 flex items-center justify-center text-xs text-white profile-icon">유</div>
                  <div className="w-8 h-8 rounded-full bg-green-500 border-2 border-gray-900 flex items-center justify-center text-xs text-white profile-icon">민</div>
                  <div className="w-8 h-8 rounded-full bg-yellow-500 border-2 border-gray-900 flex items-center justify-center text-xs text-white profile-icon">정</div>
                  <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-gray-900 flex items-center justify-center text-xs text-white profile-icon">+</div>
                </div>
                <span className="text-sm text-white/70">이미 <span className="text-primary font-medium">5,000명</span> 이상이 이용 중</span>
              </div>
            </FadeInView>
          </div>
          
          {/* 휴대폰 이미지 */}
          <motion.div 
            className="md:w-1/2 flex justify-center md:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", duration: 0.8, delay: 0.4 }}
          >
            <div className="relative w-72 h-[580px] rounded-[40px] overflow-hidden border-[10px] border-gray-800 bg-black shadow-2xl shadow-black/50 transform hover:rotate-1 transition-all duration-300">
              {/* 상단 스피커 */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-black rounded-b-xl z-20"></div>
              
              {/* 스크린 콘텐츠 */}
              <div className="relative w-full h-full overflow-hidden bg-black">
                <Image 
                  src="/images/phone-mockup.png" 
                  alt="유튜브 프리미엄 앱" 
                  fill
                  priority
                  className="object-cover z-0"
                />
                
                {/* 빛 반사 효과 */}
                <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent z-10 pointer-events-none"></div>
              </div>
            </div>
            
            {/* 장식 요소 */}
            <motion.div 
              className="absolute right-20 top-1/4 w-20 h-20 bg-primary/20 rounded-full blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 0.7 }}
            >
              <motion.div 
                className="w-full h-full"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 3 }}
              />
            </motion.div>
            <motion.div 
              className="absolute right-1/3 bottom-1/3 w-24 h-24 bg-blue-500/20 rounded-full blur-xl"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5, delay: 1 }}
            >
              <motion.div 
                className="w-full h-full"
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ repeat: Infinity, duration: 4, delay: 1 }}
              />
            </motion.div>
          </motion.div>
        </div>
        
        {/* 로고 슬라이더 (컴포넌트 사용) */}
        <LogoSlider 
          logos={logos}
          title="다양한 OTT 서비스를 렛튜브에서 만나보세요" 
          speed={0.3}
          className="mt-12 md:mt-20"
        />
      </div>
      
      <style jsx>{`
        .wave-animation {
          position: relative;
        }
        
        .profile-icon {
          transition: transform 0.3s ease;
          position: relative;
          z-index: 1;
          box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
        }
        
        .profile-icon:nth-child(1) {
          animation: wave-pause 7s ease-in-out infinite;
          animation-delay: 0s;
          z-index: 4;
        }
        
        .profile-icon:nth-child(2) {
          animation: wave-pause 7s ease-in-out infinite;
          animation-delay: 0.25s;
          z-index: 3;
        }
        
        .profile-icon:nth-child(3) {
          animation: wave-pause 7s ease-in-out infinite;
          animation-delay: 0.5s;
          z-index: 2;
        }
        
        .profile-icon:nth-child(4) {
          animation: wave-pause 7s ease-in-out infinite;
          animation-delay: 0.75s;
          z-index: 1;
        }
        
        @keyframes wave-pause {
          0%, 20%, 100% {
            transform: translateY(0px);
          }
          10% {
            transform: translateY(-12px);
          }
          20.01%, 71.42% {
            transform: translateY(0px);
          }
          85.71% {
            transform: translateY(-12px);
          }
        }
      `}</style>
    </section>
  );
} 