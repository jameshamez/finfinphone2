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
      <main className="w-full overflow-x-hidden container mx-auto px-4 sm:px-6 md:px-8 lg:px-8 py-6 sm:py-8 md:py-10 lg:py-12">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">ร่วมงานกับเรา</h1>
        
        {/* Job Listings */}
        <div className="max-w-4xl mx-auto mb-8 sm:mb-12">
          <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-4">ตำแหน่งงานที่เปิดรับ</h2>
            
            <div className="border rounded-md overflow-hidden mb-2 sm:mb-3 hover:shadow-sm transition-shadow">
              <div 
                className="bg-white p-3 sm:p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleJob(0)}
              >
                <p className="font-medium text-sm sm:text-base md:text-lg">Sales Coordinate (ประจำสำนักงานใหญ่)</p>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${openJob === 0 ? 'rotate-180' : ''}`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {openJob === 0 && (
                <div className="p-3 sm:p-4 bg-gray-50 border-t">
                  <h4 className="font-medium text-blue-600 mb-2 text-sm sm:text-base">รายละเอียดงาน</h4>
                  <ul className="list-disc pl-4 sm:pl-5 mb-3 text-xs sm:text-sm">
                    <li>ประสานงานระหว่างฝ่ายขายและลูกค้า</li>
                    <li>จัดการเอกสารการขายและสัญญา</li>
                    <li>ติดตามสถานะการขายและรายงานผล</li>
                    <li>ให้ข้อมูลสินค้าและโปรโมชั่นแก่ลูกค้า</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2 text-sm sm:text-base">คุณสมบัติ</h4>
                  <ul className="list-disc pl-4 sm:pl-5 mb-3 text-xs sm:text-sm">
                    <li>วุฒิการศึกษาระดับ ปวส. หรือปริญญาตรีขึ้นไป</li>
                    <li>มีประสบการณ์ด้านงานขายหรือประสานงานขาย 1-2 ปี</li>
                    <li>มีทักษะการสื่อสารและการประสานงานที่ดี</li>
                    <li>สามารถใช้คอมพิวเตอร์โปรแกรม Microsoft Office ได้ดี</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2 text-sm sm:text-base">สวัสดิการ</h4>
                  <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm">
                    <li>เงินเดือน 18,000 - 25,000 บาท (ตามประสบการณ์)</li>
                    <li>โบนัสประจำปี</li>
                    <li>ประกันสังคม</li>
                    <li>ประกันสุขภาพ</li>
                    <li>วันหยุดพักร้อนประจำปี</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="border rounded-md overflow-hidden mb-2 sm:mb-3 hover:shadow-sm transition-shadow">
              <div 
                className="bg-white p-3 sm:p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleJob(1)}
              >
                <p className="font-medium text-sm sm:text-base">Customer Service (ประจำสาขา)</p>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${openJob === 1 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {openJob === 1 && (
                <div className="p-3 sm:p-4 bg-gray-50 border-t">
                  <h4 className="font-medium text-blue-600 mb-2 text-sm sm:text-base">รายละเอียดงาน</h4>
                  <ul className="list-disc pl-4 sm:pl-5 mb-3 text-xs sm:text-sm">
                    <li>ให้บริการและคำแนะนำแก่ลูกค้า</li>
                    <li>แก้ไขปัญหาเบื้องต้นให้กับลูกค้า</li>
                    <li>ดูแลความเรียบร้อยของสาขา</li>
                    <li>จัดการเอกสารและรายงานประจำวัน</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2 text-sm sm:text-base">คุณสมบัติ</h4>
                  <ul className="list-disc pl-4 sm:pl-5 mb-3 text-xs sm:text-sm">
                    <li>วุฒิการศึกษาระดับ ปวช. หรือสูงกว่า</li>
                    <li>มีใจรักงานบริการ</li>
                    <li>มีทักษะการสื่อสารที่ดี</li>
                    <li>สามารถทำงานเป็นกะได้</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2 text-sm sm:text-base">สวัสดิการ</h4>
                  <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm">
                    <li>เงินเดือน 15,000 - 18,000 บาท</li>
                    <li>ค่าคอมมิชชั่น</li>
                    <li>ประกันสังคม</li>
                    <li>ชุดยูนิฟอร์ม</li>
                    <li>วันหยุดประจำสัปดาห์ 1 วัน</li>
                  </ul>
                </div>
              )}
            </div>
            
            <div className="border rounded-md overflow-hidden mb-2 sm:mb-3 hover:shadow-sm transition-shadow">
              <div 
                className="bg-white p-3 sm:p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50"
                onClick={() => toggleJob(2)}
              >
                <p className="font-medium text-sm sm:text-base">Digital Marketing Specialist</p>
                <svg 
                  className={`w-4 h-4 sm:w-5 sm:h-5 transform transition-transform ${openJob === 2 ? 'rotate-180' : ''}`}
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
              {openJob === 2 && (
                <div className="p-3 sm:p-4 bg-gray-50 border-t">
                  <h4 className="font-medium text-blue-600 mb-2 text-sm sm:text-base">รายละเอียดงาน</h4>
                  <ul className="list-disc pl-4 sm:pl-5 mb-3 text-xs sm:text-sm">
                    <li>วางแผนและดำเนินการแคมเปญการตลาดดิจิทัล</li>
                    <li>ดูแลและพัฒนาเนื้อหาบนสื่อโซเชียลมีเดีย</li>
                    <li>วิเคราะห์ข้อมูลและประสิทธิภาพของแคมเปญ</li>
                    <li>ทำงานร่วมกับทีมขายและทีมพัฒนาผลิตภัณฑ์</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2 text-sm sm:text-base">คุณสมบัติ</h4>
                  <ul className="list-disc pl-4 sm:pl-5 mb-3 text-xs sm:text-sm">
                    <li>วุฒิการศึกษาระดับปริญญาตรีขึ้นไป สาขาการตลาด, นิเทศศาสตร์ หรือสาขาที่เกี่ยวข้อง</li>
                    <li>มีประสบการณ์ด้านการตลาดดิจิทัล 2 ปีขึ้นไป</li>
                    <li>มีความเข้าใจในเครื่องมือการตลาดดิจิทัลและโซเชียลมีเดีย</li>
                    <li>มีความคิดสร้างสรรค์และทักษะการเขียนที่ดี</li>
                  </ul>
                  
                  <h4 className="font-medium text-blue-600 mb-2 text-sm sm:text-base">สวัสดิการ</h4>
                  <ul className="list-disc pl-4 sm:pl-5 text-xs sm:text-sm">
                    <li>เงินเดือน 25,000 - 35,000 บาท (ตามประสบการณ์)</li>
                    <li>โบนัสประจำปี</li>
                    <li>ประกันสุขภาพ</li>
                    <li>ประกันสังคม</li>
                    <li>วันหยุดพักร้อนประจำปี</li>
                  </ul>
                </div>
              )}
            </div>
        </div>
        
        {/* Application Form */}
        <div className="max-w-4xl mx-auto bg-white p-6 sm:p-8 md:p-10 rounded-lg md:rounded-xl shadow-sm md:shadow border border-gray-200">
          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-6 md:mb-8 text-center">สมัครงาน</h2>
          
          <div className="space-y-6">
            {/* Position */}
            <div>
              <h3 className="font-semibold mb-2 text-sm sm:text-base">ตำแหน่งที่สนใจ</h3>
              <select className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors">
                <option>กรุณาเลือกตำแหน่ง</option>
                <option>Sales Coordinate (ประจำสำนักงานใหญ่)</option>
                <option>Customer Service (ประจำสาขา)</option>
                <option>Digital Marketing Specialist</option>
              </select>
            </div>
            
            {/* Personal Info */}
            <div>
              <h3 className="font-semibold mb-3 text-sm sm:text-base">ข้อมูลส่วนตัว</h3>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-5 mb-4 md:mb-5">
                <div>
                  <label className="block text-sm mb-1">คำนำหน้า</label>
                  <select className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20fill%3D%22%236b7280%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:1.25em_1.25em] bg-[right_0.5rem_center] pr-10">
                    <option>นาย</option>
                    <option>นาง</option>
                    <option>นางสาว</option>
                  </select>
                </div>
              </div>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 md:gap-5 mb-4 md:mb-5">
                <div>
                  <label className="block text-sm md:text-base mb-1 md:mb-2">ชื่อ</label>
                  <input type="text" className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>
                
                <div>
                  <label className="block text-sm md:text-base mb-1 md:mb-2">นามสกุล</label>
                  <input type="text" className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
                </div>
              </div>
            </div>
            
            {/* Address */}
            <div className="mb-5 sm:mb-6">
              <h3 className="font-semibold mb-1 sm:mb-2 md:mb-3 text-sm sm:text-base md:text-lg">ที่อยู่</h3>
              <textarea className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md h-20 sm:h-24 md:h-28 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"></textarea>
            </div>
            
            {/* Phone */}
            <div className="mb-5 sm:mb-6">
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">เบอร์โทรศัพท์มือถือ</h3>
              <input type="tel" className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
            </div>
            
            {/* Email */}
            <div className="mb-5 sm:mb-6">
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">อีเมล</h3>
              <input type="email" className="w-full p-2 border border-gray-300 rounded focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" />
            </div>
            
            {/* Message */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-semibold mb-1 sm:mb-2 text-sm sm:text-base">ที่อยู่ที่ติดต่อได้</h3>
              <textarea className="w-full p-2 border border-gray-300 rounded h-20 sm:h-24 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"></textarea>
            </div>
            
            {/* Document Upload */}
            <div className="mb-6 sm:mb-8">
              <h3 className="font-semibold text-blue-700 mb-3 sm:mb-4 text-sm sm:text-base">เอกสารการสมัคร</h3>
              
              <div className="mb-5 sm:mb-6">
                <div className="mb-1 sm:mb-2 md:mb-3">
                  <label className="block text-sm sm:text-base md:text-lg">ประวัติส่วนตัว (ถ้ามี) <span className="text-red-500">*</span>ไฟล์ .docx หรือ .pdf</label>
                </div>
                <div className="relative">
                  <input type="file" className="opacity-0 absolute inset-0 w-full cursor-pointer" accept=".docx,.pdf" />
                  <div className="flex">
                    <button className="bg-gray-200 px-3 sm:px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-l md:rounded-l-md hover:bg-gray-300 transition-colors text-sm sm:text-base">เลือกไฟล์</button>
                    <span className="border border-gray-300 border-l-0 rounded-r md:rounded-r-md bg-white px-3 sm:px-4 md:px-5 py-2 md:py-3 flex-grow text-sm sm:text-base">ไม่ได้เลือกไฟล์ใด</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-5 sm:mb-6">
                <div className="mb-1 sm:mb-2 md:mb-3">
                  <label className="block text-sm sm:text-base md:text-lg">รูปถ่าย (ถ้ามี) <span className="text-red-500">*</span>ไฟล์ .png หรือ .jpg</label>
                </div>
                <div className="relative">
                  <input type="file" className="opacity-0 absolute inset-0 w-full cursor-pointer" accept=".png,.jpg,.jpeg" />
                  <div className="flex">
                    <button className="bg-gray-200 px-3 sm:px-4 md:px-5 py-2 md:py-3 border border-gray-300 rounded-l md:rounded-l-md hover:bg-gray-300 transition-colors text-sm sm:text-base">เลือกไฟล์</button>
                    <span className="border border-gray-300 border-l-0 rounded-r md:rounded-r-md bg-white px-3 sm:px-4 md:px-5 py-2 md:py-3 flex-grow text-sm sm:text-base">ไม่ได้เลือกไฟล์ใด</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-5 sm:mb-6">
                <div className="mb-1 sm:mb-2 md:mb-3">
                  <label className="block text-sm sm:text-base md:text-lg">รายละเอียดเพิ่มเติม</label>
                </div>
                <textarea className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md h-20 sm:h-24 md:h-28 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"></textarea>
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="mb-6 sm:mb-8 md:mb-10">
              <div className="text-xs sm:text-sm md:text-base text-gray-600 p-3 sm:p-4 md:p-5 border border-gray-200 rounded-md md:rounded-lg bg-gray-50">
                <p className="flex items-start">
                  <input type="checkbox" id="terms-agree" className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3 mt-0.5 accent-blue-600" />
                  <span>
                    ข้าพเจ้าขอรับรองว่าข้อมูลที่ได้กรอกในใบสมัครนี้ เป็นข้อมูลที่ถูกต้องครบถ้วนทุกประการ หากข้าพเจ้าได้รับคัดเลือกเข้าทำงาน 
                    และภายหลังบริษัทฯตรวจพบว่าข้อมูลที่ให้ไว้เป็นเท็จ ข้าพเจ้ายินดีให้บริษัทฯเลิกจ้างโดยไม่จ่ายค่าชดเชยหรือค่าเสียหายใดๆ ทั้งสิ้น 
                    และข้าพเจ้าตกลงยินยอมให้บริษัทสามารถเปิดเผยข้อมูลของข้าพเจ้าให้กับบริษัทในเครือทุกบริษัท รวมถึงตัวแทนของบริษัท
                    เพื่อประโยชน์ในการพิจารณารับเข้าทำงาน และการจัดการภายหลังการรับเข้าทำงานแล้วตามกระบวนการและนโยบายของบริษัทฯ
                  </span>
                </p>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button className="bg-blue-600 text-white font-medium py-2 md:py-3 px-6 sm:px-8 md:px-10 rounded md:rounded-lg hover:bg-blue-700 transition-colors w-full md:w-auto text-sm sm:text-base md:text-lg shadow-md hover:shadow-lg">
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
