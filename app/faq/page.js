import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-2xl font-bold text-center mb-8">สนใจลงทะเบียน</h1>
        
        {/* Registration options */}
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
            <label className="border border-gray-300 rounded-md py-3 px-4 flex items-center cursor-pointer hover:bg-gray-50">
              <input type="radio" name="inquiry-type" className="mr-2" />
              <span className="font-bold text-center w-full">ผ่อนสินค้าราคาถูก</span>
            </label>
            
            <label className="border border-gray-300 rounded-md py-3 px-4 flex items-center cursor-pointer hover:bg-gray-50">
              <input type="radio" name="inquiry-type" className="mr-2" />
              <span className="font-bold text-center w-full">เทิร์นเครื่องใหม่รับเครื่องเก่า</span>
            </label>
            
            <label className="border border-gray-300 rounded-md py-3 px-4 flex items-center cursor-pointer hover:bg-gray-50">
              <input type="radio" name="inquiry-type" className="mr-2" />
              <span className="font-bold text-center w-full">แลกเงิน</span>
            </label>
            
            <label className="border border-gray-300 rounded-md py-3 px-4 flex items-center cursor-pointer hover:bg-gray-50">
              <input type="radio" name="inquiry-type" className="mr-2" />
              <span className="font-bold text-center w-full">ขายสินค้าให้ราคาสูง</span>
            </label>
          </div>
          
          {/* Form fields */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div>
              <label className="block text-sm mb-1">
                คำนำหน้าชื่อ <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 border border-gray-300 rounded">
                <option>เลือกคำนำหน้าชื่อ</option>
                <option>นาย</option>
                <option>นาง</option>
                <option>นางสาว</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm mb-1">
                ชื่อ (ภาษาไทย) <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="กรอกชื่อของคุณ" />
            </div>
            
            <div>
              <label className="block text-sm mb-1">
                นามสกุล (ภาษาไทย) <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="กรอกนามสกุล" />
            </div>
            
            <div>
              <label className="block text-sm mb-1">
                เบอร์โทรศัพท์ <span className="text-red-500">*</span>
              </label>
              <input type="tel" className="w-full p-2 border border-gray-300 rounded" placeholder="กรอกเบอร์โทรศัพท์" />
            </div>
            
            <div>
              <label className="block text-sm mb-1">
                รหัสไปรษณีย์ที่อยู่ปัจจุบัน
              </label>
              <input type="text" className="w-full p-2 border border-gray-300 rounded" placeholder="กรอกรหัสไปรษณีย์" maxLength="5" />
            </div>
          </div>
          
          {/* Submit button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white font-medium py-2 px-8 rounded hover:bg-blue-700 transition-colors w-full">
              ยืนยัน
            </button>
          </div>
        </div>
        
        {/* Contact information */}
        <div className="max-w-md mx-auto mt-12 border border-gray-200 rounded-lg p-6">
          <h2 className="text-center font-bold mb-4">ติดต่อสอบถาม คลิกที่นี่</h2>
          
          <div className="flex justify-center space-x-4 mb-4">
            <Link href="#" className="w-10 h-10 flex items-center justify-center bg-blue-600 rounded-full">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
            
            <Link href="#" className="w-10 h-10 flex items-center justify-center bg-green-500 rounded-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </Link>
            
            <Link href="#" className="w-10 h-10 flex items-center justify-center bg-blue-500 rounded-full">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </Link>
          </div>
          
          <p className="text-center text-sm">เบอร์โทรศัพท์: 064-616-9699</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
