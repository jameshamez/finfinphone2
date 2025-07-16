import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

export default function CareersPage() {
  return (
    <>
      <Navbar />
      <main className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="max-w-5xl mx-auto">
          <div className="flex items-center mb-4">
            <Link href="/" className="text-sm text-gray-500 hover:text-blue-600 mr-1">หน้าหลัก</Link>
            <span className="text-sm text-gray-500 mx-1">/</span>
            <span className="text-sm text-gray-700">หางานกับเรา</span>
          </div>
          
          <h1 className="text-2xl font-bold mb-8 text-center">ร่วมงานกับเรา</h1>

          {/* Job Categories */}
          <div className="mb-8">
            <p className="font-semibold mb-4">ตำแหน่งที่ FinFinPhone กำลังตามหา</p>
            
            <div className="border rounded-md overflow-hidden mb-2">
              <div className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium">Sales Coordinate (ประจำสำนักงานใหญ่)</p>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden mb-2">
              <div className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium">Sales (ประจำสำนักงานใหญ่/สาขา)</p>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden mb-2">
              <div className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium">เจ้าหน้าที่จัดซื้อสินค้า (ต่างสาขา)</p>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
            
            <div className="border rounded-md overflow-hidden mb-2">
              <div className="bg-white p-4 flex justify-between items-center cursor-pointer hover:bg-gray-50">
                <p className="font-medium">เจ้าหน้าที่จัดซื้อสินค้า (ทางโทรศัพท์)</p>
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                </svg>
              </div>
            </div>
          </div>

          {/* Job Application Form */}
          <div className="bg-white shadow-md rounded-lg p-6 mb-8">
            <h2 className="text-lg font-semibold mb-4">สมัครงานวันนี้</h2>
            
            {/* Job Position 1 */}
            <div className="mb-8 border-b pb-6">
              <h3 className="font-semibold text-blue-600 mb-2">ตำแหน่งงานที่สมัคร</h3>
              <div className="mb-4">
                <select className="w-full p-2 border border-gray-300 rounded mb-4">
                  <option>Sales Coordinator (สาขาทั่วประเทศ)</option>
                </select>
              </div>
              
              <h3 className="font-semibold text-blue-600 mb-2">ข้อมูลส่วนตัว</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-1">
                  <label className="block text-sm mb-1">คำนำหน้า</label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="title" className="mr-1" />
                      <span>นาย</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="title" className="mr-1" />
                      <span>นาง</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="title" className="mr-1" />
                      <span>นางสาว</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">ชื่อ</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">นามสกุล</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </div>
            </div>
            
            {/* Job Position 2 */}
            <div className="mb-8 border-b pb-6">
              <h3 className="font-semibold text-blue-600 mb-2">ตำแหน่งงานที่สมัคร</h3>
              <div className="mb-4">
                <select className="w-full p-2 border border-gray-300 rounded mb-4">
                  <option>Sales Coordinator (สาขาทั่วประเทศ)</option>
                </select>
              </div>
              
              <h3 className="font-semibold text-blue-600 mb-2">ข้อมูลส่วนตัว</h3>
              <div className="grid grid-cols-3 gap-4 mb-4">
                <div className="col-span-1">
                  <label className="block text-sm mb-1">คำนำหน้า</label>
                  <div className="flex space-x-4">
                    <label className="inline-flex items-center">
                      <input type="radio" name="title2" className="mr-1" />
                      <span>นาย</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="title2" className="mr-1" />
                      <span>นาง</span>
                    </label>
                    <label className="inline-flex items-center">
                      <input type="radio" name="title2" className="mr-1" />
                      <span>นางสาว</span>
                    </label>
                  </div>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm mb-1">ชื่อ</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
                
                <div>
                  <label className="block text-sm mb-1">นามสกุล</label>
                  <input type="text" className="w-full p-2 border border-gray-300 rounded" />
                </div>
              </div>
            </div>
            
            {/* Address */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">ที่อยู่</h3>
              <textarea className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
            </div>
            
            {/* Phone */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">เบอร์โทรศัพท์มือถือ</h3>
              <input type="tel" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            
            {/* Email */}
            <div className="mb-6">
              <h3 className="font-semibold mb-2">อีเมล</h3>
              <input type="email" className="w-full p-2 border border-gray-300 rounded" />
            </div>
            
            {/* Message */}
            <div className="mb-8">
              <h3 className="font-semibold mb-2">ที่อยู่ที่ติดต่อได้</h3>
              <textarea className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
            </div>
            
            {/* Document Upload */}
            <div className="mb-8">
              <h3 className="font-semibold text-blue-700 mb-4">เอกสารการสมัคร</h3>
              
              <div className="mb-6">
                <div className="mb-2">
                  <label className="block">ประวัติส่วนตัว (ถ้ามี) <span className="text-red-500">*</span>ไฟล์ .docx หรือ .pdf</label>
                </div>
                <div className="relative">
                  <input type="file" className="opacity-0 absolute inset-0 w-full cursor-pointer" accept=".docx,.pdf" />
                  <div className="flex">
                    <button className="bg-gray-200 px-4 py-2 border border-gray-300 rounded-l">เลือกไฟล์</button>
                    <span className="border border-gray-300 border-l-0 rounded-r bg-white px-4 py-2 flex-grow">ไม่ได้เลือกไฟล์ใด</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="mb-2">
                  <label className="block">รูปถ่าย (ถ้ามี) <span className="text-red-500">*</span>ไฟล์ .png หรือ .jpg</label>
                </div>
                <div className="relative">
                  <input type="file" className="opacity-0 absolute inset-0 w-full cursor-pointer" accept=".png,.jpg,.jpeg" />
                  <div className="flex">
                    <button className="bg-gray-200 px-4 py-2 border border-gray-300 rounded-l">เลือกไฟล์</button>
                    <span className="border border-gray-300 border-l-0 rounded-r bg-white px-4 py-2 flex-grow">ไม่ได้เลือกไฟล์ใด</span>
                  </div>
                </div>
              </div>
              
              <div className="mb-6">
                <div className="mb-2">
                  <label className="block">รายละเอียดเพิ่มเติม</label>
                </div>
                <textarea className="w-full p-2 border border-gray-300 rounded h-24"></textarea>
              </div>
            </div>
            
            {/* Terms and Conditions */}
            <div className="mb-8">
              
              <div className="text-xs text-gray-600 p-4 border border-gray-200 rounded-md bg-gray-50">
                <p>
                <input type="checkbox" id="terms-agree" className="w-4 h-4 mr-2" />
                  ข้าพเจ้าขอรับรองว่าข้อมูลที่ได้กรอกในใบสมัครนี้ เป็นข้อมูลที่ถูกต้องครบถ้วนทุกประการ หากข้าพเจ้าได้รับคัดเลือกเข้าทำงาน 
                  และภายหลังบริษัทฯตรวจพบว่าข้อมูลที่ให้ไว้เป็นเท็จ ข้าพเจ้ายินดีให้บริษัทฯเลิกจ้างโดยไม่จ่ายค่าชดเชยหรือค่าเสียหายใดๆ ทั้งสิ้น 
                  และข้าพเจ้าตกลงยินยอมให้บริษัทสามารถเปิดเผยข้อมูลของข้าพเจ้าให้กับบริษัทในเครือทุกบริษัท รวมถึงตัวแทนของบริษัท
                  เพื่อประโยชน์ในการพิจารณารับเข้าทำงาน และการจัดการภายหลังการรับเข้าทำงานแล้วตามกระบวนการและนโยบายของบริษัทฯ
                </p>
              </div>
            </div>
            
            {/* Submit Button */}
            <div className="text-center">
              <button className="bg-blue-600 text-white font-medium py-2 px-8 rounded hover:bg-blue-700 transition-colors w-full md:w-auto">
                ยืนยันสมัครงาน
              </button>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
