import React from 'react';
import Image from 'next/image';

export default function ServiceCards() {
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* สินเชื่อส่วนบุคคล Card */}
          <div className="bg-yellow-400 rounded-xl p-6 text-black shadow-lg">
            <h3 className="font-bold text-xl mb-3">ผ่อนไอโฟน ไอแพด</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <div className="bg-black rounded-full mr-2 h-5 w-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>ผ่อนง่าย ไม่ต้องมีบัตรเครดิตใช้แค่บัตรประชาชน</span>
              </li>
              <li className="flex items-center">
                <div className="bg-black rounded-full mr-2 h-5 w-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>อนุมัติไวภายใน 1 วัน</span>
              </li>
              <li className="flex items-center">
                <div className="bg-black rounded-full mr-2 h-5 w-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>มั่นใจได้ เครื่องแท้ มีถึง 13 สาขาทั่วไทย</span>
              </li>
            </ul>
            <div className="relative pb-8 mt-2">
              <div className="flex justify-center mb-6">
                <img src="/images/alliphone.png" alt="iPhones" className="w-[300px] drop-shadow-lg" style={{ marginBottom: '-90px' }} />
              </div>
              <div className="flex justify-center relative z-10">
                <button className="bg-white text-gray-800 font-medium py-2 px-6 rounded-full shadow hover:shadow-md transition-shadow">
                  รายละเอียด
                </button>
              </div>
            </div>
          </div>

          {/* สินเชื่อ SME Card */}
          <div className="bg-green-500 rounded-xl p-6 text-white shadow-lg">
            <h3 className="font-bold text-xl mb-3">ออมดาวน์</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <div className="bg-white rounded-full mr-2 h-5 w-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>ไม่ต้องใช้เงินก้อน</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white rounded-full mr-2 h-5 w-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>ออมงวดละเท่าไหร่ก็ได้</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white rounded-full mr-2 h-5 w-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>ลดภาระต่อเดือนได้ มีเงินใช้สบายๆ</span>
              </li>
            </ul>
            <div className="relative min-h-[200px] mt-6">
              <div className="absolute right-6 bottom-0">
                <img src="/images/piggy.png" alt="Piggy Bank" className="w-[300px] drop-shadow-lg" style={{ marginBottom: '0px' }} />
              </div>
              <div className="absolute bottom-6 left-0 right-0">
                <div className="flex justify-center">
                  <button className="bg-white text-gray-800 font-medium py-2 px-10 rounded-full shadow hover:shadow-md transition-shadow">
                    รายละเอียด
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* สินเชื่อบ้าน Card */}
          <div className="bg-blue-700 rounded-lg p-6 text-white shadow-lg">
          <h3 className="font-bold text-xl mb-3">ไอโฟนแลกเงิน</h3>
            <ul className="space-y-2 mb-4">
              <li className="flex items-center">
                <div className="bg-white rounded-full mr-2 h-5 w-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>ได้เงินไว วงเงินสูงสุด ภายใน 1 วัน</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white rounded-full mr-2 h-5 w-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>ได้เครื่องกลับไปใช้ไม่ต้องมีคนค้ำ</span>
              </li>
              <li className="flex items-center">
                <div className="bg-white rounded-full mr-2 h-5 w-5 flex items-center justify-center">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-3 w-3 text-green-500" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </div>
                <span>ไม่ใช่จำนำ</span>
              </li>
            </ul>
            <div className="relative min-h-[200px] mt-6">
              <div className="absolute right-6 bottom-0">
                <img src="/images/money1.png" alt="Piggy Bank" className="w-[300px] drop-shadow-lg" style={{ marginBottom: '0px' }} />
              </div>
              <div className="absolute bottom-6 left-0 right-0">
                <div className="flex justify-center">
                  <button className="bg-white text-gray-800 font-medium py-2 px-10 rounded-full shadow hover:shadow-md transition-shadow">
                    รายละเอียด
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
