import React from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="form-container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md -mt-20 relative z-10">
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200">
        {/* Left column */}
        <div className="pr-8 md:pr-6">
          <h3 className="text-xl font-bold text-gray-800 mb-4">ช็อต! อยากได้เงินก้อน, เงินตั้งหลัก, เงินกู้เติม</h3>
          <p className="text-gray-700 mb-4">
            ไม่อยากเป็นหนี้นอกระบบ ไม่รู้จะไปหาใคร <span className="font-bold">ฟินฟินช่วยได้</span> เพียงแค่คุณ
            เป็นเจ้าของไอโฟน นำมาแลกเงินกับเรา คุณจะได้รับเงินก้อนและได้เครื่อง
            กลับไปใช้ด้วย ได้เงินไว อนุมัติภายใน 1 วัน ไม่ใช่จำนำ มีเงินสำรองจ่าย
            หมดทวงเรื่องไม่มีข้อติดใจ <span className="text-sm">(ฟินฟินรับแลกเงินตั้งแต่รุ่นไอโฟน 11 ขึ้นไป
            )</span>
          </p>
          
          <p className="text-gray-700 mb-6">
            <span className="font-bold">ไอโฟนแลกเงิน</span> คือ การนำไอโฟนของลูกค้ามาให้ทางฟินฟินประเมิน
            ราคา ลูกค้าจะได้รับเงินก้อนพร้อมไอโฟนกลับไปใช้งานปกติ ตัวเครื่องจะ
            ติด iCloud ของทางร้านจวนกว่าลูกค้าจะผ่อนชำระครบ
          </p>
        </div>
        
        {/* Right column */}
        <div className="pl-0 md:pl-8 mt-6 md:mt-0">
          <h3 className="font-medium text-xl mb-4 text-gray-800">ไอโฟนแลกเงินกับฟินฟิน</h3>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">วงเงินสูง อนุมัติไว</span>
            </div>
            
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">ได้เครื่องกลับไปใช้ ไม่ใช่จำนำ</span>
            </div>
            
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">ไม่ต้องยืมหน้า</span>
            </div>
            
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">ผ่อนสบาย ผ่านแอปฯ</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
