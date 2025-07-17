import { NextResponse } from 'next/server';
import { writeFile, mkdir } from 'fs/promises';
import fs from 'fs';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

export async function POST(request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file');
    
    if (!file) {
      return NextResponse.json(
        { error: 'No file uploaded' },
        { status: 400 }
      );
    }
    
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    
    // Get file extension
    const originalName = file.name;
    const extension = path.extname(originalName);
    
    // Create a unique filename
    const fileName = `${uuidv4()}${extension}`;
    const uploadDir = path.join(process.cwd(), 'public', 'uploads');
    
    // Create uploads directory if it doesn't exist
    if (!fs.existsSync(uploadDir)) {
      await mkdir(uploadDir, { recursive: true });
      console.log('Created uploads directory:', uploadDir);
    }
    
    const filePath = path.join(uploadDir, fileName);
    console.log('Saving file to:', filePath);
    
    // Save the file
    await writeFile(filePath, buffer);
    console.log('File saved successfully');
    
    // Return the URL to the uploaded file
    const fileUrl = `/uploads/${fileName}`;
    
    return NextResponse.json({ 
      success: true, 
      fileUrl 
    });
  } catch (error) {
    console.error('Error uploading file:', error);
    return NextResponse.json(
      { error: 'Failed to upload file' },
      { status: 500 }
    );
  }
}
