import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function ProductShowcase({ data }) {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center font-bold text-2xl mb-2">{data?.title || 'ผลิตภัณฑ์ที่แนะนำ'}</h2>
        <p className="text-center text-gray-600 mb-8">{data?.subtitle || 'เลือกซื้อสินค้าคุณภาพดีได้ที่นี่'}</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
          {/* Product Cards */}
          {data?.products ? (
            data.products.map((product) => (
              <div key={product.id} className="flex-1">
                <Link href={product.link || "/faq"} className="block cursor-pointer hover:opacity-90 transition-opacity">
                  <div className="bg-white rounded-lg shadow overflow-hidden">
                    {/* Product Image Section */}
                    <div className="relative">
                      <div className="bg-gray-100 pt-4 pb-3 text-center">
                        {/* HOT Tag */}
                        <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-medium py-1 px-3">
                          HOT
                        </div>
                        
                        {/* Product Title */}
                        <h3 className="text-2xl font-medium mb-3">{product.name}</h3>
                        
                        {/* Product Image */}
                        <div>
                          <Image 
                            src={product.image} 
                            alt={product.name} 
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
                      <h4 className="text-base font-bold mb-1">[S] {product.name}</h4>
                      
                      {/* Product Price */}
                      <div className="text-sm text-gray-700">
                        ราคาเริ่มต้นเพียง ฿{product.price}
                      </div>
                    </div>
                  </div>
                </Link>
              </div>
            ))
          ) : (
            // Fallback if no data
            <div className="flex-1 md:max-w-xs">
              <Link href="/faq" className="block cursor-pointer hover:opacity-90 transition-opacity">
                <div className="bg-white rounded-lg shadow overflow-hidden">
                  <div className="relative">
                    <div className="bg-gray-100 pt-4 pb-3 text-center">
                      <div className="absolute top-0 left-0 bg-gray-800 text-white text-xs font-medium py-1 px-3">
                        HOT
                      </div>
                      <h3 className="text-2xl font-medium mb-3">iPhone 14</h3>
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
                  <div className="p-3">
                    <div className="inline-block bg-gray-100 text-gray-800 text-xs font-medium px-2 py-1 rounded mb-2">
                      APPLE
                    </div>
                    <h4 className="text-base font-bold mb-1">[S] Apple iPhone 14</h4>
                    <div className="text-sm text-gray-700">
                      ราคาเริ่มต้นเพียง ฿25,900.00
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
        
        <div className="text-center">
          <Link href={data?.buttonLink || "/calculator"}>
            <button className="bg-white border border-primary text-primary px-6 py-2 rounded hover:bg-primary hover:text-white transition-colors">
              {data?.buttonText || 'ดูเพิ่มเติม'}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
