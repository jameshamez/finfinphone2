import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

export async function POST(request) {
  try {
    const data = await request.json();
    
    // บันทึกข้อมูลลงในไฟล์ JSON
    const filePath = path.join(process.cwd(), 'data', 'homepage.json');
    await fs.writeFile(filePath, JSON.stringify(data, null, 2), 'utf8');
    
    return NextResponse.json({ success: true, message: 'Data saved successfully' });
  } catch (error) {
    console.error('Error saving homepage data:', error);
    return NextResponse.json(
      { success: false, message: error.message || 'Failed to save data' },
      { status: 500 }
    );
  }
}
