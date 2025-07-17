import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET() {
  try {
    // กำหนดเส้นทางไฟล์ JSON
    const filePath = path.join(process.cwd(), 'data', 'homepage.json');
    
    // ตรวจสอบว่าโฟลเดอร์ data มีอยู่หรือไม่
    const dataDir = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dataDir)) {
      fs.mkdirSync(dataDir, { recursive: true });
    }
    
    // ตรวจสอบว่าไฟล์ JSON มีอยู่หรือไม่
    if (!fs.existsSync(filePath)) {
      // สร้างข้อมูลตัวอย่าง
      const sampleData = {
        hero: {
          title: "ผ่อนไอโฟนที่ ฟินฟิน",
          subtitle: "ง่าย ไว ชัวร์!",
          description: "บริการผ่อนสินค้าไอทีชั้นนำ ดอกเบี้ยต่ำ อนุมัติไว",
          image: "/images/banner1.png"
        },
        features: [
          {
            id: 1,
            icon: "shopping-cart",
            title: "เลือกสินค้า",
            description: "เลือกสินค้าที่ต้องการผ่อน"
          },
          {
            id: 2,
            icon: "document",
            title: "กรอกข้อมูล",
            description: "กรอกข้อมูลส่วนตัวและเอกสาร"
          },
          {
            id: 3,
            icon: "check",
            title: "รออนุมัติ",
            description: "รออนุมัติไม่เกิน 30 นาที"
          }
        ],
        services: [
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
        ]
      };
      
      // เขียนข้อมูลลงในไฟล์
      fs.writeFileSync(filePath, JSON.stringify(sampleData, null, 2), 'utf8');
      
      return NextResponse.json(sampleData);
    }
    
    // อ่านข้อมูลจากไฟล์
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(fileContent);
    
    return NextResponse.json(jsonData);
  } catch (error) {
    console.error('Error reading homepage data:', error);
    return NextResponse.json(
      { error: 'Failed to read homepage data' },
      { status: 500 }
    );
  }
}
