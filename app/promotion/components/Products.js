import React from 'react';
import Image from 'next/image';

export default function Products() {
  // Sample product data with promotion
  const products = [
    {
      id: "A",
      brand: "APPLE",
      name: "Apple iPhone 13",
      price: "22,700.00",
      discountPrice: "18,900.00",
      discount: "17%",
      image: "/images/iphone13.jpg",
      isNew: false
    },
    {
      id: "B",
      brand: "APPLE",
      name: "Apple iPad Pro 2024 M4 11-inch Wifi",
      price: "44,100.00",
      discountPrice: "35,280.00",
      discount: "20%",
      image: "/images/ipadpro.png",
      isNew: true
    },
    {
      id: "P",
      brand: "APPLE",
      name: "Apple iPad Mini A17 Pro Wifi+Cellular",
      price: "29,300.00",
      discountPrice: "21,975.00",
      discount: "25%",
      image: "/images/ipadmini.jpg",
      isNew: false
    },
    {
      id: "V",
      brand: "APPLE",
      name: "Apple iPad Pro 2024 M4 11-inch Wifi+Cellular",
      price: "52,300.00",
      discountPrice: "26,150.00",
      discount: "50%",
      image: "/images/ipadpro.png",
      isNew: true
    }
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">สินค้าโปรโมชั่น</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-2 mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100">
              {/* Product ID Label */}
              <div className="relative p-2 flex justify-center">
                <div className="absolute top-0 left-0 w-12 h-12 flex items-center justify-center">
                </div>
                
                {/* Discount Tag */}
                <div className="absolute top-0 left-0 bg-red-600 text-white text-xs font-bold py-1 px-2 rounded-br-md">
                  <span>ลด {product.discount}</span>
                </div>
                
                {/* New Tag */}
                {product.isNew && (
                  <div className="absolute top-0 right-0 bg-yellow-400 text-primary text-xs font-bold py-0.5 px-2 rounded-bl-md">
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
                <div className="flex items-center">
                  <p className="text-gray-400 text-xs line-through">฿{product.price}</p>
                  <p className="text-red-600 text-sm font-bold ml-2">฿{product.discountPrice}</p>
                </div>
                <div className="mt-3">
                  <span className="text-xs bg-yellow-100 text-yellow-800 px-2 py-1 rounded">
                    + ของแถมมูลค่า 1,500 บาท
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* See More Button */}
        <div className="text-center mt-8">
          <a href="#" className="bg-blue-600 text-white px-6 py-2 rounded-md font-medium text-sm hover:bg-blue-700 transition-colors inline-block">
            ดูเพิ่มเติม
          </a>
        </div>
      </div>
    </section>
  );
}
