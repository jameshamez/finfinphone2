import React from 'react';
import Image from 'next/image';

export default function ThreeSteps() {
  return (
    <section className="py-12 bg-primary text-white mt-10">
      <div className="container mx-auto px-4">
        {/* Top section with 3 feature boxes */}
        <h2 className="text-center text-2xl font-semibold mb-8">ผ่อนไอโฟน ไอแพดกับฟินฟิน ดีกว่าอย่างไร</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-4xl mx-auto mb-10">
          {/* Feature 1 */}
          <div className="bg-blue-500 rounded-lg p-4 flex flex-col items-center text-center relative">
            <div className="relative mb-2">
              {/* ID Card icon */}
              <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M4 4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4H4ZM4 6H20V18H4V6Z" />
                  <circle cx="9" cy="10" r="2" />
                  <path d="M15 8H18V10H15V8ZM15 12H18V14H15V12ZM6 15.5C6 14.1193 7.11929 13 8.5 13H9.5C10.8807 13 12 14.1193 12 15.5V16H6V15.5Z" />
                </svg>
              </div>
              {/* Yellow checkmark badge */}
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-0.5">ง่าย !</h3>
            <p className="text-sm">ผ่อนง่ายๆ ใช้บัตรประชาชน</p>
          </div>
          
          {/* Feature 2 */}
          <div className="bg-blue-500 rounded-lg p-4 flex flex-col items-center text-center relative">
            <div className="relative mb-2">
              {/* Clock icon */}
              <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20ZM13 12H17V14H11V7H13V12Z" />
                </svg>
              </div>
              {/* Yellow checkmark badge */}
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-0.5">ไว !</h3>
            <p className="text-sm">อนุมัติ รู้ผลไว 1 วัน</p>
          </div>
          
          {/* Feature 3 */}
          <div className="bg-blue-500 rounded-lg p-4 flex flex-col items-center text-center relative">
            <div className="relative mb-2">
              {/* Shield with thumbs up icon */}
              <div className="bg-blue-400 flex items-center justify-center rounded-full w-20 h-20">
                <svg className="w-12 h-12 text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 22C9.34872 20.0457 8 18.5 8 13.5C8 9.5 12 7 12 7C12 7 16 9.5 16 13.5C16 18.5 14.6513 20.0457 12 22Z" />
                  <path d="M12 2L4 5V9C4 13.0618 5.35405 16.4176 7.57346 18.7929C8.57674 19.8796 9.69274 20.7202 10.826 21.3201C11.3127 21.6 11.7172 21.8039 12 22C12.2828 21.8039 12.6873 21.6 13.174 21.3201C14.3073 20.7202 15.4233 19.8796 16.4265 18.7929C18.646 16.4176 20 13.0618 20 9V5L12 2Z" />
                  <path d="M12.5 14.5V10.5H9.5V8.5H13.5V12.5H16.5V14.5H12.5Z" />
                </svg>
              </div>
              {/* Yellow checkmark badge */}
              <div className="absolute -bottom-1 -right-1 bg-yellow-400 rounded-full w-10 h-10 flex items-center justify-center border-2 border-blue-500">
                <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7"></path>
                </svg>
              </div>
            </div>
            <h3 className="font-bold mb-0.5">ชัวร์ !</h3>
            <p className="text-sm">ได้เครื่องชัวร์ มือ 1 ประกันศูนย์ไทย</p>
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
          <div className="rounded-[40px] overflow-hidden">
            <Image 
              src="/images/bannerbuy.png" 
              alt="3 ขั้นตอนการผ่อนไอโฟนกับฟินฟิน - 1.ทักแชทแอดมิน 2.ลงทะเบียน 3.นัดรับเครื่อง"
              width={1200}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
}
