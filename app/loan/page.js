import React from 'react';
import HeroBanner from './components/HeroBanner';
import ThreeSteps from './components/ThreeSteps';
import InfoBoxes from './components/InfoBoxes';
import Products from './components/Products';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceBanner from '../../components/ServiceBanner';

export const metadata = {
  title: 'สินเชื่อ | FinFin',
  description: 'บริการสินเชื่อของ FinFin มีอัตราดอกเบี้ยต่ำ และเงื่อนไขที่ยืดหยุ่น',
};

export default function LoanPage() {
  return (
    <main>
      <Navbar/>
      <div className="bg-blue-600 relative overflow-hidden pb-32 ">
        {/* Banner */}
        <div className="w-full pt-6 pb-4 flex justify-center">
          <div className="w-full max-w-5xl px-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/loan-banner.png" 
                alt="Loan Banner" 
                className="w-full h-auto object-cover max-h-32"
              />
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 pt-16 relative">
          <div className="flex justify-start items-center pl-6 md:pl-32 lg:pl-48">
            <div className="text-white z-10">
              <h2 className="text-3xl md:text-4xl font-bold">อยากได้ไอโฟน แต่ไม่มีเงินก้อน...</h2>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">มาออมเงินดาวน์ที่ ฟินฟินได้</h3>
          </div>
          </div>
        </div>
      </div>
      <HeroBanner />
      <div className="mt-8 flex justify-center py-10">
        <a href="#" className="bg-primary text-white px-16 py-3 rounded-full font-medium text-lg hover:bg-blue-700 transition-colors">
          สนใจออมดาวน์ โหลดเลย
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
