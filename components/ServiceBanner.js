"use client";

import React from 'react';
import Image from 'next/image';

export default function ServiceBanner() {
  const services = [
    {
      id: 1,
      title: "บัตรประชาชนใบเดียว"
    },
    {
      id: 2,
      title: "กลุ่มผู้ฝากเงิน"
    },
    {
      id: 3,
      title: "บัตรเครดิตทุกธนาคาร"
    },
    {
      id: 4,
      title: "ระบบส่งข้อความแจ้งเตือน"
    },
  ];

  return (
    <div className="bg-[#1976D2] py-6 text-white">
      <div className="container mx-auto px-4 max-w-5xl">
        <div className="flex flex-col md:flex-row justify-center items-center md:items-center md:gap-12 lg:gap-20">
          {/* Left side text with yellow vertical line */}
          <div className="mb-8 md:mb-0 relative pl-4 flex flex-col justify-center">
            <div className="absolute left-0 top-0 bottom-0 w-1 bg-yellow-400"></div>
            <div className="text-xl font-medium">
              <div className="mb-1">ง่าย สะดวก ปลอดภัย</div>
              <div>มีโปร</div>
            </div>
            <div className="mt-2 flex items-baseline">
              <span>เลือก... </span>
              <span className="font-bold ml-1">ฟินฟิน</span>
            </div>
          </div>

          {/* Right side icons */}
          <div className="flex justify-center space-x-8 sm:space-x-12">
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#1976D2] border-2 border-yellow-400 rounded-full p-1 h-11 w-11 flex items-center justify-center mb-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="4" y="4" width="16" height="16" rx="2" ry="2"></rect>
                  <line x1="12" y1="6" x2="12" y2="18"></line>
                  <line x1="8" y1="12" x2="16" y2="12"></line>
                </svg>
              </div>
              <span className="text-[10px] text-center">บัตรประชาชนใบเดียว</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#1976D2] border-2 border-yellow-400 rounded-full p-1 h-11 w-11 flex items-center justify-center mb-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <span className="text-[10px] text-center">ทุกอาชีพผ่อนได้</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#1976D2] border-2 border-yellow-400 rounded-full p-1 h-11 w-11 flex items-center justify-center mb-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="5" width="20" height="14" rx="2"></rect>
                  <line x1="2" y1="10" x2="22" y2="10"></line>
                </svg>
              </div>
              <span className="text-[10px] text-center">มีสาขาทั่วประเทศ</span>
            </div>
            
            <div className="flex flex-col items-center text-center">
              <div className="bg-[#1976D2] border-2 border-yellow-400 rounded-full p-1 h-11 w-11 flex items-center justify-center mb-1.5">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect>
                  <circle cx="12" cy="18" r="1"></circle>
                </svg>
              </div>
              <span className="text-[10px] text-center">รองรับด้วยแอป</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
