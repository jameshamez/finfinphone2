'use client';

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaSync } from "react-icons/fa";
import Image from 'next/image';

// EditableText component for inline text editing
const EditableText = ({ value, onChange, className }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value);

  useEffect(() => {
    setText(value);
  }, [value]);

  const handleBlur = () => {
    setIsEditing(false);
    if (text !== value) {
      onChange(text);
    }
  };

  return isEditing ? (
    <input
      type="text"
      value={text}
      onChange={(e) => setText(e.target.value)}
      onBlur={handleBlur}
      onKeyDown={(e) => e.key === 'Enter' && handleBlur()}
      className={`p-2 border border-gray-300 rounded-md ${className}`}
      autoFocus
    />
  ) : (
    <div
      onClick={() => setIsEditing(true)}
      className={`p-2 border border-transparent hover:border-gray-300 rounded-md cursor-pointer ${className}`}
    >
      {value || <span className="text-gray-400">คลิกเพื่อแก้ไข</span>}
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
      // Reset file input
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
              onMouseDown={(e) => e.stopPropagation()} // ป้องกันการเด้งกลับเมื่อกดเมาส์
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
    <div className={`p-4 border-2 border-dashed border-gray-300 text-center ${className}`}>
      <p className="text-gray-500">{title || 'ส่วนนี้ยังไม่สามารถแก้ไขได้'}</p>
    </div>
  );
};

// Main AdminBuyPage component
export default function AdminBuyPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [saveSuccess, setSaveSuccess] = useState(false);
  const [saveError, setSaveError] = useState(false);

  // ฟังก์ชันโหลดข้อมูลใหม่
  const refreshData = async () => {
    setLoading(true);
    setSaveSuccess(false);
    setSaveError(false);
    
    try {
      const response = await fetch('/api/buy');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const jsonData = await response.json();
      setData(jsonData);
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('เกิดข้อผิดพลาดในการโหลดข้อมูล');
    } finally {
      setLoading(false);
    }
  };

  // โหลดข้อมูลเมื่อคอมโพเนนต์ถูกโหลด
  useEffect(() => {
    refreshData();
  }, []);
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูล Hero
  const updateHero = (field, value) => {
    setData(prev => {
      if (!prev.hero) {
        prev.hero = {};
      }
      return {
        ...prev,
        hero: {
          ...prev.hero,
          [field]: value
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูล HeroBanner
  const updateHeroBanner = (field, value) => {
    setData(prev => {
      if (!prev.heroBanner) {
        prev.heroBanner = {};
      }
      return {
        ...prev,
        heroBanner: {
          ...prev.heroBanner,
          [field]: value
        }
      };
    });
  };

  // ฟังก์ชันสำหรับอัปเดตข้อมูลคุณสมบัติใน HeroBanner
  const updateHeroBannerFeature = (featureIndex, value) => {
    setData(prev => {
      if (!prev.heroBanner) {
        prev.heroBanner = {};
      }
      
      const updatedFeatures = [...(prev.heroBanner.rightFeatures || [])];
      updatedFeatures[featureIndex] = value;
      
      return {
        ...prev,
        heroBanner: {
          ...prev.heroBanner,
          rightFeatures: updatedFeatures
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูล ThreeSteps
  const updateThreeSteps = (field, value) => {
    setData(prev => {
      if (!prev.threeSteps) {
        prev.threeSteps = {};
      }
      return {
        ...prev,
        threeSteps: {
          ...prev.threeSteps,
          [field]: value
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูลคุณสมบัติใน ThreeSteps
  const updateThreeStepsFeature = (featureIndex, field, value) => {
    setData(prev => {
      if (!prev.threeSteps) {
        prev.threeSteps = {};
      }
      
      const updatedFeatures = [...(prev.threeSteps.features || [])];
      if (!updatedFeatures[featureIndex]) {
        updatedFeatures[featureIndex] = { id: featureIndex + 1 };
      }
      
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
    setData(prev => {
      if (!prev.infoBoxes) {
        prev.infoBoxes = {};
      }
      return {
        ...prev,
        infoBoxes: {
          ...prev.infoBoxes,
          [field]: value
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูลคุณสมบัติใน InfoBoxes
  const updateInfoBoxesItem = (section, itemIndex, value) => {
    setData(prev => {
      if (!prev.infoBoxes) {
        prev.infoBoxes = {};
      }
      
      if (!prev.infoBoxes[section]) {
        prev.infoBoxes[section] = { items: [] };
      }
      
      const updatedItems = [...(prev.infoBoxes[section].items || [])];
      updatedItems[itemIndex] = value;
      
      return {
        ...prev,
        infoBoxes: {
          ...prev.infoBoxes,
          [section]: {
            ...prev.infoBoxes[section],
            items: updatedItems
          }
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูล Products
  const updateProducts = (field, value) => {
    setData(prev => {
      if (!prev.products) {
        prev.products = {};
      }
      return {
        ...prev,
        products: {
          ...prev.products,
          [field]: value
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตบทความใน Products
  const updateProductsArticle = (articleIndex, field, value) => {
    setData(prev => {
      if (!prev.products) {
        prev.products = {};
      }
      
      const updatedArticles = [...(prev.products.articles || [])];
      if (!updatedArticles[articleIndex]) {
        updatedArticles[articleIndex] = { id: articleIndex + 1 };
      }
      
      updatedArticles[articleIndex] = {
        ...updatedArticles[articleIndex],
        [field]: value
      };
      
      return {
        ...prev,
        products: {
          ...prev.products,
          articles: updatedArticles
        }
      };
    });
  };
  
  // ฟังก์ชันบันทึกข้อมูล
  const handleSave = async () => {
    setSaving(true);
    setSaveSuccess(false);
    setSaveError(false);
    
    try {
      const response = await fetch('/api/buy', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      
      setSaveSuccess(true);
      setTimeout(() => setSaveSuccess(false), 3000);
    } catch (error) {
      console.error('Error saving data:', error);
      setSaveError(true);
      setTimeout(() => setSaveError(false), 3000);
    } finally {
      setSaving(false);
    }
  };
  
  // UI ส่วนแสดงผล
  return (
    <div className="min-h-screen bg-gray-100">
      {/* เฮดเดอร์ */}
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">FinFin CMS - จัดการหน้าซื้อสินค้า</h1>
            <div className="flex space-x-4">
              <Link href="/admin" className="text-white hover:text-blue-200">
                กลับไปหน้าแดชบอร์ด
              </Link>
              <Link href="/buy" className="text-white hover:text-blue-200">
                ดูหน้าเว็บไซต์
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {/* ปุ่มบันทึกและรีเฟรช */}
        <div className="flex justify-between mb-6">
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              disabled={loading || saving}
              className={`bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md flex items-center ${(loading || saving) ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              {saving ? 'กำลังบันทึก...' : 'บันทึกการเปลี่ยนแปลง'}
            </button>
            <button
              onClick={refreshData}
              disabled={loading}
              className={`bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md flex items-center ${loading ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
              <FaSync className={`mr-2 ${loading ? 'animate-spin' : ''}`} />
              โหลดข้อมูลใหม่
            </button>
          </div>
          
          <div className="flex items-center">
            {saveSuccess && (
              <span className="text-green-500 mr-4">บันทึกข้อมูลสำเร็จ</span>
            )}
            {saveError && (
              <span className="text-red-500 mr-4">เกิดข้อผิดพลาดในการบันทึกข้อมูล</span>
            )}
          </div>
        </div>

        {loading ? (
          <div className="flex items-center justify-center h-64">
            <div className="text-center">
              <FaSync className="animate-spin text-blue-500 text-4xl mx-auto mb-4" />
              <p className="text-gray-600">กำลังโหลดข้อมูล...</p>
            </div>
          </div>
        ) : data ? (
          <div>
            {/* Hero Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">Hero</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText
                  value={data?.hero?.title || ''}
                  onChange={(value) => updateHero('title', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                <EditableText
                  value={data?.hero?.subtitle || ''}
                  onChange={(value) => updateHero('subtitle', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพพื้นหลัง</label>
                <EditableText
                  value={data?.hero?.image || ''}
                  onChange={(value) => updateHero('image', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพสินค้า</label>
                <EditableText
                  value={data?.hero?.productImage || ''}
                  onChange={(value) => updateHero('productImage', value)}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* HeroBanner Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">แบนเนอร์หลัก (Hero Banner)</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText
                  value={data?.heroBanner?.title || ''}
                  onChange={(value) => updateHeroBanner('title', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">เนื้อหาด้านซ้าย</label>
                <textarea
                  value={data?.heroBanner?.leftContent || ''}
                  onChange={(e) => updateHeroBanner('leftContent', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">เนื้อหาด้านซ้าย (ส่วนที่ 2)</label>
                <textarea
                  value={data?.heroBanner?.leftContentSecond || ''}
                  onChange={(e) => updateHeroBanner('leftContentSecond', e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded-md"
                  rows={4}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความไฮไลท์</label>
                <EditableText
                  value={data?.heroBanner?.leftContentHighlight || ''}
                  onChange={(value) => updateHeroBanner('leftContentHighlight', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อด้านขวา</label>
                <EditableText
                  value={data?.heroBanner?.rightTitle || ''}
                  onChange={(value) => updateHeroBanner('rightTitle', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">คุณสมบัติ</label>
                {data?.heroBanner?.rightFeatures?.map((feature, index) => (
                  <div key={index} className="flex items-center mb-2">
                    <EditableText
                      value={feature}
                      onChange={(value) => updateHeroBannerFeature(index, value)}
                      className="flex-grow"
                    />
                    <button
                      onClick={() => {
                        setData(prev => {
                          const updatedFeatures = [...prev.heroBanner.rightFeatures];
                          updatedFeatures.splice(index, 1);
                          return {
                            ...prev,
                            heroBanner: {
                              ...prev.heroBanner,
                              rightFeatures: updatedFeatures
                            }
                          };
                        });
                      }}
                      className="ml-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md text-sm"
                    >
                      ลบ
                    </button>
                  </div>
                ))}
                <button
                  onClick={() => {
                    setData(prev => {
                      const updatedFeatures = [...(prev.heroBanner?.rightFeatures || [])];
                      updatedFeatures.push('คุณสมบัติใหม่');
                      return {
                        ...prev,
                        heroBanner: {
                          ...prev.heroBanner,
                          rightFeatures: updatedFeatures
                        }
                      };
                    });
                  }}
                  className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  เพิ่มคุณสมบัติ
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                <EditableText
                  value={data?.heroBanner?.buttonText || ''}
                  onChange={(value) => updateHeroBanner('buttonText', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                <EditableText
                  value={data?.heroBanner?.buttonLink || ''}
                  onChange={(value) => updateHeroBanner('buttonLink', value)}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* ThreeSteps Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">ขั้นตอนการผ่อนสินค้า</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText
                  value={data?.threeSteps?.title || ''}
                  onChange={(value) => updateThreeSteps('title', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อหลัก</label>
                <EditableText
                  value={data?.threeSteps?.mainTitle || ''}
                  onChange={(value) => updateThreeSteps('mainTitle', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อรอง</label>
                <EditableText
                  value={data?.threeSteps?.subTitle || ''}
                  onChange={(value) => updateThreeSteps('subTitle', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">คำถาม</label>
                <EditableText
                  value={data?.threeSteps?.question || ''}
                  onChange={(value) => updateThreeSteps('question', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพขั้นตอน</label>
                <EditableText
                  value={data?.threeSteps?.stepsImage || ''}
                  onChange={(value) => updateThreeSteps('stepsImage', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">คุณสมบัติ</label>
                {data?.threeSteps?.features?.map((feature, index) => (
                  <div key={index} className="bg-gray-50 p-4 mb-4 rounded-md">
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                      <EditableText
                        value={feature.title || ''}
                        onChange={(value) => updateThreeStepsFeature(index, 'title', value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                      <EditableText
                        value={feature.description || ''}
                        onChange={(value) => updateThreeStepsFeature(index, 'description', value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">ไอคอน</label>
                      <select
                        value={feature.icon || ''}
                        onChange={(e) => updateThreeStepsFeature(index, 'icon', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md"
                      >
                        <option value="id-card">บัตรประชาชน (ID Card)</option>
                        <option value="clock">นาฬิกา (Clock)</option>
                        <option value="shield">โล่ (Shield)</option>
                      </select>
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          setData(prev => {
                            const updatedFeatures = [...prev.threeSteps.features];
                            updatedFeatures.splice(index, 1);
                            return {
                              ...prev,
                              threeSteps: {
                                ...prev.threeSteps,
                                features: updatedFeatures
                              }
                            };
                          });
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                      >
                        ลบ
                      </button>
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={() => {
                    setData(prev => {
                      const updatedFeatures = [...(prev.threeSteps?.features || [])];
                      updatedFeatures.push({
                        id: updatedFeatures.length + 1,
                        title: '',
                        description: '',
                        icon: 'id-card'
                      });
                      return {
                        ...prev,
                        threeSteps: {
                          ...prev.threeSteps,
                          features: updatedFeatures
                        }
                      };
                    });
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                >
                  เพิ่มคุณสมบัติ
                </button>
              </div>
            </div>
            
            {/* InfoBoxes Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">รายละเอียดคุณสมบัติและเอกสาร</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText
                  value={data?.infoBoxes?.title || ''}
                  onChange={(value) => updateInfoBoxes('title', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">คุณสมบัติ</h4>
                
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                  <EditableText
                    value={data?.infoBoxes?.qualifications?.title || ''}
                    onChange={(value) => updateInfoBoxes('qualifications', { ...data?.infoBoxes?.qualifications, title: value })}
                    className="w-full"
                  />
                </div>
                
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">รายการ</label>
                  {data?.infoBoxes?.qualifications?.items?.map((item, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <EditableText
                        value={item}
                        onChange={(value) => updateInfoBoxesItem('qualifications', index, value)}
                        className="flex-grow"
                      />
                      <button
                        onClick={() => {
                          setData(prev => {
                            const updatedItems = [...prev.infoBoxes.qualifications.items];
                            updatedItems.splice(index, 1);
                            return {
                              ...prev,
                              infoBoxes: {
                                ...prev.infoBoxes,
                                qualifications: {
                                  ...prev.infoBoxes.qualifications,
                                  items: updatedItems
                                }
                              }
                            };
                          });
                        }}
                        className="ml-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md text-sm"
                      >
                        ลบ
                      </button>
                    </div>
                  ))}
                  
                  <button
                    onClick={() => {
                      setData(prev => {
                        const updatedItems = [...(prev.infoBoxes?.qualifications?.items || [])];
                        updatedItems.push('คุณสมบัติใหม่');
                        return {
                          ...prev,
                          infoBoxes: {
                            ...prev.infoBoxes,
                            qualifications: {
                              ...prev.infoBoxes?.qualifications,
                              items: updatedItems
                            }
                          }
                        };
                      });
                    }}
                    className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    เพิ่มรายการ
                  </button>
                </div>
              </div>
              
              <div className="mb-6">
                <h4 className="text-lg font-medium mb-2">เอกสารที่ต้องเตรียม</h4>
                
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                  <EditableText
                    value={data?.infoBoxes?.documents?.title || ''}
                    onChange={(value) => updateInfoBoxes('documents', { ...data?.infoBoxes?.documents, title: value })}
                    className="w-full"
                  />
                </div>
                
                <div className="mb-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">รายการ</label>
                  {data?.infoBoxes?.documents?.items?.map((item, index) => (
                    <div key={index} className="flex items-center mb-2">
                      <EditableText
                        value={item}
                        onChange={(value) => updateInfoBoxesItem('documents', index, value)}
                        className="flex-grow"
                      />
                      <button
                        onClick={() => {
                          setData(prev => {
                            const updatedItems = [...prev.infoBoxes.documents.items];
                            updatedItems.splice(index, 1);
                            return {
                              ...prev,
                              infoBoxes: {
                                ...prev.infoBoxes,
                                documents: {
                                  ...prev.infoBoxes.documents,
                                  items: updatedItems
                                }
                              }
                            };
                          });
                        }}
                        className="ml-2 bg-red-500 hover:bg-red-600 text-white px-2 py-1 rounded-md text-sm"
                      >
                        ลบ
                      </button>
                    </div>
                  ))}
                  
                  <button
                    onClick={() => {
                      setData(prev => {
                        const updatedItems = [...(prev.infoBoxes?.documents?.items || [])];
                        updatedItems.push('เอกสารใหม่');
                        return {
                          ...prev,
                          infoBoxes: {
                            ...prev.infoBoxes,
                            documents: {
                              ...prev.infoBoxes?.documents,
                              items: updatedItems
                            }
                          }
                        };
                      });
                    }}
                    className="mt-2 bg-green-500 hover:bg-green-600 text-white px-3 py-1 rounded-md text-sm"
                  >
                    เพิ่มรายการ
                  </button>
                </div>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                <EditableText
                  value={data?.infoBoxes?.buttonText || ''}
                  onChange={(value) => updateInfoBoxes('buttonText', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                <EditableText
                  value={data?.infoBoxes?.buttonLink || ''}
                  onChange={(value) => updateInfoBoxes('buttonLink', value)}
                  className="w-full"
                />
              </div>
            </div>
            
            {/* Products Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h3 className="text-xl font-semibold mb-4">บทความที่น่าสนใจ</h3>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText
                  value={data?.products?.title || ''}
                  onChange={(value) => updateProducts('title', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">บทความ</label>
                {data?.products?.articles?.map((article, index) => (
                  <div key={index} className="bg-gray-50 p-4 mb-4 rounded-md">
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                      <EditableText
                        value={article.title || ''}
                        onChange={(value) => updateProductsArticle(index, 'title', value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                      <EditableText
                        value={article.subtitle || ''}
                        onChange={(value) => updateProductsArticle(index, 'subtitle', value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพ</label>
                      <EditableText
                        value={article.image || ''}
                        onChange={(value) => updateProductsArticle(index, 'image', value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button
                        onClick={() => {
                          setData(prev => {
                            const updatedArticles = [...prev.products.articles];
                            updatedArticles.splice(index, 1);
                            return {
                              ...prev,
                              products: {
                                ...prev.products,
                                articles: updatedArticles
                              }
                            };
                          });
                        }}
                        className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded-md text-sm"
                      >
                        ลบ
                      </button>
                    </div>
                  </div>
                ))}
                
                <button
                  onClick={() => {
                    setData(prev => {
                      const updatedArticles = [...(prev.products?.articles || [])];
                      updatedArticles.push({
                        id: updatedArticles.length + 1,
                        title: '',
                        subtitle: '',
                        image: '/images/article1.png'
                      });
                      return {
                        ...prev,
                        products: {
                          ...prev.products,
                          articles: updatedArticles
                        }
                      };
                    });
                  }}
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                >
                  เพิ่มบทความ
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                <EditableText
                  value={data?.products?.buttonText || ''}
                  onChange={(value) => updateProducts('buttonText', value)}
                  className="w-full"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                <EditableText
                  value={data?.products?.buttonLink || ''}
                  onChange={(value) => updateProducts('buttonLink', value)}
                  className="w-full"
                />
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow-md p-6">
            <p className="text-center text-gray-600">ไม่พบข้อมูล</p>
          </div>
        )}
      </div>
    </div>
  );
}
