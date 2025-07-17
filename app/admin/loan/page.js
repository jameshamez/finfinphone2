'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSync } from "react-icons/fa";
import Image from 'next/image';

// EditableText component for inline text editing
const EditableText = ({ text, onChange, className = '', multiline = false }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [value, setValue] = useState(text || '');

  useEffect(() => {
    setValue(text || '');
  }, [text]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (value !== text) {
      onChange(value);
    }
  };

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (!multiline && e.key === 'Enter') {
      handleBlur();
    }
  };

  return (
    <div className="relative">
      {isEditing ? (
        multiline ? (
          <textarea
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            className={`w-full min-h-[100px] ${className}`}
            autoFocus
          />
        ) : (
          <input
            type="text"
            value={value}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className={className}
            autoFocus
          />
        )
      ) : (
        <div
          onClick={handleClick}
          className={`cursor-pointer ${className} relative group`}
        >
          <div className="group-hover:bg-blue-100 group-hover:bg-opacity-50 p-1 rounded">
            {text || <span className="text-gray-400 italic">คลิกเพื่อแก้ไข</span>}
          </div>
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-1 opacity-0 group-hover:opacity-100">
            แก้ไข
          </div>
        </div>
      )}
    </div>
  );
};

// EditableImage component for inline image URL editing and uploading
const EditableImage = ({ src, onChange, className = '', placeholder = '/images/placeholder.jpg' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [url, setUrl] = useState(src || '');
  const [isUploading, setIsUploading] = useState(false);
  const fileInputRef = React.useRef(null);

  useEffect(() => {
    setUrl(src || '');
  }, [src]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = (e) => {
    // ตรวจสอบว่าคลิกที่ปุ่มอัปโหลดหรือไม่
    const relatedTarget = e.relatedTarget;
    if (relatedTarget && (relatedTarget.id === 'upload-button' || relatedTarget.id === 'close-button')) {
      return; // ไม่ปิดหน้าต่างแก้ไขถ้าคลิกที่ปุ่มอัปโหลดหรือปุ่มปิด
    }
    
    setIsEditing(false);
    if (url !== src) {
      onChange(url);
    }
  };

  const handleChange = (e) => {
    setUrl(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  const handleFileSelect = (e) => {
    e.preventDefault(); // ป้องกันการเด้งกลับ
    e.stopPropagation(); // ป้องกันการ bubble ของ event
    fileInputRef.current.click();
  };

  const handleFileChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    // Check file type
    const validTypes = ['image/jpeg', 'image/png', 'image/gif', 'image/webp'];
    if (!validTypes.includes(file.type)) {
      alert('กรุณาอัปโหลดไฟล์รูปภาพเท่านั้น (JPEG, PNG, GIF, WEBP)');
      return;
    }

    // Check file size (max 5MB)
    if (file.size > 5 * 1024 * 1024) {
      alert('ขนาดไฟล์ต้องไม่เกิน 5MB');
      return;
    }

    setIsUploading(true);

    try {
      // สร้าง FormData สำหรับอัปโหลด
      const formData = new FormData();
      formData.append('file', file);

      // ส่งคำขออัปโหลดไปยัง API
      const response = await fetch('/api/upload-image', {
        method: 'POST',
        body: formData,
      });

      if (!response.ok) {
        throw new Error('อัปโหลดรูปภาพล้มเหลว');
      }

      // รับ URL ของรูปภาพที่อัปโหลด
      const data = await response.json();
      
      // อัปเดต URL และส่งค่ากลับไปยัง parent component
      setUrl(data.fileUrl);
      onChange(data.fileUrl);
      setIsEditing(false);
    } catch (error) {
      console.error('Error uploading image:', error);
      alert(`เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ: ${error.message}`);
    } finally {
      setIsUploading(false);
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }
  };

  return (
    <div className={`relative ${className}`}>
      <div className="relative w-full">
        <img
          src={src || placeholder}
          alt="Editable"
          className="w-full h-auto cursor-pointer"
          onClick={handleClick}
        />
        <div className="absolute top-0 right-0 bg-blue-500 text-white p-1 text-xs">
          คลิกเพื่อแก้ไข
        </div>
      </div>
      {isEditing && (
        <div className="absolute inset-0 bg-white bg-opacity-90 p-2 flex flex-col">
          <div className="flex mb-2">
            <input
              type="text"
              value={url}
              onChange={handleChange}
              onBlur={handleBlur}
              onKeyDown={handleKeyDown}
              className="border border-gray-300 p-1 flex-grow"
              placeholder="ใส่ URL รูปภาพ"
              autoFocus
            />
            <button
              id="close-button"
              type="button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white py-1 px-2 text-sm ml-1"
            >
              ปิด
            </button>
          </div>
          <div className="flex flex-col gap-2">
            <button
              id="upload-button"
              type="button"
              onClick={handleFileSelect}
              className="bg-blue-500 hover:bg-blue-600 text-white py-1 px-2 rounded text-sm"
              onMouseDown={(e) => e.stopPropagation()}
              disabled={isUploading}
            >
              {isUploading ? 'กำลังอัปโหลด...' : 'อัปโหลดรูปภาพ'}
            </button>
            <input
              type="file"
              ref={fileInputRef}
              onChange={handleFileChange}
              accept="image/*"
              className="hidden"
            />
          </div>
        </div>
      )}
    </div>
  );
};

// AdminPlaceholder component for sections that are not yet editable
const AdminPlaceholder = ({ title, className = '' }) => {
  return (
    <div className={`bg-gray-100 p-4 rounded-md text-center ${className}`}>
      <p className="text-gray-600">{title || 'ส่วนนี้ยังไม่สามารถแก้ไขได้'}</p>
    </div>
  );
};

// Main AdminLoanPage component
export default function AdminLoanPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [activeTab, setActiveTab] = useState('hero');

  // ฟังก์ชันโหลดข้อมูลใหม่
  const refreshData = async () => {
    setLoading(true);
    try {
      const response = await fetch('/api/loan');
      if (response.ok) {
        const jsonData = await response.json();
        setData(jsonData);
      } else {
        console.error('Failed to load data');
        // ถ้าไม่มีข้อมูล ให้สร้างข้อมูลเริ่มต้น
        setData({
          banner: { image: '/images/loan-banner.png' },
          hero: {
            title: 'อยากได้ไอโฟน แต่ไม่มีเงินก้อน...',
            subtitle: 'มาออมเงินดาวน์ที่ ฟินฟินได้',
            buttonText: 'สนใจออมดาวน์ โหลดเลย',
            buttonLink: '/faq'
          },
          heroBanner: {
            title: 'ผ่อนไม่ใช้บ การเลือกคนดาวน์ไม่ไหว ไม่มีเงินก้อน',
            description: 'ที่สามารถเป็นเจ้าของไอโฟนได้ด้วยการออมดาวน์กับฟินฟินดี ออมครั้งละเท่าไหร่ก็ได้ <span class="font-bold">ขั้นต่ำล่ะ 100 บาท</span> สบายๆ โอนเท่าไหร่ก็ยอดออมเท่านั้น สะสมก่อนโดนสอนให้ก็ได้ ค่อยเป็นค่อยไป ผ่อนไม่ใช้บ มีระบบรองรับ ปลอดภัยออมผ่านแอปฯ เหมาะกับคนเก็บเงินไม่อยู่ มีงบนิดหน่อยก็เริ่มได้ !',
            description2: '<span class="font-bold">ออมดาวน์</span> คือ การให้ลูกค้าออมเงินจะสมทำงวดเครื่องกับฟินฟินดี จนถึงยอดดาวน์ที่กำหนด ถึงจะได้รับเครื่อง หรือที่หลายคนเรียกว่า <span class="font-bold">ผ่อนไม่ใช้บ</span> แต่ที่ฟินฟินดียอดออมชัดเจน ไม่มีขอยกเครดิต% ออมถึงก็มาแกะกล่องที่สาขาและผ่อนต่อสบาย ๆ ได้เลย',
            subtitle: 'ออมดาวน์กับฟินฟินดี',
            features: [
              'ไม่ต้องใช้เงินก้อน',
              'ออมจ่ายขั้นต่ำล่ะ 100.-',
              'ปลอดภัย ออมผ่านแอปฯ',
              'ออมถึงยอดที่กำหนด รับเครื่องใช้เลย'
            ]
          },
          threeSteps: {
            title: 'ออมดาวน์กับฟินฟิน ดีกว่าอย่างไร',
            features: [
              { title: 'ง่าย', description: 'ออมง่ายขั้นต่ำ ครั้งละ ฿100' },
              { title: 'สะดวก', description: 'ออมได้ทุกที่ทุกเวลา' },
              { title: 'ปลอดภัย', description: 'ออมดาวน์ผ่านแอป โอนปุ๊ปเช็คยอดได้ปั๊ป' }
            ],
            stepsTitle: '3 ขั้นตอนง่าย ๆ',
            stepsSubtitle: 'ออมดาวน์กับฟินฟิน',
            stepsQuestion: 'ไม่มีเงินก้อน ก็เป็นเจ้าของไอโฟนได้ ต้องทำไง?',
            stepsImage: '/images/bannerloan.png'
          },
          infoBoxes: {
            title: 'รายละเอียดคุณสมบัติ และสิ่งที่ต้องเตรียม',
            qualifications: [
              'นักศึกษา อายุ 18 ปีขึ้นไป',
              'บุคคลธรรมดาอายุ 20-60 ปี',
              'มีบัตรประชาชนสัญชาติไทย',
              'พนักงานประจำ',
              'อาชีพอิสระ/เจ้าของกิจการ/ธุรกิจส่วนตัว'
            ],
            documents: [
              'บัตรประชาชน',
              'สลิปเงินเดือน หรือเอกสารแสดงรายได้',
              'ระเบียนนักศึกษา หรือบัตรนักศึกษา(สำหรับนักศึกษา)'
            ],
            buttonText: 'สนใจออมดาวน์ โหลดเลย',
            buttonLink: '/faq'
          },
          products: {
            title: 'ผลิตภัณฑ์แนะนำ',
            items: [
              {
                id: "A",
                brand: "APPLE",
                name: "Apple iPhone 13",
                price: "22,700.00",
                image: "/images/iphone13.jpg",
                isNew: false
              },
              {
                id: "B",
                brand: "APPLE",
                name: "Apple iPad Pro 2024 M4 11-inch Wifi",
                price: "44,100.00",
                image: "/images/ipadpro.png",
                isNew: true
              },
              {
                id: "P",
                brand: "APPLE",
                name: "Apple iPad Mini A17 Pro Wifi+Cellular",
                price: "29,300.00",
                image: "/images/ipadmini.jpg",
                isNew: false
              },
              {
                id: "V",
                brand: "APPLE",
                name: "Apple iPad Pro 2024 M4 11-inch Wifi+Cellular",
                price: "52,300.00",
                image: "/images/ipadpro.png",
                isNew: true
              }
            ],
            buttonText: 'ดูเพิ่มเติม',
            buttonLink: '/calculator'
          }
        });
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  // โหลดข้อมูลเมื่อเริ่มต้น
  useEffect(() => {
    refreshData();
  }, []);

  // ฟังก์ชันสำหรับอัปเดตข้อมูล Banner
  const updateBanner = (field, value) => {
    setData(prev => ({
      ...prev,
      banner: {
        ...prev.banner,
        [field]: value
      }
    }));
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูล Hero
  const updateHero = (field, value) => {
    setData(prev => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value
      }
    }));
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูล HeroBanner
  const updateHeroBanner = (field, value) => {
    setData(prev => ({
      ...prev,
      heroBanner: {
        ...prev.heroBanner,
        [field]: value
      }
    }));
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูลคุณสมบัติใน HeroBanner
  const updateHeroBannerFeature = (featureIndex, value) => {
    setData(prev => {
      const updatedFeatures = [...prev.heroBanner.features];
      updatedFeatures[featureIndex] = value;
      return {
        ...prev,
        heroBanner: {
          ...prev.heroBanner,
          features: updatedFeatures
        }
      };
    });
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูล ThreeSteps
  const updateThreeSteps = (field, value) => {
    setData(prev => ({
      ...prev,
      threeSteps: {
        ...prev.threeSteps,
        [field]: value
      }
    }));
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูลคุณสมบัติใน ThreeSteps
  const updateThreeStepsFeature = (featureIndex, field, value) => {
    setData(prev => {
      const updatedFeatures = [...prev.threeSteps.features];
      updatedFeatures[featureIndex] = {
        ...updatedFeatures[featureIndex],
        [field]: value
      };
      return {
        ...prev,
        threeSteps: {
          ...prev.threeSteps,
          features: updatedFeatures
        }
      };
    });
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูล InfoBoxes
  const updateInfoBoxes = (field, value) => {
    setData(prev => ({
      ...prev,
      infoBoxes: {
        ...prev.infoBoxes,
        [field]: value
      }
    }));
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูลคุณสมบัติใน InfoBoxes
  const updateInfoBoxesItem = (section, itemIndex, value) => {
    setData(prev => {
      const updatedItems = [...prev.infoBoxes[section]];
      updatedItems[itemIndex] = value;
      return {
        ...prev,
        infoBoxes: {
          ...prev.infoBoxes,
          [section]: updatedItems
        }
      };
    });
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูล Products
  const updateProducts = (field, value) => {
    setData(prev => ({
      ...prev,
      products: {
        ...prev.products,
        [field]: value
      }
    }));
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูลสินค้าใน Products
  const updateProductsItem = (itemIndex, field, value) => {
    setData(prev => {
      const updatedItems = [...prev.products.items];
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        [field]: value
      };
      return {
        ...prev,
        products: {
          ...prev.products,
          items: updatedItems
        }
      };
    });
  };

  // ฟังก์ชันบันทึกข้อมูล
  const handleSave = async () => {
    setSaving(true);
    setSaveSuccess(false);
    try {
      const response = await fetch('/api/loan', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setSaveSuccess(true);
        setTimeout(() => setSaveSuccess(false), 3000);
      } else {
        console.error('Failed to save data');
        alert('บันทึกข้อมูลไม่สำเร็จ');
      }
    } catch (error) {
      console.error('Error saving data:', error);
      alert(`เกิดข้อผิดพลาดในการบันทึกข้อมูล: ${error.message}`);
    } finally {
      setSaving(false);
    }
  };
  
  // ถ้ากำลังโหลดข้อมูล
  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">กำลังโหลดข้อมูล...</h1>
          <div className="animate-pulse flex space-x-4">
            <div className="flex-1 space-y-4 py-1">
              <div className="h-4 bg-gray-200 rounded w-3/4"></div>
              <div className="space-y-2">
                <div className="h-4 bg-gray-200 rounded"></div>
                <div className="h-4 bg-gray-200 rounded w-5/6"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ถ้าไม่มีข้อมูล
  if (!data) {
    return (
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
          <h1 className="text-2xl font-bold mb-6">ไม่พบข้อมูล</h1>
          <p>ไม่สามารถโหลดข้อมูลได้ กรุณาลองใหม่อีกครั้ง</p>
          <button 
            onClick={refreshData}
            className="mt-4 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded"
          >
            โหลดข้อมูลใหม่
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto bg-white p-8 rounded-lg shadow-md">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">จัดการหน้าออมดาวน์</h1>
          <div className="flex items-center gap-4">
            <Link href="/admin" className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-4 rounded">
              กลับหน้าแอดมิน
            </Link>
            <button
              onClick={handleSave}
              disabled={saving}
              className={`bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded flex items-center ${saving ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {saving ? 'กำลังบันทึก...' : 'บันทึกข้อมูล'}
            </button>
          </div>
        </div>

        {saveSuccess && (
          <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded mb-4">
            บันทึกข้อมูลเรียบร้อยแล้ว
          </div>
        )}

        <div className="mb-6">
          <div className="flex border-b">
            <button
              className={`py-2 px-4 ${activeTab === 'hero' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('hero')}
            >
              หน้าหลัก
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'heroBanner' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('heroBanner')}
            >
              แบนเนอร์หลัก
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'threeSteps' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('threeSteps')}
            >
              3 ขั้นตอน
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'infoBoxes' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('infoBoxes')}
            >
              คุณสมบัติ
            </button>
            <button
              className={`py-2 px-4 ${activeTab === 'products' ? 'border-b-2 border-blue-500 text-blue-500' : 'text-gray-500'}`}
              onClick={() => setActiveTab('products')}
            >
              สินค้าแนะนำ
            </button>
          </div>
        </div>
        
        {/* แสดงส่วนแก้ไขตามแท็บที่เลือก */}
        {activeTab === 'hero' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">แก้ไขหน้าหลัก</h2>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">รูปภาพแบนเนอร์</h3>
              <EditableImage 
                src={data.banner.image} 
                onChange={(value) => updateBanner('image', value)}
                className="max-w-full h-auto mb-4"
              />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">ข้อความหลัก</h3>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText 
                  text={data.hero.title} 
                  onChange={(value) => updateHero('title', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความรอง</label>
                <EditableText 
                  text={data.hero.subtitle} 
                  onChange={(value) => updateHero('subtitle', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                <EditableText 
                  text={data.hero.buttonText} 
                  onChange={(value) => updateHero('buttonText', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                <EditableText 
                  text={data.hero.buttonLink} 
                  onChange={(value) => updateHero('buttonLink', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
          </div>
        )}
        
        {activeTab === 'heroBanner' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">แก้ไขแบนเนอร์หลัก</h2>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">ข้อความหลัก</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText 
                  text={data.heroBanner.title} 
                  onChange={(value) => updateHeroBanner('title', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อรอง</label>
                <EditableText 
                  text={data.heroBanner.subtitle} 
                  onChange={(value) => updateHeroBanner('subtitle', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รายละเอียด 1</label>
                <EditableText 
                  text={data.heroBanner.description} 
                  onChange={(value) => updateHeroBanner('description', value)}
                  className="w-full p-2 border rounded"
                  multiline
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รายละเอียด 2</label>
                <EditableText 
                  text={data.heroBanner.description2} 
                  onChange={(value) => updateHeroBanner('description2', value)}
                  className="w-full p-2 border rounded"
                  multiline
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">คุณสมบัติ</h3>
              
              {data.heroBanner.features.map((feature, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">คุณสมบัติ {index + 1}</label>
                  <div className="flex gap-2">
                    <EditableText 
                      text={feature} 
                      onChange={(value) => updateHeroBannerFeature(index, value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'threeSteps' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">แก้ไข 3 ขั้นตอน</h2>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">ข้อมูลหลัก</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText 
                  text={data.threeSteps.title} 
                  onChange={(value) => updateThreeSteps('title', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อขั้นตอน</label>
                <EditableText 
                  text={data.threeSteps.stepsTitle} 
                  onChange={(value) => updateThreeSteps('stepsTitle', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อรอง</label>
                <EditableText 
                  text={data.threeSteps.stepsSubtitle} 
                  onChange={(value) => updateThreeSteps('stepsSubtitle', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">คำถาม</label>
                <EditableText 
                  text={data.threeSteps.stepsQuestion} 
                  onChange={(value) => updateThreeSteps('stepsQuestion', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพ</label>
                <EditableImage 
                  src={data.threeSteps.stepsImage} 
                  onChange={(value) => updateThreeSteps('stepsImage', value)}
                  className="max-w-md"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">คุณสมบัติ</h3>
              
              {data.threeSteps.features.map((feature, index) => (
                <div key={index} className="mb-6 p-4 border rounded-md">
                  <h4 className="font-medium mb-2">คุณสมบัติ {index + 1}</h4>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                    <EditableText 
                      text={feature.title} 
                      onChange={(value) => updateThreeStepsFeature(index, 'title', value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">รายละเอียด</label>
                    <EditableText 
                      text={feature.description} 
                      onChange={(value) => updateThreeStepsFeature(index, 'description', value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'infoBoxes' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">แก้ไขคุณสมบัติ</h2>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">ข้อมูลหลัก</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText 
                  text={data.infoBoxes.title} 
                  onChange={(value) => updateInfoBoxes('title', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                <EditableText 
                  text={data.infoBoxes.buttonText} 
                  onChange={(value) => updateInfoBoxes('buttonText', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                <EditableText 
                  text={data.infoBoxes.buttonLink} 
                  onChange={(value) => updateInfoBoxes('buttonLink', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">คุณสมบัติ</h3>
              
              {data.infoBoxes.qualifications.map((qualification, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">คุณสมบัติ {index + 1}</label>
                  <div className="flex gap-2">
                    <EditableText 
                      text={qualification} 
                      onChange={(value) => updateInfoBoxesItem('qualifications', index, value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">เอกสารที่ต้องเตรียม</h3>
              
              {data.infoBoxes.documents.map((document, index) => (
                <div key={index} className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">เอกสาร {index + 1}</label>
                  <div className="flex gap-2">
                    <EditableText 
                      text={document} 
                      onChange={(value) => updateInfoBoxesItem('documents', index, value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
        
        {activeTab === 'products' && (
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">แก้ไขสินค้าแนะนำ</h2>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">ข้อมูลหลัก</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText 
                  text={data.products.title} 
                  onChange={(value) => updateProducts('title', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                <EditableText 
                  text={data.products.buttonText} 
                  onChange={(value) => updateProducts('buttonText', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                <EditableText 
                  text={data.products.buttonLink} 
                  onChange={(value) => updateProducts('buttonLink', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
            </div>
            
            <div className="bg-gray-50 p-4 rounded-md">
              <h3 className="font-medium mb-2">สินค้า</h3>
              
              {data.products.items.map((product, index) => (
                <div key={index} className="mb-6 p-4 border rounded-md">
                  <h4 className="font-medium mb-2">สินค้า {index + 1}</h4>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">รหัสสินค้า</label>
                    <EditableText 
                      text={product.id} 
                      onChange={(value) => updateProductsItem(index, 'id', value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">แบรนด์</label>
                    <EditableText 
                      text={product.brand} 
                      onChange={(value) => updateProductsItem(index, 'brand', value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อสินค้า</label>
                    <EditableText 
                      text={product.name} 
                      onChange={(value) => updateProductsItem(index, 'name', value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">ราคา</label>
                    <EditableText 
                      text={product.price} 
                      onChange={(value) => updateProductsItem(index, 'price', value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพ</label>
                    <EditableImage 
                      src={product.image} 
                      onChange={(value) => updateProductsItem(index, 'image', value)}
                      className="max-w-xs"
                    />
                  </div>
                  
                  <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700 mb-1">สินค้าใหม่</label>
                    <div className="flex items-center">
                      <input 
                        type="checkbox" 
                        checked={product.isNew} 
                        onChange={(e) => updateProductsItem(index, 'isNew', e.target.checked)}
                        className="mr-2"
                      />
                      <span>แสดงเครื่องหมายสินค้าใหม่</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
