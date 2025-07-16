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
      
      <main className="bg-gray-100 min-h-screen">
        {/* Breadcrumb Navigation */}
        <div className="bg-white py-3 border-b">
          <div className="container mx-auto px-4">
            <div className="flex items-center text-sm">
              <Link href="/" className="text-gray-500 hover:text-primary">Home</Link>
              <span className="mx-2 text-gray-400">/</span>
              <span className="text-primary font-medium">สินค้า</span>
            </div>
          </div>
        </div>
        
        {/* Page Content */}
        <div className="container mx-auto px-4 py-6">
          {/* Filter and Sort Options */}
          <div className="flex justify-between items-center mb-6">
            <div>
              <button className="bg-primary text-white w-10 h-10 rounded flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
            <div className="flex items-center">
              <span className="text-sm mr-2">Default sorting</span>
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {/* iPhone 13 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 13</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 13" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[A] Apple iPhone 13</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿12,750.00</p>
                </div>
              </div>
            </div>
            
            {/* iPhone 14 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden relative">
              <div className="absolute top-0 right-0 bg-black text-white text-xs py-1 px-2">
                NEW
              </div>
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 14</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 14" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[B] Apple iPhone 14</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿16,900.00</p>
                </div>
              </div>
            </div>
            
            {/* iPhone 14 Plus */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 14 Plus</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 14 Plus" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[C] Apple iPhone 14 Plus</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿19,750.00</p>
                </div>
              </div>
            </div>
            
            {/* iPhone 16e */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 16e</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 16e" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[D] Apple iPhone 16e</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿18,200.00</p>
                </div>
              </div>
            </div>
            
            {/* Second Row */}
            {/* iPhone 16 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 16</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 16" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[A] Apple iPhone 16</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿20,750.00</p>
                </div>
              </div>
            </div>
            
            {/* iPhone 16 Plus */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 16 Plus</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 16 Plus" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[B] Apple iPhone 16 Plus</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿22,900.00</p>
                </div>
              </div>
            </div>
            
            {/* iPhone 16 Pro */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 16 Pro</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 16 Pro" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[C] iPhone 16 Pro</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿26,900.00</p>
                </div>
              </div>
            </div>
            
            {/* Phone 16 Pro Max */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">Phone 16 Pro Max</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 16 Pro Max" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[D] iPhone 16 Pro Max</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿30,000.00</p>
                </div>
              </div>
            </div>
            
            {/* Third Row (iPhone 15 Series) */}
            {/* iPhone 15 */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 15</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 15" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[T] Apple iPhone 15</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿18,750.00</p>
                </div>
              </div>
            </div>
            
            {/* iPhone 15 Plus */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 15 Plus</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 15 Plus" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[U] Apple iPhone 15 Plus</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿21,000.00</p>
                </div>
              </div>
            </div>
            
            {/* iPhone 15 Pro */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 15 Pro</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 15 Pro" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[V] Apple iPhone 15 Pro</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿28,000.00</p>
                </div>
              </div>
            </div>
            
            {/* iPhone 15 Pro Max */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="p-4">
                <h3 className="text-center font-medium mb-4">iPhone 15 ProMax</h3>
                <div className="flex justify-center mb-4">
                  <div className="relative w-40 h-40">
                    <Image 
                      src="/images/iphone13.jpg" 
                      alt="iPhone 15 Pro Max" 
                      fill
                      style={{objectFit: 'contain'}}
                    />
                  </div>
                </div>
                <div className="text-center">
                  <p className="text-xs text-gray-500">[J] Apple iPhone 15 Pro Max</p>
                  <p className="text-xs text-gray-500">จ่ายล่วงหน้าเพียง ฿32,500.00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Pagination */}
          <div className="flex justify-center mt-10">
            <div className="inline-flex">
              <button className="bg-primary text-white w-8 h-8 flex items-center justify-center rounded">1</button>
              <button className="w-8 h-8 flex items-center justify-center text-gray-600 hover:text-primary">2</button>
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
