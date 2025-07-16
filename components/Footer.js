import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-primary text-white py-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-6">
          <div>
            <div className="flex items-center mb-4">
              <Image src="/images/logo.png" alt="FinFin" width={150} height={150} />
            </div>
            <p className="text-sm text-blue-200 mb-2">ชีวิตง่ายดีมีเพื่อนรู้ใจ</p>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-3">เมนู</h3>
            <ul className="space-y-2 text-sm text-blue-200">
              <li><Link href="/buy" className="hover:text-white">ผ่อนสินค้า</Link></li>
              <li><Link href="/loan" className="hover:text-white">ออมดาวน์</Link></li>
              <li><Link href="/promotion" className="hover:text-white">ไอโฟนแลกเงิน</Link></li>
              <li><Link href="/calculator" className="hover:text-white">สินค้าของเรา</Link></li>
              <li><Link href="/branch" className="hover:text-white">เกี่ยวกับฟินฟิน</Link></li>
              <li><Link href="/contact" className="hover:text-white">บทความ</Link></li>
              <li><Link href="/faq" className="hover:text-white">สาขาใกล้คุณ</Link></li>
              <li><Link href="/about" className="hover:text-white">ร่วมงานกับเรา</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-3">ติดต่อเรา</h3>
            <ul className="space-y-3">
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 320 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/>
                  </svg>
                </div>
                <a href="https://facebook.com/finfinphone" className="text-white">finfinphone</a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M272.1 204.2v71.1c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.1 0-2.1-.6-2.6-1.3l-32.6-44v42.2c0 1.8-1.4 3.2-3.2 3.2h-11.4c-1.8 0-3.2-1.4-3.2-3.2v-71.1c0-1.8 1.4-3.2 3.2-3.2H219c1 0 2.1.5 2.6 1.4l32.6 44v-42.2c0-1.8 1.4-3.2 3.2-3.2h11.4c1.8-.1 3.3 1.4 3.3 3.1zm-82-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 1.8 1.4 3.2 3.2 3.2h11.4c1.8 0 3.2-1.4 3.2-3.2v-71.1c0-1.7-1.4-3.2-3.2-3.2zm-27.5 59.6h-31.1v-56.4c0-1.8-1.4-3.2-3.2-3.2h-11.4c-1.8 0-3.2 1.4-3.2 3.2v71.1c0 .9.3 1.6.9 2.2.6.5 1.3.9 2.2.9h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.7-1.4-3.2-3.1-3.2zM332.1 201h-45.7c-1.7 0-3.2 1.4-3.2 3.2v71.1c0 1.7 1.4 3.2 3.2 3.2h45.7c1.8 0 3.2-1.4 3.2-3.2v-11.4c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2V234c0-1.8-1.4-3.2-3.2-3.2H301v-12h31.1c1.8 0 3.2-1.4 3.2-3.2v-11.4c-.1-1.7-1.5-3.2-3.2-3.2zM448 113.7V399c-.1 44.8-36.8 81.1-81.7 81H81c-44.8-.1-81.1-36.9-81-81.7V113c.1-44.8 36.9-81.1 81.7-81H367c44.8.1 81.1 36.8 81 81.7zm-61.6 122.6c0-73-73.2-132.4-163.1-132.4-89.9 0-163.1 59.4-163.1 132.4 0 65.4 58 120.2 136.4 130.6 19.1 4.1 16.9 11.1 12.6 36.8-.7 4.1-3.3 16.1 14.1 8.8 17.4-7.3 93.9-55.3 128.2-94.7 23.6-26 34.9-52.3 34.9-81.5z"/>
                  </svg>
                </div>
                <a href="https://line.me/@finfinphone" className="text-white">@finfinphone</a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 448 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M448,209.91a210.06,210.06,0,0,1-122.77-39.25V349.38A162.55,162.55,0,1,1,185,188.31V278.2a74.62,74.62,0,1,0,52.23,71.18V0l88,0a121.18,121.18,0,0,0,1.86,22.17h0A122.18,122.18,0,0,0,381,102.39a121.43,121.43,0,0,0,67,20.14Z"/>
                  </svg>
                </div>
                <a href="https://tiktok.com/@finfinphone" className="text-white">@finfinphone</a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 576 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z"/>
                  </svg>
                </div>
                <a href="https://youtube.com/@finfinphone" className="text-white">@finfinphone</a>
              </li>
              <li className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full border-2 border-white flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
                    <path fill="currentColor" d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"/>
                  </svg>
                </div>
                <a href="tel:064-616-9699" className="text-white">064-616-9699</a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="font-medium text-lg mb-3">แอปฟินฟิน โหลดเลย</h3>
            <p className="text-sm text-blue-200 mb-3">ดาวน์โหลดได้แล้วที่:</p>
            <div className="flex space-x-2">
              <Link href="#" className="inline-block">
                <Image src="/images/app-store.png" alt="App Store" width={120} height={40} />
              </Link>
            </div>
            {/* <div className="mt-4">
              <h4 className="text-sm font-medium mb-2">บริการแจ้งเตือน</h4>
              <Image src="/images/line-notify.png" alt="Line Notify" width={100} height={30} />
            </div> */}
          </div>
        </div>
        
        <div className="border-t border-blue-400 border-opacity-30 pt-4 flex flex-col md:flex-row justify-center items-center">
          <p className="text-xs text-blue-200">Copyright 2025 © FinFin. สงวนลิขสิทธิ์ ห้ามทำซ้ำหรือเผยแพร่โดยไม่ได้รับอนุญาต</p>
        </div>
      </div>
      
      {/* Chat button */}
      <div className="fixed bottom-6 right-6 z-50">
        <button className="bg-blue-500 hover:bg-blue-600 text-white rounded-full w-14 h-14 flex items-center justify-center shadow-lg">
          <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" d="M18 10c0 3.866-3.582 7-8 7a8.841 8.841 0 01-4.083-.98L2 17l1.338-3.123C2.493 12.767 2 11.434 2 10c0-3.866 3.582-7 8-7s8 3.134 8 7zM7 9H5v2h2V9zm8 0h-2v2h2V9zM9 9h2v2H9V9z" clipRule="evenodd"></path>
          </svg>
        </button>
      </div>
    </footer>
  );
}
