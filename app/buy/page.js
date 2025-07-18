import React from 'react';
import HeroBanner from './components/HeroBanner';
import FeatureBoxes from './components/FeatureBoxes';
import ThreeSteps from './components/ThreeSteps';
import InfoBoxes from './components/InfoBoxes';
import Products from './components/Products';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceBanner from '../../components/ServiceBanner';

export const metadata = {
  title: 'ผ่อนสินค้า | FinFin',
  description: 'บริการผ่อนสินค้าของ FinFin มีอัตราดอกเบี้ยต่ำ และเงื่อนไขที่ยืดหยุ่น',
};

export default function BuyPage() {
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar/>
      <div className="bg-blue-600 relative overflow-hidden pb-16 sm:pb-24 md:pb-32">
        {/* Banner */}
        <div className="w-full pt-4 sm:pt-6 pb-2 sm:pb-4 flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/banner1.png" 
                alt="Promotion Banner" 
                className="w-full h-auto object-cover max-h-24 sm:max-h-32"
              />
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-8 sm:pt-12 md:pt-16 pb-12 sm:pb-16 md:pb-20 relative">
          <div className="flex justify-start items-center pl-4 sm:pl-6 md:pl-16 lg:pl-24 xl:pl-32">
            <div className="text-white z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">ผ่อนไอโฟนที่ ไม่ใช้บัตร ดาวน์ปุ๊ป รับเครื่องปั๊ป</h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-2">ผ่อนเริ่มต้นเพียง 1,570 บาท</h3>
            </div>
          </div>
          
          <div className="absolute right-[10%] sm:right-[15%] md:right-[25%] top-[80%] sm:top-[90%] md:top-[105%] transform -translate-y-1/2">
            <img 
              src="/images/alliphone2.png" 
              alt="iPhone" 
              className="max-w-[180px] sm:max-w-[220px] md:max-w-[260px] lg:max-w-[300px] drop-shadow-lg"
            />
          </div>
        </div>
      </div>
      <HeroBanner />
      <div className="mt-8 flex justify-center">
        <a href="/faq" className="bg-primary text-white px-16 py-3 rounded-full font-medium text-lg hover:bg-blue-700 transition-colors">
          สนใจผ่อน
        </a>
      </div>
      <ThreeSteps />
      <InfoBoxes />
      <Products />
      <ServiceBanner />
      <Footer/>
    </main>
  );
}
