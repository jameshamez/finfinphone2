import React from 'react';

export default function LoanForm() {
  return (
    <div className="form-container mx-auto max-w-4xl bg-white p-6 rounded-lg shadow-sm -mt-20 relative z-10">
      <h2 className="text-center font-medium text-xl mb-6 text-blue-600">สนใจลงทะเบียนกับ<span className="text-blue-500 font-bold">ฟินฟิน</span></h2>
      
      <form>
        <div className="mb-6">
          <h3 className="text-gray-700 mb-3">คุณต้องการ</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-md p-4 flex items-center">
              <input 
                type="radio" 
                id="option1" 
                name="loanType" 
                className="form-radio h-4 w-4 text-blue-600 mr-2" 
                defaultChecked 
              />
              <label htmlFor="option1" className="text-gray-700">ผ่อนสินค้าราคาถูก</label>
            </div>
            <div className="border rounded-md p-4 flex items-center">
              <input 
                type="radio" 
                id="option2" 
                name="loanType" 
                className="form-radio h-4 w-4 text-blue-600 mr-2" 
              />
              <label htmlFor="option2" className="text-gray-700">เทิร์นเครื่องเก่ารับเครื่องใหม่</label>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-md p-4 flex items-center">
              <input 
                type="radio" 
                id="option3" 
                name="loanType" 
                className="form-radio h-4 w-4 text-blue-600 mr-2" 
              />
              <label htmlFor="option3" className="text-gray-700">แลกเงิน</label>
            </div>
            <div className="border rounded-md p-4 flex items-center">
              <input 
                type="radio" 
                id="option4" 
                name="loanType" 
                className="form-radio h-4 w-4 text-blue-600 mr-2" 
              />
              <label htmlFor="option4" className="text-gray-700">ขายสินค้าให้ราคาสูง</label>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-gray-700 mb-3">ข้อมูลส่วนบุคคล</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex gap-2 mb-3">
                <select className="border rounded-md p-3 w-24">
                  <option>นาย</option>
                  <option>นาง</option>
                  <option>นางสาว</option>
                </select>
                <input type="text" placeholder="ชื่อจริง" className="border rounded-md p-3 flex-1" />
              </div>
            </div>
            <div>
              <input type="text" placeholder="นามสกุล" className="border rounded-md p-3 w-full" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input type="tel" placeholder="เบอร์มือถือ" className="border rounded-md p-3 w-full" />
            </div>
            <div>
              <input type="email" placeholder="กรอกรหัสไปรษณีย์ที่อยู่ปัจจุบัน" className="border rounded-md p-3 w-full" />
            </div>
          </div>
        </div>
        
        <button type="submit" className="bg-blue-600 text-white w-full py-3 rounded-md font-medium">ยืนยันข้อมูล</button>
        
        <div className="text-center text-sm mt-4 text-gray-500">
          <p>การกดยืนยันข้อมูล ถือว่าคุณอ่านและรับทราบ <a href="#" className="text-blue-600 underline">นโยบายคุ้มครองข้อมูลส่วนบุคคล</a> เรียบร้อยแล้ว</p>
        </div>
      </form>
      
      <hr className="my-6 border-gray-200" />
      
      <form>
        <div className="mb-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div className="border rounded-md p-4 flex items-center">
              <input 
                type="radio" 
                id="option5" 
                name="contactType" 
                className="form-radio h-4 w-4 text-blue-600 mr-2" 
              />
              <label htmlFor="option5" className="text-gray-700">แลกเงิน</label>
            </div>
            <div className="border rounded-md p-4 flex items-center">
              <input 
                type="radio" 
                id="option6" 
                name="contactType" 
                className="form-radio h-4 w-4 text-blue-600 mr-2" 
              />
              <label htmlFor="option6" className="text-gray-700">ขายสินค้าให้ราคาสูง</label>
            </div>
          </div>
        </div>
        
        <div className="mb-6">
          <h3 className="text-gray-700 mb-3">ข้อมูลส่วนบุคคล</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <div className="flex gap-2 mb-3">
                <select className="border rounded-md p-3 w-24">
                  <option>นาย</option>
                  <option>นาง</option>
                  <option>นางสาว</option>
                </select>
                <input type="text" placeholder="ชื่อจริง" className="border rounded-md p-3 flex-1" />
              </div>
            </div>
            <div>
              <input type="text" placeholder="นามสกุล" className="border rounded-md p-3 w-full" />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
            <div>
              <input type="tel" placeholder="เบอร์มือถือ" className="border rounded-md p-3 w-full" />
            </div>
            <div>
              <input type="email" placeholder="กรอกรหัสไปรษณีย์ที่อยู่ปัจจุบัน" className="border rounded-md p-3 w-full" />
            </div>
          </div>
        </div>
        
        <button type="submit" className="bg-blue-600 text-white w-full py-3 rounded-md font-medium">ยืนยันข้อมูล</button>
        
        <div className="text-center text-sm mt-4 text-gray-500">
          <p>การกดยืนยันข้อมูล ถือว่าคุณอ่านและรับทราบ <a href="#" className="text-blue-600 underline">นโยบายคุ้มครองข้อมูลส่วนบุคคล</a> เรียบร้อยแล้ว</p>
        </div>
      </form>
    </div>
  );
}
