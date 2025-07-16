import React from 'react';
import Image from 'next/image';

export default function InfoBoxes() {
  return (
    <section className="py-8">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-semibold text-gray-800 mb-8">รายละเอียดคุณสมบัติ และสิ่งที่ต้องเตรียม</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          {/* Box 1 - คุณสมบัติ */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            {/* Yellow checkmark badge */}
            <div className="absolute -top-4 right-4">
              <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            
            {/* Person icon */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z" />
                  <path d="M12 14.5C6.99 14.5 3 17.86 3 22H21C21 17.86 17.01 14.5 12 14.5Z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-center text-xl font-semibold mb-4">คุณสมบัติ</h3>
            <ul className="space-y-1">
              <li className="flex items-start">
                <div className="text-black-900 font-bold mr-4">•</div>
                <span className="text-gray-700">นักศึกษา อายุ 18 ปีขึ้นไป</span>
              </li>
              <li className="flex items-start">
                <div className="text-black-900 font-bold mr-4">•</div>
                <span className="text-gray-700">บุคคลธรรมดาอายุ 20-60 ปี</span>
              </li>
              <li className="flex items-start">
                <div className="text-black-900 font-bold mr-4">•</div>
                <span className="text-gray-700">มีบัตรประชาชนสัญชาติไทย</span>
              </li>
              <li className="flex items-start">
                <div className="text-black-900 font-bold mr-4">•</div>
                <span className="text-gray-700">พนักงานประจำ</span>
              </li>
              <li className="flex items-start">
                <div className="text-black-900 font-bold mr-4">•</div>
                <span className="text-gray-700">อาชีพอิสระ/เจ้าของกิจการ/ธุรกิจส่วนตัว</span>
              </li>
            </ul>
          </div>
          
          {/* Box 2 - เอกสารที่ต้องเตรียม */}
          <div className="bg-white rounded-xl shadow-lg p-6 relative">
            {/* Yellow checkmark badge */}
            <div className="absolute -top-4 right-4">
              <div className="bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            
            {/* Document icon */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center">
                <svg className="w-16 h-16" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C4.9 2 4 2.9 4 4V20C4 21.1 4.9 22 6 22H18C19.1 22 20 21.1 20 20V8L14 2Z" />
                  <path d="M14 2V8H20L14 2Z" />
                  <path d="M16 13H8V15H16V13Z" />
                  <path d="M16 17H8V19H16V17Z" />
                  <path d="M10 9H8V11H10V9Z" />
                </svg>
              </div>
            </div>
            
            <h3 className="text-center text-xl font-semibold mb-4">เอกสารที่ต้องเตรียม</h3>
            <ul className="space-y-1">
              <li className="flex items-start">
                <div className="text-black-900 font-bold mr-4 ">•</div>
                <span className="text-gray-700">บัตรประชาชน</span>
              </li>
              <li className="flex items-start">
                <div className="text-black-900 font-bold mr-4 ">•</div>
                <span className="text-gray-700">สลิปเงินเดือน หรือเอกสารแสดงรายได้</span>
              </li>
              <li className="flex items-start">
                <div className="text-black-900 font-bold mr-4 ">•</div>
                <span className="text-gray-700">ระเบียนนักศึกษา หรือบัตรนักศึกษา(สำหรับนักศึกษา)</span>
              </li>
            </ul>
          </div>
        </div>
                
        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="bg-primary text-white font-bold py-2 px-8 rounded-lg hover:bg-blue-700 transition duration-300">
            สนใจออมดาวน์ โหลดเลย
          </button>
        </div>

      </div>
    </section>
  );
}
