"use client";

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };
  
  const isActive = (path) => {
    return pathname === path || pathname.startsWith(path + '/');
  };

  const getLinkClassName = (path) => {
    const baseClasses = "px-1 lg:px-2 py-1 font-medium text-sm lg:text-base whitespace-nowrap";
    return isActive(path) 
      ? `text-primary border-b-2 border-primary ${baseClasses}` 
      : `text-gray-600 hover:text-primary ${baseClasses}`;
  };
  
  const getMobileLinkClassName = (path) => {
    const baseClasses = "block w-full py-3 px-4 text-left";
    return isActive(path)
      ? `bg-blue-50 text-primary font-medium ${baseClasses}`
      : `text-gray-700 hover:bg-gray-50 ${baseClasses}`;
  };

  return (
    <header className="bg-white py-3 border-b border-gray-100 relative">
      <div className="container mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8 md:justify-center">
        <div className="flex items-center">
          <Link href="/" className="flex items-center mr-5">
            <img src="/images/logo.png" alt="FinFin Logo" className="w-15 h-12" />
          </Link>
        </div>
        
        {/* Desktop Navigation */}
        <nav className="hidden md:flex md:space-x-1 lg:space-x-3 xl:space-x-4 text-base overflow-x-auto">
          <Link href="/buy" className={getLinkClassName('/buy')}>ผ่อนสินค้า</Link>
          <Link href="/loan" className={getLinkClassName('/loan')}>ออมดาวน์</Link>
          <Link href="/promotion" className={getLinkClassName('/promotion')}>ไอโฟนแลกเงิน</Link>
          <Link href="/calculator" className={getLinkClassName('/calculator')}>สินค้าของเรา</Link>
          <Link href="/branch" className={getLinkClassName('/branch')}>เกี่ยวกับฟินฟิน</Link>
          <Link href="/contact" className={getLinkClassName('/contact')}>บทความ</Link>
          <Link href="/faq" className={getLinkClassName('/faq')}>สาขาใกล้คุณ</Link>
          <Link href="/careers" className={getLinkClassName('/careers')}>ร่วมงานกับเรา</Link>
        </nav>
        
        {/* Language Selector */}
        <div className="hidden md:flex items-center space-x-1 ml-3 lg:ml-5">
          <button className="flex items-center">
            <img src="/images/th-flag.svg" alt="Thai" className="w-7 h-5" />
          </button>
          <button className="flex items-center ml-2">
            <img src="/images/en-flag.svg" alt="English" className="w-7 h-5" />
          </button>
        </div>
        
        {/* Mobile Menu Button */}
        <button 
          className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors focus:outline-none focus:ring-2 focus:ring-primary focus:ring-opacity-50"
          onClick={toggleMobileMenu}
          aria-expanded={mobileMenuOpen}
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>
      
      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg z-50 border-t border-gray-100 max-h-[80vh] overflow-y-auto">
          <nav className="flex flex-col py-2">
            <Link href="/buy" className={getMobileLinkClassName('/buy')} onClick={toggleMobileMenu}>ผ่อนสินค้า</Link>
            <Link href="/loan" className={getMobileLinkClassName('/loan')} onClick={toggleMobileMenu}>ออมดาวน์</Link>
            <Link href="/promotion" className={getMobileLinkClassName('/promotion')} onClick={toggleMobileMenu}>ไอโฟนแลกเงิน</Link>
            <Link href="/calculator" className={getMobileLinkClassName('/calculator')} onClick={toggleMobileMenu}>สินค้าของเรา</Link>
            <Link href="/branch" className={getMobileLinkClassName('/branch')} onClick={toggleMobileMenu}>เกี่ยวกับฟินฟิน</Link>
            <Link href="/contact" className={getMobileLinkClassName('/contact')} onClick={toggleMobileMenu}>บทความ</Link>
            <Link href="/faq" className={getMobileLinkClassName('/faq')} onClick={toggleMobileMenu}>สาขาใกล้คุณ</Link>
            <Link href="/careers" className={getMobileLinkClassName('/careers')} onClick={toggleMobileMenu}>ร่วมงานกับเรา</Link>
          </nav>
          
          <div className="flex items-center justify-center space-x-4 py-4 border-t border-gray-100">
            <button className="flex items-center">
              <img src="/images/th-flag.svg" alt="Thai" className="w-7 h-5" />
            </button>
            <button className="flex items-center">
              <img src="/images/en-flag.svg" alt="English" className="w-7 h-5" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
