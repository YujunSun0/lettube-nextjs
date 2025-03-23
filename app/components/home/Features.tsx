'use client';

import Image from 'next/image';

export default function Features() {
  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-16">렛튜브만의 특별한 서비스</h2>
        
        {/* 서비스 특징 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mb-20">
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">안전한 계정</h3>
            <p className="text-gray-600">렛튜브에서 제공하는 모든 계정은 안전하게 관리되며, 개인정보 유출 없이 이용할 수 있습니다.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">최대 70% 할인</h3>
            <p className="text-gray-600">일반 구독 대비 최대 70%까지 할인된 가격으로 다양한 OTT 서비스를 이용할 수 있습니다.</p>
          </div>
          
          <div className="bg-white p-8 rounded-xl shadow-sm text-center">
            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-3">쉽고 빠른 결제</h3>
            <p className="text-gray-600">간편한 결제 시스템으로 구매 즉시 계정 정보를 받아 바로 서비스를 이용할 수 있습니다.</p>
          </div>
        </div>
        
        {/* 이용 방법 */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-center mb-10">이용 방법</h3>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold mb-6">1</div>
              <h4 className="text-lg font-medium mb-2">상품 선택</h4>
              <p className="text-center text-gray-600">원하는 OTT 서비스 상품을 선택합니다.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold mb-6">2</div>
              <h4 className="text-lg font-medium mb-2">결제 진행</h4>
              <p className="text-center text-gray-600">안전한 결제 시스템으로 결제를 진행합니다.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold mb-6">3</div>
              <h4 className="text-lg font-medium mb-2">계정 발급</h4>
              <p className="text-center text-gray-600">결제 완료 후 바로 계정 정보를 받습니다.</p>
            </div>
            
            <div className="flex flex-col items-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center text-2xl font-bold mb-6">4</div>
              <h4 className="text-lg font-medium mb-2">서비스 이용</h4>
              <p className="text-center text-gray-600">발급받은 계정으로 즉시 서비스 이용이 가능합니다.</p>
            </div>
          </div>
        </div>
        
        {/* FAQ 섹션 */}
        <div className="max-w-3xl mx-auto mt-20">
          <h3 className="text-2xl font-bold text-center mb-10">자주 묻는 질문</h3>
          <div className="space-y-5">
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg mb-2">Q. 렛튜브에서 제공하는 계정은 안전한가요?</h4>
              <p className="text-gray-600">
                네, 렛튜브에서 제공하는 모든 계정은 100% 정품이며, 고객님의 개인정보가 노출되지 않도록 안전하게 관리됩니다.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg mb-2">Q. 구매 후 얼마나 빨리 서비스를 이용할 수 있나요?</h4>
              <p className="text-gray-600">
                결제 완료 후 즉시 계정 정보를 제공해 드리며, 바로 서비스 이용이 가능합니다.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-xl shadow-sm">
              <h4 className="font-bold text-lg mb-2">Q. 구매한 상품의 이용 기간은 어떻게 되나요?</h4>
              <p className="text-gray-600">
                상품마다 이용 기간이 다르며, 각 상품 설명에 명시된 기간(일반적으로 6개월) 동안 이용 가능합니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 