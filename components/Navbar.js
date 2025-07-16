"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();
  
  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  const getLinkClassName = (path) => {
    const baseClasses = "px-2 py-1 font-medium";
    return isActive(path) 
      ? `text-primary border-b-2 border-primary ${baseClasses}` 
      : `text-gray-600 hover:text-primary ${baseClasses}`;
  };

  return (
    <header className="bg-white py-3 border-b border-gray-100">
      <div className="container mx-auto flex justify-center items-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-5">
            <img src="/images/logo.png" alt="FinFin Logo" className="w-15 h-12" />
          </Link>
        </div>
        <nav className="hidden md:flex space-x-2 text-base">
          <Link href="/buy" className={getLinkClassName('/buy')}>ผ่อนสินค้า</Link>
          <Link href="/loan" className={getLinkClassName('/loan')}>ออมดาวน์</Link>
          <Link href="/promotion" className={getLinkClassName('/promotion')}>ไอโฟนแลกเงิน</Link>
          <Link href="/calculator" className={getLinkClassName('/calculator')}>สินค้าของเรา</Link>
          <Link href="/branch" className={getLinkClassName('/branch')}>เกี่ยวกับฟินฟิน</Link>
          <Link href="/contact" className={getLinkClassName('/contact')}>บทความ</Link>
          <Link href="/faq" className={getLinkClassName('/faq')}>สาขาใกล้คุณ</Link>
          <Link href="/careers" className={getLinkClassName('/careers')}>ร่วมงานกับเรา</Link>
        </nav>
        <div className="flex items-center space-x-1 ml-5">
          <button className="flex items-center">
            <img src="/images/th-flag.svg" alt="Thai" className="w-7 h-5" />
          </button>
          <button className="flex items-center ml-2">
            <img src="/images/en-flag.svg" alt="English" className="w-7 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}
