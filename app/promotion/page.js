import React from 'react';
import HeroBanner from './components/HeroBanner';
import ThreeSteps from './components/ThreeSteps';
import InfoBoxes from './components/InfoBoxes';
import Products from './components/Products';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import ServiceBanner from '../../components/ServiceBanner';

export const metadata = {
  title: 'โปรโมชั่น | FinFin',
  description: 'โปรโมชั่นพิเศษจาก FinFin พร้อมข้อเสนอสุดคุ้มที่ไม่ควรพลาด',
};

export default function PromotionPage() {
  return (
    <main>
          <Navbar/>
          <div className="bg-blue-600 relative overflow-hidden pb-32 ">
            {/* Banner */}
            <div className="w-full pt-6 pb-4 flex justify-center">
              <div className="w-full max-w-5xl px-2">
                <div className="rounded-xl overflow-hidden shadow-lg">
                  <img 
                    src="/images/bannerpromo.png" 
                    alt="Promotion Banner" 
                    className="w-full h-auto object-cover max-h-32"
                  />
                </div>
              </div>
            </div>
            
            {/* Main Content */}
            <div className="container mx-auto px-4 pt-16 pb-20 relative">
              <div className="flex justify-start items-center pl-6 md:pl-32 lg:pl-48">
                <div className="text-white z-10">
                  <h2 className="text-3xl md:text-4xl font-bold">ร้อนเงิน หมุนไม่ทัน</h2>
                  <h3 className="text-2xl md:text-3xl font-bold mt-2">ไอโฟน ในมือคุณ ช่วยได้!</h3>
                </div>
              </div>
              
              <div className="absolute right-[25%] top-[105%] transform -translate-y-1/2">
                <img 
                  src="/images/money1.png" 
                  alt="iPhone" 
                  className="max-w drop-shadow-lg"
                />
              </div>
            </div>
    
            {/* Logo watermark */}
            {/* <div className="absolute left-0 bottom-0 opacity-10">
              <div className="text-white text-[200px] font-bold">FinFin</div>
            </div> */}
          </div>
          <HeroBanner />
          <div className="mt-8 flex justify-center">
            <a href="#" className="bg-primary text-white px-16 py-3 rounded-full font-medium text-lg hover:bg-blue-700 transition-colors">
              ต้องการเงิน
            </a>
          </div>
          <ThreeSteps />
          <InfoBoxes />
          <ServiceBanner />
          <Footer/>
        </main>
  );
}
