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
import { promises as fs } from 'fs';
import path from 'path';

export async function generateStaticParams() {
  return [];
}

async function getHomepageData() {
  const filePath = path.join(process.cwd(), 'data', 'homepage.json');
  const fileContents = await fs.readFile(filePath, 'utf8');
  return JSON.parse(fileContents);
}

export default async function Home() {
  const homepageData = await getHomepageData();
  return (
    <main className="w-full overflow-x-hidden">
      <Navbar />
      
      {/* Hero Section with Banner and Form */}
      <div className="bg-blue-600 relative overflow-hidden pb-16 sm:pb-20 md:pb-28 lg:pb-32">
        {/* Banner */}
        <div className="w-full pt-3 sm:pt-4 md:pt-6 pb-2 sm:pb-3 md:pb-4 flex justify-center">
          <div className="w-full max-w-6xl px-4 sm:px-6 md:px-10 lg:px-8">
            <div className="rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all">
              <img 
                src={homepageData?.hero?.image || "/images/banner1.png"} 
                alt="Promotion Banner" 
                className="w-full h-auto object-cover max-h-20 sm:max-h-24 md:max-h-36 lg:max-h-40"
              />
            </div>
          </div>
        </div>
        
        {/* Main Content */}
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-8 pt-6 sm:pt-8 md:pt-14 lg:pt-16 pb-10 sm:pb-12 md:pb-20 lg:pb-24 relative">
          <div className="flex justify-start items-center pl-2 sm:pl-4 md:pl-12 lg:pl-16 xl:pl-24">
            <div className="text-white z-10">
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold leading-tight tracking-tight md:tracking-normal">{homepageData?.hero?.title || "ผ่อนไอโฟนที่ ฟินฟิน"}</h2>
              <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mt-1 sm:mt-2 md:mt-4">{homepageData?.hero?.subtitle || "ง่าย ไว ชัวร์!"}</h3>
            </div>
          </div>
          
          <div className="absolute right-[8%] sm:right-[12%] md:right-[15%] lg:right-[20%] top-[70%] sm:top-[75%] md:top-[70%] transform -translate-y-1/2">
            <img 
              src={homepageData?.hero?.productImage || "/images/iphone1.png"} 
              alt="iPhone" 
              className="max-w-[90px] sm:max-w-[110px] md:max-w-[160px] lg:max-w-[200px] xl:max-w-[220px] drop-shadow-lg transition-transform hover:scale-105 duration-300"
            />
          </div>
        </div>
      </div>
      
      {/* Application Form */}
      <div className="py-5 sm:py-6 md:py-10 lg:py-12 bg-gray-50 -mt-10 sm:-mt-12 md:-mt-20 lg:-mt-24">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-8 max-w-5xl lg:max-w-6xl">
          <LoanForm />
        </div>
      </div>
      
      {/* Services */}
      <div className="bg-white py-6 sm:py-8 md:py-12 lg:py-14">
        <div className="container mx-auto px-4 sm:px-6 md:px-10 lg:px-8 max-w-5xl lg:max-w-6xl">
          <ServiceCards services={homepageData?.services} />
        </div>
      </div>

      {/* Customer Reviews */}
      <div className="overflow-x-hidden">
        <CustomerReviews data={homepageData?.customerReviews} />
      </div>

      {/* Product Showcase */}
      <div className="overflow-x-hidden">
        <ProductShowcase data={homepageData?.productShowcase} />
      </div>

      {/* Testimonials */}
      <div className="overflow-x-hidden">
        <Testimonials data={homepageData?.testimonials} />
      </div>

      {/* FAQ */}
      <div className="overflow-x-hidden">
        <FAQ data={homepageData} />
      </div>
      
      {/* Service Banner */}
      <div className="overflow-x-hidden">
        <ServiceBanner />
      </div>

      {/* Footer */}
      <Footer />
    </main>
  );
}
