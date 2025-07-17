import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// GET handler - อ่านข้อมูลจากไฟล์ loan.json
export async function GET() {
  try {
    const filePath = path.join(process.cwd(), 'data', 'loan.json');
    
    // ตรวจสอบว่าไฟล์มีอยู่หรือไม่
    if (!fs.existsSync(filePath)) {
      return NextResponse.json({ error: 'File not found' }, { status: 404 });
    }
    
    // อ่านข้อมูลจากไฟล์
    const data = fs.readFileSync(filePath, 'utf8');
    const jsonData = JSON.parse(data);
    
    return NextResponse.json(jsonData);
  } catch (error) {
    console.error('Error reading loan.json:', error);
    return NextResponse.json({ error: 'Failed to read data' }, { status: 500 });
  }
}

// POST handler - บันทึกข้อมูลลงในไฟล์ loan.json
export async function POST(request) {
  try {
    const data = await request.json();
    const filePath = path.join(process.cwd(), 'data', 'loan.json');
    
    // สร้างโฟลเดอร์ data ถ้ายังไม่มี
    const dirPath = path.join(process.cwd(), 'data');
    if (!fs.existsSync(dirPath)) {
      fs.mkdirSync(dirPath, { recursive: true });
    }
    
    // บันทึกข้อมูลลงในไฟล์
    fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
    
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error writing to loan.json:', error);
    return NextResponse.json({ error: 'Failed to save data' }, { status: 500 });
  }
}
