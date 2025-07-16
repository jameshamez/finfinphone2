import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Products() {
  // Sample product data
  const products = [
    {
      id: "A",
      brand: "APPLE",
      name: "Apple iPhone 13",
      price: "22,700.00",
      image: "/images/iphone13.jpg",
      isNew: false
    },
    {
      id: "B",
      brand: "APPLE",
      name: "Apple iPad Pro 2024 M4 11-inch Wifi",
      price: "44,100.00",
      image: "/images/ipadpro.png",
      isNew: true
    },
    {
      id: "P",
      brand: "APPLE",
      name: "Apple iPad Mini A17 Pro Wifi+Cellular",
      price: "29,300.00",
      image: "/images/ipadmini.jpg",
      isNew: false
    },
    {
      id: "V",
      brand: "APPLE",
      name: "Apple iPad Pro 2024 M4 11-inch Wifi+Cellular",
      price: "52,300.00",
      image: "/images/ipadpro.png",
      isNew: true
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">ผลิตภัณฑ์แนะนำ</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-2 mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <Link href="/faq" key={product.id} className="block cursor-pointer hover:opacity-95 transition-opacity">
              <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
                {/* Product ID Label */}
                <div className="relative p-2 flex justify-center">
                  <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center">
                  </div>
                  
                  {/* New Tag */}
                  {product.isNew && (
                    <div className="absolute top-0 left-12 bg-red-500 text-white text-xs font-bold py-0.5 px-2 rounded-sm transform -translate-y-1">
                      <span>ใหม่</span>
                    </div>
                  )}
                  
                  {/* Product Image */}
                  <div className="h-40 w-full flex items-center justify-center py-3">
                    <Image 
                      src={product.image}
                      alt={product.name}
                      width={250}
                      height={120}
                      objectFit="contain"
                    />
                  </div>
                </div>
                
                {/* Brand Badge */}
                <div className="px-4 py-1 bg-gray-50">
                  <span className="text-xs font-semibold text-gray-600">{product.brand}</span>
                </div>
                
                {/* Product Info */}
                <div className="p-4">
                  <h3 className="text-sm font-medium mb-2 text-gray-800 h-10 line-clamp-2">{product.name}</h3>
                  <p className="text-gray-700 text-xs">ราคาเริ่มต้นเพียง ฿{product.price}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="text-center mt-8">
          <Link href="/calculator" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition-colors inline-block">
            ดูเพิ่มเติม
          </Link>
        </div>
      </div>
    </section>
  );
}
