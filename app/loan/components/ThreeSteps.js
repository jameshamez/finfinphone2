import React from 'react';
import Image from 'next/image';

export default function ThreeSteps() {
  return (
    <section className="py-12 bg-primary text-white mt-10">
      <div className="container mx-auto px-4">
        {/* Top section with 3 feature boxes */}
        <h2 className="text-center text-2xl font-semibold mb-8">ออมดาวน์กับฟินฟิน ดีกว่าอย่างไร</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {/* Feature 1 */}
          <div className="bg-blue-500 rounded-lg p-4 flex flex-col items-center text-center relative">
            <div className="relative mb-2">
              {/* Piggy Bank icon */}
              <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15.5 12.5C15.5 13.33 14.83 14 14 14C13.17 14 12.5 13.33 12.5 12.5C12.5 11.67 13.17 11 14 11C14.83 11 15.5 11.67 15.5 12.5Z" />
                  <path d="M8 9H4.5C4.5 6.5 6.5 5.5 8 5.5M19.5 9V12.5C19.5 13.5 19.4 15 17 16.5H7C4.5 15 4.5 13.5 4.5 12.5V9H8M19.5 9C19.5 5.5 17.5 2 13.5 2C9.5 2 9.5 5 9.5 5.5C9.5 6.5 9.5 8 11.5 9H19.5ZM4.5 18L4.5 18.5C4.5 19.6046 5.39543 20.5 6.5 20.5H17.5C18.6046 20.5 19.5 19.6046 19.5 18.5V18C17.5 19.5 14.5 20 12 20C9.5 20 6.5 19.5 4.5 18Z" />
                  <path d="M8.5 7C8.5 7.27614 8.27614 7.5 8 7.5C7.72386 7.5 7.5 7.27614 7.5 7C7.5 6.72386 7.72386 6.5 8 6.5C8.27614 6.5 8.5 6.72386 8.5 7Z" />
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
            <p className="text-sm">ออมง่ายขั้นต่ำ ครั้งละ ฿100</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-blue-500 rounded-lg p-4 flex flex-col items-center text-center relative">
            <div className="relative mb-2">
              {/* Wrench/Tool icon */}
              <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.7823 15.5602L5.14212 6.91998C6.05364 5.90948 7.35492 5.28542 8.80082 5.28542C11.3895 5.28542 13.4876 7.38353 13.4876 9.97222C13.4876 11.4181 12.8635 12.7194 11.853 13.6309L15.0769 16.8548L13.7823 15.5602ZM4.08266 15.0183L15.0687 4.03182C14.2236 3.67811 13.2904 3.48542 12.3153 3.48542C8.37446 3.48542 5.18543 6.67445 5.18543 10.6153C5.18543 12.1756 5.68879 13.6232 6.56693 14.7909L3.44974 17.9081C3.05921 18.2986 3.05921 18.9318 3.44974 19.3223L4.67736 20.5499C5.06788 20.9404 5.70104 20.9404 6.09157 20.5499L9.20875 17.4327C10.3764 18.3109 11.824 18.8142 13.3843 18.8142C14.3594 18.8142 15.2926 18.6215 16.1377 18.2678L5.15162 7.28129L4.08266 15.0183ZM16.7518 8.71883L21.2647 4.20597C21.6552 3.81544 21.6552 3.18229 21.2647 2.79176L20.037 1.56414C19.6465 1.17361 19.0134 1.17361 18.6228 1.56414L14.11 6.07699L16.7518 8.71883Z" />
                </svg>
              </div>
              {/* Yellow checkmark badge */}
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-0.5">ยืดหยุ่น</h3>
            <p className="text-sm">กำหนดการออมได้เอง<br/>ใช้เงินคล่องตัวมากขึ้น</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-blue-500 rounded-lg p-4 flex flex-col items-center text-center relative">
            <div className="relative mb-2">
              {/* Phone with Shield icon */}
              <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M15 2H9C7.89543 2 7 2.89543 7 4V20C7 21.1046 7.89543 22 9 22H15C16.1046 22 17 21.1046 17 20V4C17 2.89543 16.1046 2 15 2Z" />
                  <path d="M12 17C11.4477 17 11 17.4477 11 18C11 18.5523 11.4477 19 12 19C12.5523 19 13 18.5523 13 18C13 17.4477 12.5523 17 12 17Z" />
                  <path d="M12 5C12.5523 5 13 5.44772 13 6V6.01C13 6.56228 12.5523 7.01 12 7.01C11.4477 7.01 11 6.56228 11 6.01V6C11 5.44772 11.4477 5 12 5Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
              {/* Yellow checkmark badge */}
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-0.5">ปลอดภัย</h3>
            <p className="text-sm">ออมดาวน์ผ่านแอป โอนปุ๊ป<br/>เช็คยอดได้ปั๊ป</p>
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
                    ออมดาวน์กับฟินฟิน
                  </span>
                </div>
              </div>
            </div>
            
            {/* Question text */}
            <p className="text-xl sm:text-2xl">
              ไม่มีเงินก้อน ก็เป็นเจ้าของไอโฟนได้ ต้องทำไง?
            </p>
          </div>
        </div>

        <div className="mx-auto px-4 my-8">
          {/* Three steps as an image */}
          <div className="max-w-3xl mx-auto rounded-[30px] overflow-hidden">
            <Image 
              src="/images/bannerloan.png" 
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
