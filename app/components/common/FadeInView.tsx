'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface FadeInViewProps {
  children: ReactNode;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right';
  className?: string;
}

export default function FadeInView({ 
  children, 
  delay = 0, 
  direction = 'up', 
  className = '' 
}: FadeInViewProps) {
  
  // 방향에 따른 시작 위치 설정
  const getInitialPosition = () => {
    switch (direction) {
      case 'up': return { y: 50, opacity: 0 };
      case 'down': return { y: -50, opacity: 0 };
      case 'left': return { x: 50, opacity: 0 };
      case 'right': return { x: -50, opacity: 0 };
      default: return { y: 50, opacity: 0 };
    }
  };
  
  // 최종 위치
  const getFinalPosition = () => {
    switch (direction) {
      case 'up': 
      case 'down': 
        return { y: 0, opacity: 1 };
      case 'left':
      case 'right':
        return { x: 0, opacity: 1 };
      default: return { y: 0, opacity: 1 };
    }
  };

  return (
    <motion.div
      className={className}
      initial={getInitialPosition()}
      whileInView={getFinalPosition()}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.7, delay }}
    >
      {children}
    </motion.div>
  );
} 