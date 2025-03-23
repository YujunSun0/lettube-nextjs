'use client';

import { useEffect, useRef, ReactNode } from 'react';
import { motion } from 'framer-motion';

interface Logo {
  id: string;
  content: ReactNode;
}

interface LogoSliderProps {
  logos: Logo[];
  title?: string;
  speed?: number;
  className?: string;
}

export default function LogoSlider({ logos, title, speed = 0.5, className = '' }: LogoSliderProps) {
  const logoSliderRef = useRef<HTMLDivElement>(null);

  // 자동 슬라이드 효과
  useEffect(() => {
    const slider = logoSliderRef.current;
    if (!slider) return;

    let position = 0;
    const totalWidth = slider.scrollWidth;

    // 무한 슬라이드를 위해 로고들을 복제
    const cloneLogos = () => {
      const logoItems = slider.querySelectorAll('.logo-item');
      logoItems.forEach(logo => {
        const clone = logo.cloneNode(true);
        slider.appendChild(clone);
      });
    };

    cloneLogos();

    const animate = () => {
      position -= speed;
      // 모든 로고가 화면에서 벗어나면 위치 리셋
      if (position < -totalWidth / 2) {
        position = 0;
      }
      slider.style.transform = `translateX(${position}px)`;
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animation);
    };
  }, [speed]);

  return (
    <motion.div 
      className={`overflow-hidden ${className}`}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
    >
      {title && (
        <p className="text-center text-gray-400 mb-8 text-sm uppercase tracking-widest font-medium">
          {title}
        </p>
      )}
      <div className="relative overflow-hidden mx-auto max-w-6xl">
        <div ref={logoSliderRef} className="flex gap-12 items-center logo-slider">
          {logos.map(logo => (
            <div key={logo.id} className="logo-item flex-shrink-0">
              {logo.content}
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        .logo-slider {
          display: flex;
          align-items: center;
          gap: 3rem;
          will-change: transform;
        }
      `}</style>
    </motion.div>
  );
} 