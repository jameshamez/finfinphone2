import React from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="form-container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md -mt-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200">
        {/* Left column */}
        <div className="pr-8 md:pr-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">ผ่อนไม่ใช้บ การเลือกคนดาวน์ไม่ไหว ไม่มีเงินก้อน</h3>
          
          <p className="text-gray-700 mb-4">
            ที่สามารถเป็นเจ้าของไอโฟนได้ด้วยการออมดาวน์กับฟินฟินดี ออมครั้งละเท่าไหร่ก็ได้ <span className="font-bold">ขั้นต่ำล่ะ 100 บาท</span> สบายๆ โอนเท่าไหร่ก็ยอดออมเท่านั้น สะสมก่อนโดนสอนให้ก็ได้ ค่อยเป็นค่อยไป ผ่อนไม่ใช้บ มีระบบรองรับ ปลอดภัยออมผ่านแอปฯ เหมาะกับคนเก็บเงินไม่อยู่ มีงบนิดหน่อยก็เริ่มได้ !
          </p>
          
          <p className="text-gray-700 mb-6">
            <span className="font-bold">ออมดาวน์</span> คือ การให้ลูกค้าออมเงินจะสมทำงวดเครื่องกับฟินฟินดี จนถึงยอดดาวน์ที่กำหนด ถึงจะได้รับเครื่อง หรือที่หลายคนเรียกว่า <span className="font-bold">ผ่อนไม่ใช้บ</span> แต่ที่ฟินฟินดียอดออมชัดเจน ไม่มีขอยกเครดิต% ออมถึงก็มาแกะกล่องที่สาขาและผ่อนต่อสบาย ๆ ได้เลย
          </p>
        </div>
        
        {/* Right column */}
        <div className="pl-0 md:pl-8 mt-6 md:mt-0">
          <h3 className="font-medium text-xl mb-4 text-gray-800">ออมดาวน์กับฟินฟินดี</h3>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">ไม่ต้องใช้เงินก้อน</span>
            </div>
            
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">ออมจ่ายขั้นต่ำล่ะ 100.-</span>
            </div>
            
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">ปลอดภัย ออมผ่านแอปฯ</span>
            </div>
            
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">ออมถึงยอดที่กำหนด รับเครื่องใช้เลย</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Button */}
    </div>
  );
}
