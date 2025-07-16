import React from 'react';
import Image from 'next/image';

export default function HeroBanner() {
  return (
    <div className="form-container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-md -mt-20 relative z-10">
      <h2 className="text-center font-medium text-xl mb-6 text-primary">อยากได้ไอโฟน แต่ไม่มีบัตรเครดิต ทำไงดี?</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 md:divide-x md:divide-gray-200">
        {/* Left column */}
        <div className="pr-8 md:pr-6">
          <p className="text-gray-700 mb-4">
            ที่ฟินฟิน ผ่อนไอโฟน ใช้บัตรประชาชนใบเดียว ดาวน์ถูก ผ่อนสบาย
            เอาใจคนไม่มีบัตร เปิดโอกาสให้ทุกคนเป็นเจ้าของไอโฟนง่าย อาชีพ
            ไหนๆ ก็ผ่อนได้ ด่วน! โทรศัพท์ผ่อนได้ ไม่ต้องมีบัญชี เครื่องแท้มือ 1 รับ
            ประกันศูนย์ไทย
          </p>
          
          <p className="text-gray-700 mb-6">
            แถมสะดวก ปลอดภัย จ่ายเงินผ่านแอป ยูฟินครีดิต มีหน้าร้านชัดเจน
            พร้อมให้บริการทุกสาขาทั่วประเทศ อยู่ใกล้ที่ไหน ไปที่นั่น อนุมัติไว เร็ว
            รุ่นไหนก็ มี บอกมาเลยกล้องกี่สายก็สวยเลิศ !
          </p>
          
          <h3 className="text-xl font-bold text-gray-800 mb-4">ยูฟินครีดิต เปิดให้ผ่อนไอโฟน 16 แล้ววันนี้ !!</h3>
        </div>
        
        {/* Right column */}
        <div className="pl-0 md:pl-8 mt-6 md:mt-0">
          <h3 className="font-medium text-xl mb-4 text-gray-800">ผ่อนกับยูฟินครีดิต</h3>
          
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">ใช้บัตรประชาชนใบเดียว</span>
            </div>
            
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">ดาวน์ถูก ผ่อนสบาย</span>
            </div>
            
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">เครื่องแท้มือ 1 รับประกันศูนย์ไทย</span>
            </div>
            
            <div className="flex items-center">
              <span className="inline-block w-5 h-5 bg-yellow-400 rounded-full mr-3 flex items-center justify-center">
                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </span>
              <span className="text-gray-700">มีหน้าร้านชัดเจน</span>
            </div>
          </div>
        </div>
      </div>
      
      {/* Button */}
    </div>
  );
}
