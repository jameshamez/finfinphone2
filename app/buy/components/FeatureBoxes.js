import React from 'react';
import Image from 'next/image';

export default function FeatureBoxes() {
  return (
    <section className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-2xl font-bold text-gray-800 mb-8">มั่นใจได้ โอกาสอนุมัติสูงเริ่มต้นวันนี้</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Box 1 */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Image 
                src="/images/icons/chat-icon.png" 
                alt="Chat Support"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">24/7</h3>
            <p className="text-sm text-gray-600">ติดต่อเราได้ตลอด 24 ชั่วโมง เรายินดีให้คำปรึกษาคุณ</p>
          </div>
          
          {/* Box 2 */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Image 
                src="/images/icons/phone-icon.png" 
                alt="Call Support"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">0% นาน 10 เดือน</h3>
            <p className="text-sm text-gray-600">ดอกเบี้ยเริ่มต้น 0% สูงสุด 10 เดือน สบายใจไปกับเรา</p>
          </div>
          
          {/* Box 3 */}
          <div className="bg-blue-50 rounded-lg p-6 flex flex-col items-center text-center shadow-sm hover:shadow-md transition-shadow">
            <div className="bg-blue-100 p-3 rounded-full mb-4">
              <Image 
                src="/images/icons/star-icon.png" 
                alt="Quality Service"
                width={40}
                height={40}
              />
            </div>
            <h3 className="text-lg font-semibold mb-2">100%</h3>
            <p className="text-sm text-gray-600">มั่นใจกับคุณภาพการบริการ ที่เราตั้งใจดูแลคุณ</p>
          </div>
        </div>
      </div>
    </section>
  );
}
