import { NextResponse } from 'next/server';
import { writeFile } from 'fs/promises';
import { join } from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');

    if (!file) {
      return NextResponse.json({ error: 'No file uploaded' }, { status: 400 });
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    // Get file extension
    const originalName = file.name;
    const extension = originalName.split('.').pop();
    
    // Generate unique filename
    const fileName = `${uuidv4()}.${extension}`;
    const filePath = join(process.cwd(), 'public', 'images', 'uploads', fileName);
    
    // Save file
    await writeFile(filePath, buffer);
    
    // Return the URL to the uploaded file
    return NextResponse.json({ 
      url: `/images/uploads/${fileName}`,
      success: true 
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json({ error: 'Failed to upload file' }, { status: 500 });
  }
}
