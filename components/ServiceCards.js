import React from 'react';
import Image from 'next/image';

export default function ServiceCards({ services }) {
  // ใช้ข้อมูลจาก props ถ้ามี หรือใช้ข้อมูลเริ่มต้นถ้าไม่มี
  const defaultServices = [
    {
      id: 1,
      title: "ผ่อนไอโฟน ไอแพด",
      color: "bg-yellow-400",
      textColor: "text-black",
      image: "/images/alliphone.png",
      features: [
        "ผ่อนง่าย ไม่ต้องมีบัตรเครดิตใช้แค่บัตรประชาชน",
        "อนุมัติไวภายใน 1 วัน",
        "มั่นใจได้ เครื่องแท้ มีถึง 13 สาขาทั่วไทย"
      ]
    },
    {
      id: 2,
      title: "ออมดาวน์",
      color: "bg-green-500",
      textColor: "text-white",
      image: "/images/piggy.png",
      features: [
        "ไม่ต้องใช้เงินก้อน",
        "ออมงวดละเท่าไหร่ก็ได้",
        "ลดภาระต่อเดือนได้ มีเงินใช้สบายๆ"
      ]
    },
    {
      id: 3,
      title: "ไอโฟนแลกเงิน",
      color: "bg-blue-700",
      textColor: "text-white",
      image: "/images/money1.png",
      features: [
        "ได้เงินไว วงเงินสูงสุด ภายใน 1 วัน",
        "ได้เครื่องกลับไปใช้ไม่ต้องมีคนค้ำ",
        "ไม่ใช่จำนำ"
      ]
    }
  ];
  
  // ใช้ข้อมูลจาก props ถ้ามี หรือใช้ข้อมูลเริ่มต้นถ้าไม่มี
  const serviceData = services || defaultServices;
  return (
    <div className="py-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {serviceData.map((service) => (
            <div key={service.id} className={`${service.color} rounded-xl p-6 ${service.textColor} shadow-lg`}>
              <h3 className="font-bold text-xl mb-3">{service.title}</h3>
              <ul className="space-y-2 mb-4">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <div className={`${service.textColor === 'text-black' ? 'bg-black' : 'bg-white'} rounded-full mr-2 h-5 w-5 flex items-center justify-center`}>
                      <svg xmlns="http://www.w3.org/2000/svg" className={`h-3 w-3 ${service.color.replace('bg-', 'text-')}`} viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <div className="relative pb-8 mt-2">
                <div className="flex justify-center mb-6">
                  <img src={service.image} alt={service.title} className="w-[300px] drop-shadow-lg" style={{ marginBottom: service.id === 1 ? '-90px' : '0px' }} />
                </div>
                <div className="flex justify-center relative z-10">
                  <button className="bg-white text-gray-800 font-medium py-2 px-6 rounded-full shadow hover:shadow-md transition-shadow">
                    รายละเอียด
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
