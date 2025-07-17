"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminPage() {
  const [resources, setResources] = useState([
    { name: "homepage", label: "หน้าแรก" },
    { name: "buy", label: "หน้าซื้อสินค้า" },
    { name: "careers", label: "ตำแหน่งงาน" },
    { name: "products", label: "สินค้า iPhone" },
    { name: "faq", label: "คำถามที่พบบ่อย" }
  ]);

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">FinFin CMS</h1>
            <Link href="/" className="text-white hover:text-blue-200">
              กลับไปหน้าเว็บไซต์
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">ยินดีต้อนรับสู่ระบบจัดการเนื้อหาเว็บไซต์ FinFin</h2>
          <p className="text-gray-600 mb-4">
            ระบบนี้ช่วยให้คุณสามารถแก้ไขเนื้อหาต่างๆ บนเว็บไซต์ได้โดยไม่ต้องแก้ไขโค้ดโดยตรง
            เลือกหมวดหมู่ที่ต้องการแก้ไขจากรายการด้านล่าง
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource) => (
            <Link 
              key={resource.name} 
              href={`/admin/${resource.name}`}
              className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg font-semibold mb-2">{resource.label}</h3>
              <p className="text-gray-600 mb-4">
                แก้ไขข้อมูลเกี่ยวกับ{resource.label}
              </p>
              <div className="flex justify-end">
                <span className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                  แก้ไข
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
