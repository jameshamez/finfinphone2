"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import { useState } from "react";

export default function CareersPage() {
  const [openJob, setOpenJob] = useState(null);
  
  const toggleJob = (index) => {
    if (openJob === index) {
      setOpenJob(null);
    } else {
      setOpenJob(index);
    }
  };
  
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 mr-1">หน้าหลัก</Link>
            <span className="text-sm text-gray-500 mx-1">/</span>
            <span className="text-sm text-gray-700">หางานกับเรา</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-8 text-center">ร่วมงานกับเรา</h1>

          {/* Job Categories */}
          <div className="mb-8">
            <p className="font-semibold mb-4">ตำแหน่งที่ FinFinPhone กำลังตามหา</p>
            
            <div className="border rounded-md overflow-hidden mb-2">
              <div 
                className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleJob(0)}
              >
                <p className="font-medium">Sales Coordinate (ประจำสำนักงานใหญ่)</p>
                <svg 
                  className={`w-5 h-5 transform transition-transform ${openJob === 0 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {openJob === 0 && (
                <div className="p-4 bg-gray-50 border-t">
                  <h4 className="font-medium text-blue-600 mb-2">รายละเอียดงาน</h4>
                  <ul className="list-disc pl-5 mb-3 text-sm">
                    <li>ประสานงานระหว่างฝ่ายขายและลูกค้า</li>
                    <li>จัดการเอกสารการขายและสัญญา</li>
                    <li>ติดตามสถานะการขายและรายงานผล</li>
                    <li>ให้ข้อมูลสินค้าและโปรโมชั่นแก่ลูกค้า</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2">คุณสมบัติ</h4>
                  <ul className="list-disc pl-5 mb-3 text-sm">
                    <li>วุฒิการศึกษาระดับ ปวส. หรือปริญญาตรีขึ้นไป</li>
                    <li>มีประสบการณ์ด้านงานขายหรือประสานงานขาย 1-2 ปี</li>
                    <li>มีทักษะการสื่อสารและการประสานงานที่ดี</li>
                    <li>สามารถใช้คอมพิวเตอร์โปรแกรม Microsoft Office ได้ดี</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2">สวัสดิการ</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>เงินเดือน 18,000 - 25,000 บาท (ตามประสบการณ์)</li>
                    <li>โบนัสประจำปี</li>
                    <li>ประกันสังคม</li>
                    <li>ประกันสุขภาพ</li>
                    <li>วันหยุดพักร้อนประจำปี</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="border rounded-md overflow-hidden mb-2">
              <div 
                className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleJob(1)}
              >
                <p className="font-medium">Sales (ประจำสำนักงานใหญ่/สาขา)</p>
                <svg 
                  className={`w-5 h-5 transform transition-transform ${openJob === 1 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {openJob === 1 && (
                <div className="p-4 bg-gray-50 border-t">
                  <h4 className="font-medium text-blue-600 mb-2">รายละเอียดงาน</h4>
                  <ul className="list-disc pl-5 mb-3 text-sm">
                    <li>นำเสนอและขายสินค้าให้กับลูกค้า</li>
                    <li>ให้คำแนะนำเกี่ยวกับผลิตภัณฑ์และบริการ</li>
                    <li>สร้างและรักษาความสัมพันธ์กับลูกค้า</li>
                    <li>ทำยอดขายตามเป้าหมายที่กำหนด</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2">คุณสมบัติ</h4>
                  <ul className="list-disc pl-5 mb-3 text-sm">
                    <li>วุฒิการศึกษาระดับ ม.6 หรือ ปวช. ขึ้นไป</li>
                    <li>มีประสบการณ์ด้านงานขาย 1 ปีขึ้นไป (หากไม่มีประสบการณ์ จะได้รับการฝึกอบรม)</li>
                    <li>มีทักษะการสื่อสารและการเจรจาต่อรองที่ดี</li>
                    <li>มีความกระตือรือร้น ขยัน อดทน</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2">สวัสดิการ</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>เงินเดือน + คอมมิชชั่น (รายได้รวม 20,000 - 35,000 บาท)</li>
                    <li>โบนัสตามยอดขาย</li>
                    <li>ประกันสังคม</li>
                    <li>ค่าเดินทาง</li>
                    <li>การฝึกอบรมพัฒนาทักษะ</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="border rounded-md overflow-hidden mb-2">
              <div 
                className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleJob(2)}
              >
                <p className="font-medium">เจ้าหน้าที่จัดซื้อสินค้า (ต่างสาขา)</p>
                <svg 
                  className={`w-5 h-5 transform transition-transform ${openJob === 2 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {openJob === 2 && (
                <div className="p-4 bg-gray-50 border-t">
                  <h4 className="font-medium text-blue-600 mb-2">รายละเอียดงาน</h4>
                  <ul className="list-disc pl-5 mb-3 text-sm">
                    <li>จัดซื้อสินค้าและอุปกรณ์สำหรับสาขาต่างๆ</li>
                    <li>ติดต่อประสานงานกับซัพพลายเออร์</li>
                    <li>ตรวจสอบคุณภาพและปริมาณสินค้า</li>
                    <li>จัดการเอกสารการสั่งซื้อและการรับสินค้า</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2">คุณสมบัติ</h4>
                  <ul className="list-disc pl-5 mb-3 text-sm">
                    <li>วุฒิการศึกษาระดับ ปวส. หรือปริญญาตรีขึ้นไป</li>
                    <li>มีประสบการณ์ด้านงานจัดซื้อ 1-2 ปี</li>
                    <li>มีความรู้เกี่ยวกับสมาร์ทโฟนและอุปกรณ์อิเล็กทรอนิกส์</li>
                    <li>มีทักษะการเจรจาต่อรองที่ดี</li>
                    <li>สามารถเดินทางไปปฏิบัติงานนอกสถานที่ได้</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2">สวัสดิการ</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>เงินเดือน 20,000 - 28,000 บาท (ตามประสบการณ์)</li>
                    <li>ค่าเดินทาง</li>
                    <li>เบี้ยเลี้ยง</li>
                    <li>ประกันสังคม</li>
                    <li>โบนัสประจำปี</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="border rounded-md overflow-hidden mb-2">
              <div 
                className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleJob(3)}
              >
                <p className="font-medium">เจ้าหน้าที่จัดซื้อสินค้า (ทางโทรศัพท์)</p>
                <svg 
                  className={`w-5 h-5 transform transition-transform ${openJob === 3 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {openJob === 3 && (
                <div className="p-4 bg-gray-50 border-t">
                  <h4 className="font-medium text-blue-600 mb-2">รายละเอียดงาน</h4>
                  <ul className="list-disc pl-5 mb-3 text-sm">
                    <li>ติดต่อและจัดซื้อสินค้าผ่านทางโทรศัพท์</li>
                    <li>เจรจาต่อรองราคาและเงื่อนไขกับซัพพลายเออร์</li>
                    <li>ตรวจสอบและติดตามสถานะการสั่งซื้อ</li>
                    <li>จัดการเอกสารการสั่งซื้อและการชำระเงิน</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2">คุณสมบัติ</h4>
                  <ul className="list-disc pl-5 mb-3 text-sm">
                    <li>วุฒิการศึกษาระดับ ปวส. หรือปริญญาตรีขึ้นไป</li>
                    <li>มีประสบการณ์ด้านงานจัดซื้อหรือ Telesales 1 ปีขึ้นไป</li>
                    <li>มีทักษะการสื่อสารและการเจรจาต่อรองทางโทรศัพท์ที่ดี</li>
                    <li>มีความรู้เกี่ยวกับสมาร์ทโฟนและอุปกรณ์อิเล็กทรอนิกส์</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2">สวัสดิการ</h4>
                  <ul className="list-disc pl-5 text-sm">
                    <li>เงินเดือน 18,000 - 25,000 บาท (ตามประสบการณ์)</li>
                    <li>ค่าโทรศัพท์</li>
                    <li>โบนัสตามผลงาน</li>
                    <li>ประกันสังคม</li>
                    <li>วันหยุดพักร้อนประจำปี</li>
                  </ul>
                </div>
              )}
            </div>
          </div>

          {/* Job Application Form */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">สมัครงานวันนี้</h2>
            
            {/* Job Position 1 */}
            <div className="mb-8 border-b pb-6">
              <h3 className="font-semibold text-blue-600 mb-2">ตำแหน่งงานที่สมัคร</h3>
              <div className="mb-4">
                <select className="w-full p-2 border border-gray-300 rounded mb-4">
                  <option>Sales Coordinator (สาขาทั่วประเทศ)</option>
                </select>
              </div>
              
              <h3 className="font-semibold text-blue-600 mb-2">ข้อมูลส่วนตัว</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-1">
                  <label className="block text-sm mb-1">คำนำหน้า</label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="title" className="mr-1" />
                      <span>นาย</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="title" className="mr-1" />
                      <span>นาง</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="title" className="mr-1" />
                      <span>นางสาว</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">ชื่อ</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">นามสกุล</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </div>
            </div>
            
            {/* Job Position 2 */}
            <div className="mb-8 border-b pb-6">
              <h3 className="font-semibold text-blue-600 mb-2">ตำแหน่งงานที่สมัคร</h3>
              <div className="mb-4">
                <select className="w-full p-2 border border-gray-300 rounded mb-4">
                  <option>Sales Coordinator (สาขาทั่วประเทศ)</option>
                </select>
              </div>
              
              <h3 className="font-semibold text-blue-600 mb-2">ข้อมูลส่วนตัว</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-1">
                  <label className="block text-sm mb-1">คำนำหน้า</label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="title2" className="mr-1" />
                      <span>นาย</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="title2" className="mr-1" />
                      <span>นาง</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="title2" className="mr-1" />
                      <span>นางสาว</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">ชื่อ</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">นามสกุล</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </div>
            </div>
            
            {/* Address */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">ที่อยู่</h3>
              <textarea className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
            </div>
            
            {/* Phone */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">เบอร์โทรศัพท์มือถือ</h3>
              <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            
            {/* Email */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">อีเมล</h3>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            
            {/* Message */}
            <div className="mb-8">
              <h3 className="font-semibold mb-2">ที่อยู่ที่ติดต่อได้</h3>
              <textarea className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
            </div>
            
            {/* Document Upload */}
            <div className="mb-8">
              <h3 className="font-semibold text-blue-700 mb-4">เอกสารการสมัคร</h3>
              
              <div className="mb-6">
                <div className="mb-2">
                  <label className="block">ประวัติส่วนตัว (ถ้ามี) <span className="text-red-500">*</span>ไฟล์ .docx หรือ .pdf</label>
                </div>
                <div className="relative">
                  <input type="file" className="opacity-0 absolute inset-0 w-full cursor-pointer" accept=".docx,.pdf" />
                  <div className="flex">
                    <button className="bg-gray-200 px-4 py-2 border border-gray-300 rounded-l">เลือกไฟล์</button>
                    <span className="border border-gray-300 border-l-0 rounded-r bg-white px-4 py-2 flex-grow">ไม่ได้เลือกไฟล์ใด</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="mb-2">
                  <label className="block">รูปถ่าย (ถ้ามี) <span className="text-red-500">*</span>ไฟล์ .png หรือ .jpg</label>
                </div>
                <div className="relative">
                  <input type="file" className="opacity-0 absolute inset-0 w-full cursor-pointer" accept=".png,.jpg,.jpeg" />
                  <div className="flex">
                    <button className="bg-gray-200 px-4 py-2 border border-gray-300 rounded-l">เลือกไฟล์</button>
                    <span className="border border-gray-300 border-l-0 rounded-r bg-white px-4 py-2 flex-grow">ไม่ได้เลือกไฟล์ใด</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="mb-2">
                  <label className="block">รายละเอียดเพิ่มเติม</label>
                </div>
                <textarea className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="mb-8">
              
              <div className="text-xs text-gray-600 p-4 border border-gray-200 rounded-md bg-gray-50">
                <p>
                <input type="checkbox" id="terms-agree" className="w-4 h-4 mr-2" />
                  ข้าพเจ้าขอรับรองว่าข้อมูลที่ได้กรอกในใบสมัครนี้ เป็นข้อมูลที่ถูกต้องครบถ้วนทุกประการ หากข้าพเจ้าได้รับคัดเลือกเข้าทำงาน 
                  และภายหลังบริษัทฯตรวจพบว่าข้อมูลที่ให้ไว้เป็นเท็จ ข้าพเจ้ายินดีให้บริษัทฯเลิกจ้างโดยไม่จ่ายค่าชดเชยหรือค่าเสียหายใดๆ ทั้งสิ้น 
                  และข้าพเจ้าตกลงยินยอมให้บริษัทสามารถเปิดเผยข้อมูลของข้าพเจ้าให้กับบริษัทในเครือทุกบริษัท รวมถึงตัวแทนของบริษัท
                  เพื่อประโยชน์ในการพิจารณารับเข้าทำงาน และการจัดการภายหลังการรับเข้าทำงานแล้วตามกระบวนการและนโยบายของบริษัทฯ
                </p>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button className="bg-blue-600 text-white font-medium py-2 px-8 rounded hover:bg-blue-700 transition-colors w-full md:w-auto">
                ยืนยันสมัครงาน
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
