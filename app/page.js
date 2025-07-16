import Image from 'next/image';
import Navbar from '../components/Navbar';
import ServiceCards from '../components/ServiceCards';
import CustomerReviews from '../components/CustomerReviews';
import ProductShowcase from '../components/ProductShowcase';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ServiceBanner from '../components/ServiceBanner';
import Footer from '../components/Footer';
import LoanForm from '../components/LoanForm';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section with Banner and Form */}
      <div className="bg-blue-600 relative overflow-hidden pb-32">
        {/* Banner */}
        <div className="w-full pt-6 pb-4 flex justify-center">
          <div className="w-full max-w-5xl px-2">
            <div className="rounded-xl overflow-hidden shadow-lg">
              <img 
                src="/images/banner1.png" 
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
              <h2 className="text-3xl md:text-4xl font-bold">ผ่อนไอโฟนที่ ฟินฟิน</h2>
              <h3 className="text-2xl md:text-3xl font-bold mt-2">ง่าย ไว ชัวร์!</h3>
            </div>
          </div>
          
          <div className="absolute right-[20%] top-[80%] transform -translate-y-1/2">
            <img 
              src="/images/iphone1.png" 
              alt="iPhone" 
              className="max-w-[140px] drop-shadow-lg"
            />
          </div>
        </div>

        {/* Logo watermark */}
        {/* <div className="absolute left-0 bottom-0 opacity-10">
          <div className="text-white text-[200px] font-bold">FinFin</div>
        </div> */}
      </div>
      
      {/* Application Form */}
      <div className="py-8 bg-gray-50 -mt-24">
        <div className="container mx-auto px-4">
          <LoanForm />
        </div>
      </div>
      
      {/* Services */}
      <div className="bg-white">
        <div className="container mx-auto px-4">
          {/* <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">บริการของเรา</h2> */}
          <ServiceCards />
        </div>
      </div>

      {/* Customer Reviews */}
      <CustomerReviews />

      {/* Product Showcase */}
      <ProductShowcase />

      {/* Testimonials */}
      <Testimonials />

      {/* FAQ */}
      <FAQ />
      
      {/* Service Banner */}
      <ServiceBanner />

      {/* Footer */}
      <Footer />
    </main>
  );
}
