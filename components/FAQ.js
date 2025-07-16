"use client";

import React, { useState } from 'react';

export default function FAQ() {
  const [openItem, setOpenItem] = useState(1); // Default open is the second item (index 1)

  const faqItems = [
    {
      id: 0,
      question: 'ใช้เอกสารอะไรบ้าง',
      answer: 'บัตรประชาชนใบเดียว'
    },
    {
      id: 1,
      question: 'อายุเท่าไหร่จึงผ่อนได้',
      answer: 'อายุ 20 ปีขึ้นไป'
    },
    {
      id: 2,
      question: 'เครื่องติด icloud ไหม',
      answer: 'ไม่ติดicloudทางร้าน สามารถใช้apple idของลูกค้าได้เลย'
    },
    {
      id: 3,
      question: 'ขั้นตอนการเทิร์น',
      answer: (
        <div className="space-y-1">
          <div>1. แอดไลน์ติดต่อเจ้าหน้าที่</div>
          <div>2. ถ่ายรูปแจ้งรายละเอียดตัวเครื่องที่ต้องการเทิร์น</div>
          <div>3. รอเจ้าหน้าที่ประเมินราคาเบื้องต้นให้</div>
          <div>4. นำเครื่องเข้ามาเทิร์นที่หน้าร้านเพื่อใช้เป็นส่วนลดเงินดาวน์ได้เลย</div>
        </div>
      )
    },
    {
      id: 4,
      question: 'ขั้นตอนการรีไฟแนนซ์',
      answer: (
        <div className="space-y-1">
          <div>1. แอดไลน์ติดต่อเจ้าหน้าที่</div>
          <div>2. แจ้งรายละเอียดตัวเครื่องเพื่อให้เจ้าหน้าที่ประเมินราคาเบื้องต้น</div>
          <div>3. เข้ามาทำสัญญาหน้าร้านได้เลย</div>
        </div>
      )
    },
  ];

  const toggleItem = (id) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="bg-[#e8f2f8] py-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-6">
          <h2 className="text-2xl font-medium text-center text-black">คำถามที่พบบ่อย</h2>
        </div>
        
        <div className="max-w-3xl mx-auto">
          {faqItems.map((item) => (
            <div key={item.id} className="mb-2 overflow-hidden rounded-md border border-[#d1dce6]">
              <div 
                className="flex items-center justify-between bg-white px-4 py-3 cursor-pointer"
                onClick={() => toggleItem(item.id)}
              >
                <div className="flex items-center">
                  <div className="flex-shrink-0 bg-black text-white rounded-full w-6 h-6 flex items-center justify-center mr-3">
                    <span className="text-sm">?</span>
                  </div>
                  <h3 className="text-sm text-black">{item.question}</h3>
                </div>
                {openItem === item.id ? 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2A3070]"><path d="m18 15-6-6-6 6"/></svg> : 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-[#2A3070]"><path d="m6 9 6 6 6-6"/></svg>}
              </div>
              
              {openItem === item.id && (
                <div className={`bg-white px-4 py-3 border-t ${[0, 1, 2, 3, 4].includes(item.id) ? 'text-black' : 'text-[#2A3070]'}`}>
                  <div className="ml-9">{item.answer}</div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-6">
          <button className="bg-white border border-[#2A3070] text-[#2A3070] px-8 py-2 rounded hover:bg-[#2A3070] hover:text-white transition-colors">
            ดูเพิ่มเติม
          </button>
        </div>
      </div>
    </div>
  );
}
