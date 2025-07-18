import React from 'react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceBanner from '../../components/ServiceBanner';

export const metadata = {
  title: 'คำนวณยอดผ่อนไอโฟน | FinFin',
  description: 'คำนวณยอดผ่อนไอโฟนกับ FinFin ง่ายๆ เลือกรุ่นที่ต้องการและดูยอดผ่อนรายเดือน',
};

export default function CalculatorPage() {
  return (
    <>
      <Navbar />
      
      <main className="bg-gray-100 min-h-screen overflow-x-hidden">
        {/* Breadcrumb Navigation */}
        <div className="bg-white py-3 md:py-4 border-b">
          <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-8">
            <div className="flex items-center text-sm md:text-base">
              <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-primary font-medium">สินค้า</span>
            </div>
          </div>
        </div>
        
        {/* Page Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-8 py-6 md:py-10">
          {/* Filter and Sort Options */}
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div>
              <button className="bg-primary text-white w-10 h-10 md:w-12 md:h-12 rounded md:rounded-lg flex items-center justify-center shadow-md hover:shadow-lg transition-shadow">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="flex items-center bg-white px-3 py-2 md:px-4 md:py-3 rounded-md md:rounded-lg shadow-sm hover:shadow-md transition-shadow">
              <span className="text-sm md:text-base mr-2">Default sorting</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6 text-primary" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 mb-8 md:mb-10">
            {/* iPhone 13 */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-[1.02] duration-300">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg tracking-tight">iPhone 13</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 13" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[A] Apple iPhone 13</p>
                    <p className="text-xs md:text-sm text-gray-500">จ่ายล่วงหน้าเพียง ฿12,750.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* iPhone 14 */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden relative cursor-pointer hover:opacity-95 hover:shadow-xl transition-all transform hover:scale-[1.02] duration-300">
                <div className="absolute top-0 right-0 bg-black text-white text-xs md:text-sm py-1 px-2 md:px-3 rounded-bl-md">
                  NEW
                </div>
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg tracking-tight">iPhone 14</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 14" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[B] Apple iPhone 14</p>
                    <p className="text-xs md:text-sm text-gray-500">จ่ายล่วงหน้าเพียง ฿15,500.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* iPhone 14 Plus */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-[1.02] duration-300">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg tracking-tight">iPhone 14 Plus</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 14 Plus" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[C] Apple iPhone 14 Plus</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่วงหน้าเพียง ฿19,750.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* iPhone 16e */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-[1.02] duration-300">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg tracking-tight">iPhone 16e</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 16e" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[D] Apple iPhone 16e</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่วงหน้าเพียง ฿18,200.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Second Row */}
            {/* iPhone 16 */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-[1.02] duration-300">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg tracking-tight">iPhone 16</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 16" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[A] Apple iPhone 16</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่วงหน้าเพียง ฿20,750.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* iPhone 16 Plus */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-[1.02] duration-300">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg tracking-tight">iPhone 16 Plus</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 16 Plus" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[B] Apple iPhone 16 Plus</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่วงหน้าเพียง ฿22,900.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* iPhone 16 Pro */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-[1.02] duration-300">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg tracking-tight">iPhone 16 Pro</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 16 Pro" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[C] iPhone 16 Pro</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่วงหน้าเพียง ฿26,900.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Phone 16 Pro Max */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all transform hover:scale-[1.02] duration-300">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg tracking-tight">Phone 16 Pro Max</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 16 Pro Max" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[D] iPhone 16 Pro Max</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่งหน้าเพียง ฿30,000.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* Third Row (iPhone 15 Series) */}
            {/* iPhone 15 */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg">iPhone 15</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 15" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[T] Apple iPhone 15</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่วงหน้าเพียง ฿18,750.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* iPhone 15 Plus */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg">iPhone 15 Plus</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 15 Plus" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[U] Apple iPhone 15 Plus</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่วงหน้าเพียง ฿21,000.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* iPhone 15 Pro */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg">iPhone 15 Pro</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 15 Pro" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[V] Apple iPhone 15 Pro</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่วงหน้าเพียง ฿28,000.00</p>
                  </div>
                </div>
              </div>
            </Link>
            
            {/* iPhone 15 Pro Max */}
            <Link href="/faq" className="block">
              <div className="bg-white rounded-xl shadow-lg overflow-hidden cursor-pointer hover:shadow-xl transition-all">
                <div className="p-4 md:p-6">
                  <h3 className="text-center font-medium mb-4 md:mb-5 text-base md:text-lg">iPhone 15 ProMax</h3>
                  <div className="flex justify-center mb-4 md:mb-6">
                    <div className="relative w-40 h-40 md:w-48 md:h-48">
                      <Image 
                        src="/images/iphone13.jpg" 
                        alt="iPhone 15 Pro Max" 
                        fill
                        style={{objectFit: 'contain'}}
                        sizes="(max-width: 768px) 160px, (max-width: 1200px) 192px, 224px"
                      />
                    </div>
                  </div>
                  <div className="text-center">
                    <p className="text-xs md:text-sm text-gray-500 mb-1">[J] Apple iPhone 15 Pro Max</p>
                    <p className="text-xs md:text-sm text-gray-500 mb-1">จ่ายล่วงหน้าเพียง ฿32,500.00</p>
                  </div>
                </div>
              </div>
            </Link>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-10 md:mt-14">
            <div className="inline-flex shadow-md rounded-md overflow-hidden">
              <button className="bg-primary text-white w-8 h-8 md:w-10 md:h-10 flex items-center justify-center rounded-l md:rounded-l-md md:text-lg font-medium">1</button>
              <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors md:text-lg font-medium">2</button>
              <button className="w-8 h-8 md:w-10 md:h-10 flex items-center justify-center text-gray-600 hover:text-primary hover:bg-gray-100 transition-colors rounded-r md:rounded-r-md">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {/* Calculator Form Section */}
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-8 py-8 md:py-12">
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8">
            <h2 className="text-xl md:text-2xl font-bold text-center mb-6 md:mb-8">คำนวณยอดผ่อนไอโฟน</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              <div>
                <label className="block text-sm md:text-base font-medium mb-2 md:mb-3">เลือกรุ่นไอโฟน</label>
                <select className="w-full p-2 md:p-3 border border-gray-300 rounded-md md:rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white">
                  <option value="">-- เลือกรุ่น --</option>
                  <option value="iphone13">iPhone 13</option>
                  <option value="iphone14">iPhone 14</option>
                  <option value="iphone14plus">iPhone 14 Plus</option>
                  <option value="iphone15">iPhone 15</option>
                  <option value="iphone15pro">iPhone 15 Pro</option>
                  <option value="iphone15promax">iPhone 15 Pro Max</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-medium mb-2 md:mb-3">เลือกความจุ</label>
                <select className="w-full p-2 md:p-3 border border-gray-300 rounded-md md:rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white">
                  <option value="">-- เลือกความจุ --</option>
                  <option value="128">128 GB</option>
                  <option value="256">256 GB</option>
                  <option value="512">512 GB</option>
                  <option value="1tb">1 TB</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-medium mb-2 md:mb-3">จำนวนเดือนที่ต้องการผ่อน</label>
                <select className="w-full p-2 md:p-3 border border-gray-300 rounded-md md:rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors bg-white">
                  <option value="">-- เลือกจำนวนเดือน --</option>
                  <option value="6">6 เดือน</option>
                  <option value="12">12 เดือน</option>
                  <option value="24">24 เดือน</option>
                  <option value="36">36 เดือน</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm md:text-base font-medium mb-2 md:mb-3">จำนวนเงินดาวน์</label>
                <input type="text" className="w-full p-2 md:p-3 border border-gray-300 rounded-md md:rounded-lg focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors" placeholder="ระบุจำนวนเงิน" />
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 text-center">
              <button className="bg-primary text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-md md:rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-sm md:text-base">
                คำนวณยอดผ่อน
              </button>
            </div>
            
            <div className="mt-8 md:mt-10 p-4 md:p-6 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg md:text-xl font-semibold mb-4 md:mb-6 text-center">ผลการคำนวณ</h3>
              <div className="grid grid-cols-2 gap-4 md:gap-6">
                <div className="text-center">
                  <p className="text-sm md:text-base text-gray-600 mb-1">ยอดผ่อนต่อเดือน</p>
                  <p className="text-lg md:text-xl font-bold text-primary">฿0.00</p>
                </div>
                <div className="text-center">
                  <p className="text-sm md:text-base text-gray-600 mb-1">ยอดรวมทั้งหมด</p>
                  <p className="text-lg md:text-xl font-bold text-primary">฿0.00</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 md:mt-8 text-center">
              <Link href="/faq" className="inline-block bg-blue-600 text-white font-medium py-2 md:py-3 px-6 md:px-8 rounded-md md:rounded-lg hover:bg-blue-700 transition-colors shadow-md hover:shadow-lg text-sm md:text-base">
                สนใจผ่อนสินค้า
              </Link>
            </div>
          </div>
        </div>
        
        {/* Bottom Service Banner */}
        <ServiceBanner />
      </main>
      
      <Footer />
    </>
  );
}
