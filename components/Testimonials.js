import React from 'react';

export default function Testimonials({ data }) {
  // Use data from props if available, otherwise use default data
  const features = data?.features || [
    {
      id: 1,
      title: 'ง่าย!',
      description: 'ไม่ใช้บัตรเครดิต ใช้แค่บัตรประชาชน\nเช็ก-จ่าย ผ่านแอปฟินฟิน',
    },
    {
      id: 2,
      title: 'ไว!',
      description: 'อนุมัติภายใน 1 วัน\nบริการรวดเร็ว',
    },
    {
      id: 3,
      title: 'ชัวร์!',
      description: 'เครื่องแท้ ประกันศูนย์ Apple 1 ปี\nมีมากกว่า 15 สาขาทั่วไทย',
    },
  ];

  return (
    <div className="bg-blue-600 py-12">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="flex items-center mb-12">
          <div className="w-1 h-8 bg-yellow-400 mr-3"></div>
          <h2 className="text-white text-2xl md:text-3xl font-bold">ทำไมต้องฟินฟิน?</h2>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="bg-white rounded-lg p-6 flex flex-col items-center text-center">
              {/* Icon */}
              <div className="w-24 h-24 relative mb-5">
                <div className="flex justify-center">
                  {feature.id === 1 ? (
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="3" y="5" width="18" height="14" rx="2"/>
                        <line x1="8" y1="10" x2="16" y2="10"/>
                        <circle cx="12" cy="14.5" r="2"/>
                      </svg>
                      <div className="absolute -right-1 -bottom-1 bg-yellow-400 rounded-full p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    </div>
                  ) : feature.id === 2 ? (
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10"/>
                        <polyline points="12 6 12 12 16 14"/>
                      </svg>
                      <div className="absolute -right-1 -bottom-1 bg-yellow-400 rounded-full p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    </div>
                  ) : (
                    <div className="relative">
                      <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"/>
                      </svg>
                      <div className="absolute -right-1 -bottom-1 bg-yellow-400 rounded-full p-1.5">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12"/>
                        </svg>
                      </div>
                    </div>
                  )}
                </div>
              </div>
              
              {/* Title */}
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              
              {/* Description */}
              <p className="text-gray-600 text-sm whitespace-pre-line">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
