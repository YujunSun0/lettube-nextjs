"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { useEffect } from "react";

interface UnderConstructionProps {
  title: string;
  emoji?: string;
  description?: string;
  additionalInfo?: string;
  rotate?: number;
}

export default function UnderConstruction({
  title,
  emoji,
  description = "현재 이 페이지는 제작 중입니다.",
  additionalInfo = "더 나은 서비스를 위해 페이지를 준비하고 있습니다.",
  rotate = 0,
}: UnderConstructionProps) {
  // 페이지 로드시 스크롤 맨 위로 이동
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[80vh] pt-16 pb-8 px-4">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center max-w-md"
      >
        {emoji && (
          <motion.div
            initial={{ rotate: rotate, scale: 0.9 }}
            animate={{ rotate: 0, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="mb-8"
          >
            <span className="inline-block text-5xl">{emoji}</span>
          </motion.div>
        )}

        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-primary">
          {title}
        </h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <p className="text-xl md:text-2xl text-gray-700 mb-6">
            {description}
            <br />
            빠른 시일 내에 선보이겠습니다!
          </p>

          <div className="w-20 h-1 bg-primary mx-auto my-8"></div>

          <p className="text-gray-500 mb-8">
            {additionalInfo}
            <br />
            문의사항은 고객센터로 연락해주세요.
          </p>

          <Link href="/" className="btn btn-primary inline-block">
            홈으로 돌아가기
          </Link>
        </motion.div>
      </motion.div>
    </div>
  );
}
