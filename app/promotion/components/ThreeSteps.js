import React from 'react';
import Image from 'next/image';

export default function ThreeSteps() {
  return (
    <section className="py-12 bg-primary text-white mt-10">
      <div className="container mx-auto px-4">
        {/* Top section with 3 feature boxes */}
        <h2 className="text-center text-2xl font-semibold mb-8">ไอโฟนแลกเงิน กับฟินฟินดีกว่าอย่างไร</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {/* Feature 1 */}
          <div className="bg-blue-500 rounded-lg p-4 flex flex-col items-center text-center relative">
            <div className="relative mb-2">
              {/* iPhone icon */}
              <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 3C17.3284 3 18 3.67157 18 4.5V19.5C18 20.3284 17.3284 21 16.5 21H7.5C6.67157 21 6 20.3284 6 19.5V4.5C6 3.67157 6.67157 3 7.5 3H16.5ZM16.5 5H7.5C7.77614 5 8 5.22386 8 5.5V17.5C8 17.7761 7.77614 18 7.5 18H16.5C16.2239 18 16 17.7761 16 17.5V5.5C16 5.22386 16.2239 5 16.5 5ZM13 19C13 19.5523 12.5523 20 12 20C11.4477 20 11 19.5523 11 19C11 18.4477 11.4477 18 12 18C12.5523 18 13 18.4477 13 19Z" />
                </svg>
              </div>
              {/* Yellow checkmark badge */}
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-0.5">ง่าย</h3>
            <p className="text-sm">แค่เป็นเจ้าของไอโฟน ไม่ต้องมีคนค้ำ</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-blue-500 rounded-lg p-4 flex flex-col items-center text-center relative">
            <div className="relative mb-2">
              {/* Document icon */}
              <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 22H5C3.89543 22 3 21.1046 3 20V4C3 2.89543 3.89543 2 5 2H19C20.1046 2 21 2.89543 21 4V20C21 21.1046 20.1046 22 19 22ZM5 4V20H19V4H5ZM11 7H13V9H11V7ZM11 11H13V17H11V11Z" />
                </svg>
              </div>
              {/* Yellow checkmark badge */}
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-0.5">ทันใจ</h3>
            <p className="text-sm">ได้เงินไว อนุมัติภายใน 1 วัน</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-blue-500 rounded-lg p-4 flex flex-col items-center text-center relative">
            <div className="relative mb-2">
              {/* Phone with hand icon */}
              <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18 2H6C4.89543 2 4 2.89543 4 4V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V4C20 2.89543 19.1046 2 18 2ZM6 4H18V20H6V4ZM13 17C13 17.5523 12.5523 18 12 18C11.4477 18 11 17.5523 11 17C11 16.4477 11.4477 16 12 16C12.5523 16 13 16.4477 13 17Z" />
                  <path d="M6.5 11.5C7.32843 11.5 8 10.8284 8 10C8 9.17157 7.32843 8.5 6.5 8.5C5.67157 8.5 5 9.17157 5 10C5 10.8284 5.67157 11.5 6.5 11.5Z" />
                  <path d="M10.9497 9.87564C11.3403 9.48511 11.3403 8.85195 10.9497 8.46142L6.32316 3.83487C5.93263 3.44434 5.29947 3.44434 4.90894 3.83487L2.08241 6.66139C1.69189 7.05192 1.69189 7.68508 2.08241 8.07561L6.70896 12.7022C7.09948 13.0927 7.73265 13.0927 8.12317 12.7022L10.9497 9.87564Z" />
                </svg>
              </div>
              {/* Yellow checkmark badge */}
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-0.5">ได้คืน</h3>
            <p className="text-sm">ยังมีเครื่องใช้ ไม่ใช่จำนำ</p>
          </div>
        </div>
        
        {/* Main 3 steps header section - exactly matching the image */}
        <div className="bg-primary text-white py-12">
          <div className="max-w-5xl mx-auto text-center">
            <div className="relative inline-block">
              {/* Large "3" with styling */}
              <div className="inline-block">
                <span className="text-yellow-400 text-[200px] font-bold leading-none relative z-0" style={{textShadow: '4px 4px 0 #2563EB'}}>
                  3
                </span>
              </div>

              {/* White heading text to the right */}
              <div className="inline-block align-top mt-8 ml-4 relative z-10 text-left">
                <h2 className="text-white text-4xl sm:text-5xl font-bold leading-tight whitespace-nowrap">
                  ขั้นตอนง่าย ๆ
                </h2>
                <div className="bg-yellow-400 rounded-lg py-2 mt-2 inline-block">
                  <span className="text-primary font-bold text-xl">
                    ผ่อนไอโฟนกับฟินฟิน
                  </span>
                </div>
              </div>
            </div>
            
            {/* Question text */}
            <p className="text-xl sm:text-2xl">
              อยากผ่อนไอโฟนง่าย ๆ ไม่ยุ่งยาก ต้องทำไง ?
            </p>
          </div>
        </div>
  <div className="mx-auto px-4 my-8">
          {/* Three steps as an image */}
          <div className="max-w-3xl mx-auto rounded-[30px] overflow-hidden">
            <Image 
              src="/images/bannerbuy.png" 
              alt="3 ขั้นตอนการผ่อนไอโฟนกับฟินฟิน - 1.ทักแชทแอดมิน 2.ลงทะเบียน 3.นัดรับเครื่อง"
              width={500}
              height={150}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
