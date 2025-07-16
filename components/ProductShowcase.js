import React from 'react';
import Image from 'next/image';

export default function ProductShowcase() {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-2xl mb-2">ผลิตภัณฑ์ที่แนะนำ</h2>
        
        <div className="flex flex-col md:flex-row gap-6 my-8">
          {/* Product Card - Left Side */}
          <div className="flex-1 md:max-w-xs">
            <div className="bg-white rounded-lg shadow overflow-hidden">
              {/* Product Image Section */}
              <div className="relative">
                <div className="bg-gray-100 pt-4 pb-3 text-center">
                  {/* HOT Tag */}
                  <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-medium py-1 px-3">
                    HOT
                  </div>
                  
                  {/* iPhone Title */}
                  <h3 className="text-2xl font-medium mb-3">iPhone 14</h3>
                  
                  {/* iPhone Colors Image */}
                  <div>
                    <Image 
                      src="/images/alliphone.png" 
                      alt="iPhone 14 Colors" 
                      width={220}
                      height={100}
                      className="mx-auto"
                      priority
                    />
                  </div>
                </div>
              </div>
              
              {/* Product Info Section */}
              <div className="p-3">
                {/* Brand Label */}
                <div className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded mb-2">
                  APPLE
                </div>
                
                {/* Product Name */}
                <h4 className="text-base font-bold mb-1">[S] Apple iPhone 14</h4>
                
                {/* Product Price */}
                <div className="text-sm text-gray-700">
                  ราคาเริ่มต้นเพียง ฿25,900.00
                </div>
              </div>
            </div>
          </div>
          
          {/* Right side content placeholder */}
          <div className="flex-1">
            {/* Content could go here */}
          </div>
        </div>
        
        <div className="text-center">
          <button className="bg-white border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-colors">
            ดูเพิ่มเติม
          </button>
        </div>
      </div>
    </div>
  );
}
