import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function FAQPage() {
  return (
    <>
      <Navbar />
      <main className="w-full overflow-x-hidden container mx-auto px-4 sm:px-6 md:px-10 lg:px-8 py-6 sm:py-8 md:py-12 lg:py-14">
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-center mb-6 sm:mb-8 md:mb-10">สนใจลงทะเบียน</h1>
        
        {/* Registration options */}
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 md:gap-6 mb-6 sm:mb-8 md:mb-10">
            <label className="border border-gray-300 rounded-md py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 flex items-center cursor-pointer hover:bg-gray-50 transition-colors hover:border-blue-400">
              <input type="radio" name="inquiry-type" className="mr-2 md:mr-3 md:scale-125 accent-blue-600" />
              <span className="font-bold text-center w-full text-sm sm:text-base md:text-lg">ผ่อนสินค้าราคาถูก</span>
            </label>
            
            <label className="border border-gray-300 rounded-md py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 flex items-center cursor-pointer hover:bg-gray-50 transition-colors hover:border-blue-400">
              <input type="radio" name="inquiry-type" className="mr-2 md:mr-3 md:scale-125 accent-blue-600" />
              <span className="font-bold text-center w-full text-sm sm:text-base md:text-lg">เทิร์นเครื่องใหม่รับเครื่องเก่า</span>
            </label>
            
            <label className="border border-gray-300 rounded-md py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 flex items-center cursor-pointer hover:bg-gray-50 transition-colors hover:border-blue-400">
              <input type="radio" name="inquiry-type" className="mr-2 md:mr-3 md:scale-125 accent-blue-600" />
              <span className="font-bold text-center w-full text-sm sm:text-base md:text-lg">แลกเงิน</span>
            </label>
            
            <label className="border border-gray-300 rounded-md py-2 sm:py-3 md:py-4 px-3 sm:px-4 md:px-5 flex items-center cursor-pointer hover:bg-gray-50 transition-colors hover:border-blue-400">
              <input type="radio" name="inquiry-type" className="mr-2 md:mr-3 md:scale-125 accent-blue-600" />
              <span className="font-bold text-center w-full text-sm sm:text-base md:text-lg">ขายสินค้าให้ราคาสูง</span>
            </label>
          </div>
          
          {/* Form fields */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-6 mb-6 md:mb-8">
            <div>
              <label className="block text-sm md:text-base mb-1 md:mb-2">
                คำนำหน้าชื่อ <span className="text-red-500">*</span>
              </label>
              <select className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base appearance-none bg-white bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2020%2020%22%3E%3Cpath%20d%3D%22M5.293%207.293a1%201%200%20011.414%200L10%2010.586l3.293-3.293a1%201%200%20111.414%201.414l-4%204a1%201%200%2001-1.414%200l-4-4a1%201%200%20010-1.414z%22%20fill%3D%22%236b7280%22%2F%3E%3C%2Fsvg%3E')] bg-no-repeat bg-[length:1.25em_1.25em] bg-[right_0.5rem_center] pr-10">
                <option>เลือกคำนำหน้าชื่อ</option>
                <option>นาย</option>
                <option>นาง</option>
                <option>นางสาว</option>
              </select>
            </div>
            
            <div>
              <label className="block text-sm md:text-base mb-1 md:mb-2">
                ชื่อ (ภาษาไทย) <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base" placeholder="กรอกชื่อของคุณ" />
            </div>
            
            <div>
              <label className="block text-sm md:text-base mb-1 md:mb-2">
                นามสกุล (ภาษาไทย) <span className="text-red-500">*</span>
              </label>
              <input type="text" className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base" placeholder="กรอกนามสกุล" />
            </div>
            
            <div>
              <label className="block text-sm md:text-base mb-1 md:mb-2">
                เบอร์โทรศัพท์ <span className="text-red-500">*</span>
              </label>
              <input type="tel" className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base" placeholder="กรอกเบอร์โทรศัพท์" />
            </div>
            
            <div>
              <label className="block text-sm md:text-base mb-1 md:mb-2">
                รหัสไปรษณีย์ที่อยู่ปัจจุบัน
              </label>
              <input type="text" className="w-full p-2 md:p-3 border border-gray-300 rounded md:rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all text-sm md:text-base" placeholder="กรอกรหัสไปรษณีย์" maxLength="5" />
            </div>
          </div>
          
          {/* Submit button */}
          <div className="text-center">
            <button className="bg-blue-600 text-white font-medium py-2 md:py-3 px-8 md:px-10 rounded md:rounded-lg hover:bg-blue-700 transition-colors w-full sm:w-auto sm:min-w-[200px] md:min-w-[240px] text-sm md:text-lg shadow-md hover:shadow-lg">
              ยืนยัน
            </button>
          </div>
        </div>
        
        {/* Contact information */}
        <div className="max-w-md mx-auto mt-8 sm:mt-12 md:mt-16 border border-gray-200 rounded-lg md:rounded-xl p-4 sm:p-6 md:p-8 shadow-sm md:shadow-md">
          <h2 className="text-center font-bold mb-4 md:mb-6 text-base md:text-xl">ติดต่อสอบถาม คลิกที่นี่</h2>
          
          <div className="flex justify-center space-x-4 md:space-x-6 mb-4 md:mb-6">
            <Link href="#" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-600 rounded-full hover:bg-blue-700 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
              </svg>
            </Link>
            
            <Link href="#" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-green-500 rounded-full hover:bg-green-600 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"></path>
              </svg>
            </Link>
            
            <Link href="#" className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center bg-blue-500 rounded-full hover:bg-blue-600 transition-colors">
              <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path>
              </svg>
            </Link>
          </div>
          
          <p className="text-center text-sm md:text-base">เบอร์โทรศัพท์: 064-616-9699</p>
        </div>
      </main>
      <Footer />
    </>
  );
}
