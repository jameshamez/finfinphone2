import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

// ฟังก์ชันสำหรับอ่านไฟล์ JSON
const readJsonFile = (resource) => {
  const filePath = path.join(process.cwd(), 'data', `${resource}.json`);
  
  if (!fs.existsSync(filePath)) {
    return null;
  }
  
  const fileContent = fs.readFileSync(filePath, 'utf8');
  return JSON.parse(fileContent);
};

// ฟังก์ชันสำหรับเขียนไฟล์ JSON
const writeJsonFile = (resource, data) => {
  const filePath = path.join(process.cwd(), 'data', `${resource}.json`);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// GET handler - อ่านข้อมูลจากไฟล์ JSON
export async function GET(request, { params }) {
  const { resource } = params;
  const data = readJsonFile(resource);
  
  if (!data) {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
  }
  
  return NextResponse.json(data);
}

// PUT handler - อัปเดตข้อมูลในไฟล์ JSON
export async function PUT(request, { params }) {
  const { resource } = params;
  
  // ตรวจสอบว่าไฟล์มีอยู่หรือไม่
  const existingData = readJsonFile(resource);
  if (!existingData) {
    return NextResponse.json({ error: 'Resource not found' }, { status: 404 });
  }
  
  try {
    const newData = await request.json();
    writeJsonFile(resource, newData);
    return NextResponse.json({ success: true, message: 'Data updated successfully' });
  } catch (error) {
    return NextResponse.json({ error: 'Invalid JSON data' }, { status: 400 });
  }
}
