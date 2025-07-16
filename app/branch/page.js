"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceBoxes from './components/ServiceBoxes';
import ServiceFeatures from './components/ServiceFeatures';
import ServiceBanner from '../../components/ServiceBanner';

// Note: metadata must be exported from a server component
// Since this is a client component ("use client"), we can't export metadata here

export default function BranchPage() {
  return (
    <>
      <Navbar />
      
      <main>
        {/* Hero Section */}
        <div className="bg-blue-600 text-white py-10">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto mb-8">
              <img 
                src="/images/bannerbranch.png" 
                alt="ทีมงาน FinFin" 
                className="w-full rounded-lg shadow-lg mb-4"
              />
              {/* <img 
                src="/images/team-photo-2.jpg" 
                alt="ทีมงาน FinFin" 
                className="w-full rounded-lg shadow-lg"
              /> */}
            </div>
          </div>
        </div>
        
        {/* Company Description */}
        <div className="py-10 bg-white">
        <h2 className="text-2xl font-bold text-center">จุดเรื่มต้นของ "ฟินฟิน"</h2>
        <h3 className="text-xl font-bold text-center">เพื่อนที่คอยช่วยเหลือคุณให้มีชีวิตที่ดีขึ้น</h3>
        <div className="flex justify-center my-6">
          <Image 
            src="/images/finfin1.png" 
            alt="ทีมงาน FinFin" 
            width={600} 
            height={400}
            className="rounded-lg shadow-lg"
          />
        </div>

          <div className="container mx-auto px-4 max-w-4xl">
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              ฟินฟิน ก่อตั้งขึ้นเมื่อปี พ.ศ.2549 เพื่อดำเนินธุรกิจให้บริการทางการเงินแก่ผู้บริโภคที่มีรายได้ระดับน้อยถึงปานกลางซึ่งมีข้อจำกัดในการเข้าถึงแหล่งเงินทุน
            </p>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              เรามีความเชื่อมั่นว่าลูกค้าทุกคนควรได้รับโอกาสในการเลือกซื้อสินค้าที่มีคุณภาพจากร้านค้าชั้นนำ ด้วยการผ่อนชำระเงินในอัตราที่เหมาะสม
            </p>
            <p className="text-gray-700 text-sm mb-4 leading-relaxed">
              ซึ่งแม้จะเพิ่งเริ่มธุรกิจได้เพียง 15 ปีแต่ ฟินฟินได้รับความไว้วางใจจากลูกค้าและร้านค้าชั้นนำ เป็นอย่างดี ทางบริษัทได้มีการพัฒนาระบบการทำงานอย่างต่อเนื่องเพื่อให้บริการที่รวดเร็ว ปลอดภัย และโปร่งใส
            </p>
            <p className="text-gray-700 text-sm mb-6 leading-relaxed">
              ปัจจุบันฟินฟิน มี 19 สาขาทั่วกรุงเทพฯ รวมทั้งมีจำนวนพนักงานผู้ให้บริการกว่า 150 คน และยังคงเดินหน้าขยายสาขาในทำเลที่เหมาะสมอย่างต่อเนื่องเพื่อรองรับการเติบโตของธุรกิจและให้บริการลูกค้าได้ครอบคลุมมากยิ่งขึ้น
            </p>
            {/* <div className="flex justify-center">
              <Link href="#" className="text-blue-600 text-sm hover:underline">
                **เงื่อนไขการสมัคร เข้าร่วมโปรแกรมคืออะไรและมีขั้นตอนอย่างไรบ้าง เพื่อเข้าร่วมโปรแกรม
              </Link>
            </div>
            <div className="flex justify-center mt-2">
              <Link href="#" className="text-blue-600 text-sm hover:underline">
                ศูนย์รวมร้านค้าที่ร่วมรายการ
              </Link>
            </div> */}
          </div>
          
          {/* Branch Heading */}
          <div className="container mx-auto px-4 text-center mt-10 mb-6">
            <h2 className="text-2xl font-semibold">ฟินฟิน ทำอะไร</h2>
          </div>
          
          {/* Service Boxes */}
          <ServiceBoxes />
        </div>
        
        {/* Bottom Feature Icons */}
        <ServiceFeatures />
        
        {/* Contact Buttons */}
       
      </main>
      <ServiceBanner />
      <Footer />
    </>
  );
}
