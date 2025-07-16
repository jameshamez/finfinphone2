import React from 'react';
import Link from 'next/link';

export default function ServiceBoxes() {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
        {/* Box 1 - Yellow */}
        <div className="bg-yellow-400 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="font-bold text-lg mb-3">ช้อปทั่วไทย โอนง่าย</h3>
            <ul className="space-y-2 text-sm mb-4">
              <li className="flex items-center">
                <div className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center mr-2">•</div>
                คุณสมบัติครบถ้วน
              </li>
              <li className="flex items-center">
                <div className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center mr-2">•</div>
                ผู้อนุมัติผ่าน Fin
              </li>
              <li className="flex items-center">
                <div className="bg-black text-white rounded-full w-5 h-5 flex items-center justify-center mr-2">•</div>
                ไม่มีผู้ค้ำ เลือก Fin ให้คุณ
              </li>
            </ul>
            <div className="mt-4 text-center">
              <input type="text" placeholder="กรอกเบอร์โทรศัพท์" className="w-full px-3 py-2 border rounded mb-2 text-center text-sm" />
              <button className="bg-white text-blue-600 px-4 py-1 rounded text-sm w-full">ส่ง</button>
            </div>
          </div>
        </div>
        
        {/* Box 2 - Green */}
        <div className="bg-green-500 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="font-bold text-lg mb-3 text-white">ออมเงิน</h3>
            <ul className="space-y-2 text-sm mb-4 text-white">
              <li className="flex items-center">
                <div className="bg-white text-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">•</div>
                รวมเงินออมได้ที่เดียว
              </li>
              <li className="flex items-center">
                <div className="bg-white text-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">•</div>
                ออมสะดวกที่สาขา
              </li>
              <li className="flex items-center">
                <div className="bg-white text-green-500 rounded-full w-5 h-5 flex items-center justify-center mr-2">•</div>
                ออมง่ายผ่านแอป FinFinApp
              </li>
            </ul>
            <div className="mt-4 text-center">
              <input type="text" placeholder="กรอกเบอร์โทรศัพท์" className="w-full px-3 py-2 border rounded mb-2 text-center text-sm" />
              <button className="bg-white text-green-500 px-4 py-1 rounded text-sm w-full">ส่ง</button>
            </div>
          </div>
        </div>
        
        {/* Box 3 - Blue */}
        <div className="bg-blue-600 rounded-lg shadow-lg overflow-hidden">
          <div className="p-6">
            <h3 className="font-bold text-lg mb-3 text-white">ไอโฟนแลกเงิน</h3>
            <ul className="space-y-2 text-sm mb-4 text-white">
              <li className="flex items-center">
                <div className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2">•</div>
                แลกเงินได้ทันที ไม่ต้องรอ
              </li>
              <li className="flex items-center">
                <div className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2">•</div>
                เงินสดรับกลับบ้านไปเลย
              </li>
              <li className="flex items-center">
                <div className="bg-white text-blue-600 rounded-full w-5 h-5 flex items-center justify-center mr-2">•</div>
                ไม่มีค่าธรรมเนียม ไม่มีดอกเบี้ย
              </li>
            </ul>
            <div className="mt-4 text-center">
              <input type="text" placeholder="กรอกเบอร์โทรศัพท์" className="w-full px-3 py-2 border rounded mb-2 text-center text-sm" />
              <button className="bg-white text-blue-600 px-4 py-1 rounded text-sm w-full">ส่ง</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
