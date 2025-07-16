import React from 'react';

export default function ServiceFeatures() {
  return (
    <div className="bg-blue-600 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-xl font-semibold text-white text-center mb-8">ที่มาของบริการ</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
          {/* Feature 1 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20ZM16.59 7.58L10 14.17L7.41 11.59L6 13L10 17L18 9L16.59 7.58Z" />
              </svg>
            </div>
            <p className="text-white text-sm">One App<br />รวมทุกบริการในแอพเดียว</p>
          </div>
          
          {/* Feature 2 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M2 20H22V16H2V20ZM4 17H6V19H4V17ZM2 4V8H22V4H2ZM6 7H4V5H6V7ZM2 14H22V10H2V14ZM4 11H6V13H4V11Z" />
              </svg>
            </div>
            <p className="text-white text-sm">Flexibility<br />สมัครง่าย อนุมัติไว</p>
          </div>
          
          {/* Feature 3 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.8 10.9C9.53 10.31 8.8 9.7 8.8 8.75C8.8 7.66 9.81 6.9 11.5 6.9C13.28 6.9 13.94 7.75 14 9H16.21C16.14 7.28 15.09 5.7 13 5.19V3H10V5.16C8.06 5.58 6.5 6.84 6.5 8.77C6.5 11.08 8.41 12.23 11.2 12.9C13.7 13.5 14.2 14.38 14.2 15.31C14.2 16 13.71 17.1 11.5 17.1C9.44 17.1 8.63 16.18 8.52 15H6.32C6.44 17.19 8.08 18.42 10 18.83V21H13V18.85C14.95 18.48 16.5 17.35 16.5 15.3C16.5 12.46 14.07 11.5 11.8 10.9Z" />
              </svg>
            </div>
            <p className="text-white text-sm">Interest<br />ผลิตภัณฑ์หลากหลาย</p>
          </div>
          
          {/* Feature 4 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" />
              </svg>
            </div>
            <p className="text-white text-sm">Warranty<br />ดูแลตลอดการใช้งาน</p>
          </div>
        </div>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mt-8">
          {/* Feature 5 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M22 9.24L14.81 8.62L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27L18.18 21L16.55 13.97L22 9.24ZM12 15.4L8.24 17.67L9.24 13.39L5.92 10.51L10.3 10.13L12 6.1L13.71 10.14L18.09 10.52L14.77 13.4L15.77 17.68L12 15.4Z" />
              </svg>
            </div>
            <p className="text-white text-sm">Unlimited<br />พร้อมสนับสนุนทุกการเริ่มต้น</p>
          </div>
          
          {/* Feature 6 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18,16.08C17.24,16.08 16.56,16.38 16.04,16.85L8.91,12.7C8.96,12.47 9,12.24 9,12C9,11.76 8.96,11.53 8.91,11.3L15.96,7.19C16.5,7.69 17.21,8 18,8A3,3 0 0,0 21,5A3,3 0 0,0 18,2A3,3 0 0,0 15,5C15,5.24 15.04,5.47 15.09,5.7L8.04,9.81C7.5,9.31 6.79,9 6,9A3,3 0 0,0 3,12A3,3 0 0,0 6,15C6.79,15 7.5,14.69 8.04,14.19L15.16,18.34C15.11,18.55 15.08,18.77 15.08,19C15.08,20.61 16.39,21.91 18,21.91C19.61,21.91 20.92,20.61 20.92,19A2.92,2.92 0 0,0 18,16.08Z" />
              </svg>
            </div>
            <p className="text-white text-sm">Yourself<br />ดูแลตัวเองได้ง่ายๆ ด้วย App</p>
          </div>
          
          {/* Feature 7 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12,2A10,10 0 0,0 2,12A10,10 0 0,0 12,22A10,10 0 0,0 22,12A10,10 0 0,0 12,2M12,4A8,8 0 0,1 20,12A8,8 0 0,1 12,20A8,8 0 0,1 4,12A8,8 0 0,1 12,4M7,10L12,15L17,10H7Z" />
              </svg>
            </div>
            <p className="text-white text-sm">Speed<br />รวดเร็ว ทันใจ</p>
          </div>
          
          {/* Feature 8 */}
          <div className="flex flex-col items-center text-center">
            <div className="bg-white rounded-full p-3 mb-3">
              <svg className="w-8 h-8 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 1L3 5V11C3 16.55 6.84 21.74 12 23C17.16 21.74 21 16.55 21 11V5L12 1ZM12 11.99H19C18.47 16.11 15.72 19.78 12 20.93V12H5V6.3L12 3.19V11.99Z" />
              </svg>
            </div>
            <p className="text-white text-sm">Care<br />ใส่ใจทุกรายละเอียด</p>
          </div>
        </div>
      </div>
    </div>
  );
}
