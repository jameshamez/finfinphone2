import React from 'react';

export default function ServiceFeatures() {
  return (
    <div className="bg-blue-600 py-6">
      <div className="container mx-auto px-4">
        <h2 className="text-lg font-semibold text-white text-center mb-3">ค่านิยมขององค์กร</h2>
        <p className="text-white text-center text-xs mb-4">มุ่งมั่นที่จะพัฒนาคุณภาพชีวิตลูกค้าให้ดียิ่งขึ้น</p>
        
        <div className="grid grid-cols-2 gap-3 max-w-3xl mx-auto">
          {/* Feature 1 - Unique */}
          <div className="bg-blue-500 rounded-lg p-3 shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-300 text-base">Unique</h3>
            </div>
            <p className="text-white text-xs">สนับสนุนความพิเศษของแต่ละคน</p>
          </div>
          
          {/* Feature 2 - Flexibility */}
          <div className="bg-blue-500 rounded-lg p-3 shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 11.01L3 11v2h18zM3 16h12v2H3zM21 6H3v2.01L21 8z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-300 text-base">Flexibility</h3>
            </div>
            <p className="text-white text-xs">พร้อมรับความเปลี่ยนแปลง</p>
          </div>
          
          {/* Feature 3 - Result Oriented */}
          <div className="bg-blue-500 rounded-lg p-3 shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 3H5C3.9 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V5C21 3.9 20.1 3 19 3M9 17H7V10H9V17M13 17H11V7H13V17M17 17H15V13H17V17Z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-300 text-base">Result Oriented</h3>
            </div>
            <p className="text-white text-xs">ผลสำเร็จเป็นเลิศ</p>
          </div>
          
          {/* Feature 4 - Innovative */}
          <div className="bg-blue-500 rounded-lg p-3 shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 3c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm10-18c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm-2 18c-1.1 0-2-.9-2-2s.9-2 2-2 2 .9 2 2-.9 2-2 2zm-6-12c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2zm8 0c0 1.1-.9 2-2 2s-2-.9-2-2 .9-2 2-2 2 .9 2 2z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-300 text-base">Innovative</h3>
            </div>
            <p className="text-white text-xs">มีความรู้เรื่องปรับปรุงเปลี่ยนแปลงใหม่</p>
          </div>
          
          {/* Feature 5 - Energetic & Ethic */}
          <div className="bg-blue-500 rounded-lg p-3 shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12,3C10.73,3 9.6,3.8 9.18,5H3V7H9.18C9.6,8.2 10.73,9 12,9C13.27,9 14.4,8.2 14.82,7H21V5H14.82C14.4,3.8 13.27,3 12,3M12,7A1,1 0 0,1 11,6A1,1 0 0,1 12,5A1,1 0 0,1 13,6A1,1 0 0,1 12,7M12,15C10.73,15 9.6,15.8 9.18,17H3V19H9.18C9.6,20.2 10.73,21 12,21C13.27,21 14.4,20.2 14.82,19H21V17H14.82C14.4,15.8 13.27,15 12,15M12,19A1,1 0 0,1 11,18A1,1 0 0,1 12,17A1,1 0 0,1 13,18A1,1 0 0,1 12,19M7,13H17V11H7" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-300 text-base">Energetic & Ethic</h3>
            </div>
            <p className="text-white text-xs">กระตือรือร้นและมีคุณธรรม</p>
          </div>
          
          {/* Feature 6 - Now */}
          <div className="bg-blue-500 rounded-lg p-3 shadow-md">
            <div className="flex items-center mb-2">
              <div className="bg-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.5 2 2 6.5 2 12S6.5 22 12 22 22 17.5 22 12 17.5 2 12 2M12 20C7.59 20 4 16.41 4 12S7.59 4 12 4 20 7.59 20 12 16.41 20 12 20M12.5 7.75V13L17 15.25L16.25 16.5L11 13.75V7.75H12.5Z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-300 text-base">Now</h3>
            </div>
            <p className="text-white text-xs">ลงมือทำทันที</p>
          </div>
          
          {/* Feature 7 - Develop Yourself - Centered using col-span-2 and mx-auto */}
          <div className="bg-blue-500 rounded-lg p-3 shadow-md col-span-2 mx-auto w-[calc(50%-0.375rem)]">
            <div className="flex items-center mb-2">
              <div className="bg-white rounded-full p-2 mr-2">
                <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-blue-600" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2A10 10 0 0 0 2 12A10 10 0 0 0 12 22A10 10 0 0 0 22 12A10 10 0 0 0 12 2M12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20M17 13.5V12H9.5V10.5H17V9L20 11.25L17 13.5M7 10.5V12H14.5V13.5H7V15L4 12.75L7 10.5z" />
                </svg>
              </div>
              <h3 className="font-bold text-yellow-300 text-base">Develop Yourself</h3>
            </div>
            <p className="text-white text-xs">พัฒนาตัวเองอย่างต่อเนื่อง</p>
          </div>
        </div>
      </div>
    </div>
  );
}
