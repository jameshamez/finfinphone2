'use client';

import React, { useState, useEffect } from 'react';
import { FaSync } from 'react-icons/fa';

// EditableText component for inline text editing
const EditableText = ({ value, onChange, className = '', placeholder = 'คลิกเพื่อแก้ไข' }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(value || '');

  useEffect(() => {
    setText(value || '');
  }, [value]);

  const handleClick = () => {
    setIsEditing(true);
  };

  const handleBlur = () => {
    setIsEditing(false);
    if (text !== value) {
      onChange(text);
    }
  };

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleBlur();
    }
  };

  return isEditing ? (
    <input
      type="text"
      value={text}
      onChange={handleChange}
      onBlur={handleBlur}
      onKeyDown={handleKeyDown}
      className={`border border-gray-300 p-1 ${className}`}
      autoFocus
    />
  ) : (
    <div
      onClick={handleClick}
      className={`cursor-pointer hover:bg-gray-100 p-1 ${className} ${!value && 'text-gray-400'}`}
    >
      {value || placeholder}
    </div>
  );
};

// EditableImage component for inline image URL editing and uploading
const EditableImage = ({ src, onChange, className = '', placeholder = '/placeholder.jpg' }) => {
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
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="hidden"
            />
            {isUploading && (
              <div className="w-full bg-gray-200 rounded-full h-2.5 mt-2">
                <div 
                  className="bg-blue-600 h-2.5 rounded-full" 
                  style={{ width: '50%' }}
                ></div>
              </div>
            )}
            <div className="text-xs text-gray-500 mt-1">กด Enter เพื่อบันทึก URL หรือเลือกอัปโหลดรูปภาพ</div>
          </div>
        </div>
      )}
    </div>
  );
};

// AdminPlaceholder component for sections that are not yet editable
const AdminPlaceholder = ({ title, className = '' }) => {
  return (
    <div className={`p-4 border border-dashed border-gray-400 text-center ${className}`}>
      <div className="text-lg font-semibold">{title}</div>
      <div className="text-sm text-gray-500">ส่วนนี้ยังไม่สามารถแก้ไขได้</div>
    </div>
  );
};

// Main AdminHomepagePage component
export default function AdminHomepagePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);
  const [isRefreshing, setIsRefreshing] = useState(false);

  // ฟังก์ชันโหลดข้อมูลใหม่
  const refreshData = async () => {
    setLoading(true);
    setIsRefreshing(true);
    try {
      // โหลดข้อมูลจาก API route ที่สร้างไว้
      const timestamp = new Date().getTime(); // เพิ่ม timestamp เพื่อป้องกันการ cache
      const response = await fetch(`/api/get-homepage?t=${timestamp}`, {
        cache: 'no-store', // ไม่ใช้ cache
        headers: {
          'Cache-Control': 'no-cache', // ไม่ใช้ cache
          'Pragma': 'no-cache' // ไม่ใช้ cache
        }
      });
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const jsonData = await response.json();
      console.log('Data loaded from API:', jsonData);
      console.log('Services data:', jsonData.services);
      
      // ถ้าไม่มีข้อมูล services ให้สร้างข้อมูลเริ่มต้น
      if (!jsonData.services) {
        jsonData.services = [
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
        console.log('Created default services data');
      }
      
      setData(jsonData);
      setError(null);
    } catch (err) {
      console.error('Error refreshing data:', err);
      setError(err.message);
    } finally {
      setLoading(false);
      setIsRefreshing(false);
    }
  };

  const updateHero = (field, value) => {
    setData(prev => ({
      ...prev,
      hero: {
        ...prev.hero,
        [field]: value
      }
    }));
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูลในส่วน Services
  const updateService = (serviceIndex, field, value) => {
    setData(prev => {
      const updatedServices = [...prev.services];
      updatedServices[serviceIndex] = {
        ...updatedServices[serviceIndex],
        [field]: value
      };
      return {
        ...prev,
        services: updatedServices
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตคุณสมบัติของ Service
  const updateServiceFeature = (serviceIndex, featureIndex, value) => {
    setData(prev => {
      const updatedServices = [...prev.services];
      const updatedFeatures = [...updatedServices[serviceIndex].features];
      updatedFeatures[featureIndex] = value;
      updatedServices[serviceIndex] = {
        ...updatedServices[serviceIndex],
        features: updatedFeatures
      };
      return {
        ...prev,
        services: updatedServices
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูล CustomerReviews
  const updateReview = (reviewIndex, field, value) => {
    setData(prev => {
      if (!prev.customerReviews) {
        prev.customerReviews = { reviews: [] };
      }
      if (!prev.customerReviews.reviews) {
        prev.customerReviews.reviews = [];
      }
      
      const updatedReviews = [...prev.customerReviews.reviews];
      if (!updatedReviews[reviewIndex]) {
        updatedReviews[reviewIndex] = { id: reviewIndex + 1 };
      }
      
      updatedReviews[reviewIndex] = {
        ...updatedReviews[reviewIndex],
        [field]: value
      };
      
      return {
        ...prev,
        customerReviews: {
          ...prev.customerReviews,
          reviews: updatedReviews
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูล ProductShowcase
  const updateProductShowcase = (field, value) => {
    setData(prev => {
      if (!prev.productShowcase) {
        prev.productShowcase = { 
          title: 'ผลิตภัณฑ์ที่แนะนำ', 
          subtitle: 'เลือกซื้อสินค้าคุณภาพดีได้ที่นี่',
          buttonText: 'ดูเพิ่มเติม',
          buttonLink: '/calculator',
          products: [] 
        };
      }
      
      return {
        ...prev,
        productShowcase: {
          ...prev.productShowcase,
          [field]: value
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูลสินค้าใน ProductShowcase
  const updateProduct = (productIndex, field, value) => {
    setData(prev => {
      if (!prev.productShowcase) {
        prev.productShowcase = { 
          title: 'ผลิตภัณฑ์ที่แนะนำ', 
          subtitle: 'เลือกซื้อสินค้าคุณภาพดีได้ที่นี่',
          buttonText: 'ดูเพิ่มเติม',
          buttonLink: '/calculator',
          products: [] 
        };
      }
      if (!prev.productShowcase.products) {
        prev.productShowcase.products = [];
      }
      
      const updatedProducts = [...prev.productShowcase.products];
      if (!updatedProducts[productIndex]) {
        updatedProducts[productIndex] = { id: productIndex + 1 };
      }
      
      updatedProducts[productIndex] = {
        ...updatedProducts[productIndex],
        [field]: value
      };
      
      return {
        ...prev,
        productShowcase: {
          ...prev.productShowcase,
          products: updatedProducts
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูล Testimonials
  const updateTestimonials = (field, value) => {
    setData(prev => {
      if (!prev.testimonials) {
        prev.testimonials = { 
          title: 'ทำไมต้องฟินฟิน?',
          features: [] 
        };
      }
      
      return {
        ...prev,
        testimonials: {
          ...prev.testimonials,
          [field]: value
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตคุณสมบัติใน Testimonials
  const updateTestimonialFeature = (featureIndex, field, value) => {
    setData(prev => {
      if (!prev.testimonials) {
        prev.testimonials = { 
          title: 'ทำไมต้องฟินฟิน?',
          features: [] 
        };
      }
      if (!prev.testimonials.features) {
        prev.testimonials.features = [];
      }
      
      const updatedFeatures = [...prev.testimonials.features];
      if (!updatedFeatures[featureIndex]) {
        updatedFeatures[featureIndex] = { id: featureIndex + 1 };
      }
      
      updatedFeatures[featureIndex] = {
        ...updatedFeatures[featureIndex],
        [field]: value
      };
      
      return {
        ...prev,
        testimonials: {
          ...prev.testimonials,
          features: updatedFeatures
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูล FAQ
  const updateFaq = (field, value) => {
    setData(prev => {
      if (!prev.faq) {
        prev.faq = { 
          title: 'คำถามที่พบบ่อย',
          buttonText: 'ดูเพิ่มเติม',
          buttonLink: '/faq',
          items: [] 
        };
      }
      
      return {
        ...prev,
        faq: {
          ...prev.faq,
          [field]: value
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตคำถามใน FAQ
  const updateFaqItem = (itemIndex, field, value) => {
    setData(prev => {
      if (!prev.faq) {
        prev.faq = { 
          title: 'คำถามที่พบบ่อย',
          buttonText: 'ดูเพิ่มเติม',
          buttonLink: '/faq',
          items: [] 
        };
      }
      if (!prev.faq.items) {
        prev.faq.items = [];
      }
      
      const updatedItems = [...prev.faq.items];
      if (!updatedItems[itemIndex]) {
        updatedItems[itemIndex] = { id: itemIndex };
      }
      
      updatedItems[itemIndex] = {
        ...updatedItems[itemIndex],
        [field]: value
      };
      
      return {
        ...prev,
        faq: {
          ...prev.faq,
          items: updatedItems
        }
      };
    });
  };

  // ฟังก์ชันอัพเดทข้อมูล feature
  const updateFeature = (index, field, value) => {
    setData(prev => {
      const updatedFeatures = [...prev.features];
      if (!updatedFeatures[index]) {
        updatedFeatures[index] = { id: index + 1 };
      }
      updatedFeatures[index] = {
        ...updatedFeatures[index],
        [field]: value
      };
      return {
        ...prev,
        features: updatedFeatures
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตข้อมูล ServiceBanner
  const updateServiceBanner = (field, value) => {
    setData(prev => {
      if (!prev.serviceBanner) {
        prev.serviceBanner = {
          title1: "ง่าย สะดวก ปลอดภัย",
          title2: "มีโปร",
          subtitle1: "เลือก... ",
          subtitle2: "ฟินฟิน",
          services: []
        };
      }
      
      return {
        ...prev,
        serviceBanner: {
          ...prev.serviceBanner,
          [field]: value
        }
      };
    });
  };
  
  // ฟังก์ชันสำหรับอัปเดตบริการใน ServiceBanner
  const updateServiceBannerItem = (itemIndex, field, value) => {
    setData(prev => {
      if (!prev.serviceBanner) {
        prev.serviceBanner = {
          title1: "ง่าย สะดวก ปลอดภัย",
          title2: "มีโปร",
          subtitle1: "เลือก... ",
          subtitle2: "ฟินฟิน",
          services: []
        };
      }
      
      const updatedServices = [...(prev.serviceBanner.services || [])];
      if (!updatedServices[itemIndex]) {
        updatedServices[itemIndex] = { id: itemIndex + 1 };
      }
      
      updatedServices[itemIndex] = {
        ...updatedServices[itemIndex],
        [field]: value
      };
      
      return {
        ...prev,
        serviceBanner: {
          ...prev.serviceBanner,
          services: updatedServices
        }
      };
    });
  };
  
  // ฟังก์ชันบันทึกข้อมูล
  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage(null);
    
    try {
      const response = await fetch('/api/save-homepage', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      
      setSaveMessage({ type: 'success', text: 'บันทึกข้อมูลสำเร็จ' });
      setTimeout(() => setSaveMessage(null), 3000);
      
      setTimeout(() => {
        refreshData();
      }, 500);
    } catch (err) {
      console.error('Error saving data:', err);
      setSaveMessage({ type: 'error', text: `เกิดข้อผิดพลาด: ${err.message}` });
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="container mx-auto px-4 py-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-2xl font-bold">จัดการหน้าแรก</h1>
            <div className="flex items-center space-x-4">
              <button 
                onClick={refreshData} 
                className="flex items-center text-blue-500 hover:text-blue-700"
                disabled={isRefreshing}
              >
                <FaSync className={`mr-1 ${isRefreshing ? 'animate-spin' : ''}`} />
                {isRefreshing ? 'กำลังรีเฟรช...' : 'รีเฟรชข้อมูล'}
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving || loading}
                className={`px-4 py-2 rounded ${
                  isSaving || loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-blue-500 hover:bg-blue-600 text-white'
                }`}
              >
                {isSaving ? 'กำลังบันทึก...' : 'บันทึกการเปลี่ยนแปลง'}
              </button>
            </div>
          </div>
          
          {saveMessage && (
            <div
              className={`p-3 mb-4 rounded ${
                saveMessage.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
              }`}
            >
              {saveMessage.text}
            </div>
          )}
          
          {error && (
            <div className="p-3 mb-4 rounded bg-red-100 text-red-700">
              เกิดข้อผิดพลาดในการโหลดข้อมูล: {error}
            </div>
          )}
          
          {loading && !data ? (
            <div className="text-center py-8">กำลังโหลดข้อมูล...</div>
          ) : (
            <div>
              {/* Hero Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Hero Section</h2>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อหลัก</label>
                        <EditableText
                          value={data?.hero?.title}
                          onChange={(value) => updateHero('title', value)}
                          className="w-full font-bold text-xl"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อรอง</label>
                        <EditableText
                          value={data?.hero?.subtitle}
                          onChange={(value) => updateHero('subtitle', value)}
                          className="w-full text-lg"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                        <EditableText
                          value={data?.hero?.description}
                          onChange={(value) => updateHero('description', value)}
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพ</label>
                      <EditableImage
                        src={data?.hero?.image}
                        onChange={(value) => updateHero('image', value)}
                        className="border border-gray-200 rounded"
                      />
                      <div className="mt-2 text-xs text-gray-500">
                        คลิกที่รูปภาพเพื่อแก้ไข URL
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Features Section */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Features Section</h2>
                <div className="bg-white rounded-lg shadow p-4">
                  {/* Features content */}
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {data?.features?.map((feature, index) => (
                      <div key={feature.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="mb-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">ไอคอน</label>
                          <input
                            type="text"
                            value={feature.icon}
                            onChange={(e) => updateFeature(index, 'icon', e.target.value)}
                            className="w-full border border-gray-300 rounded px-3 py-2"
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                          <EditableText
                            value={feature.title}
                            onChange={(value) => updateFeature(index, 'title', value)}
                            className="w-full"
                          />
                        </div>
                        <div className="mb-2">
                          <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                          <EditableText
                            value={feature.description}
                            onChange={(value) => updateFeature(index, 'description', value)}
                            className="w-full"
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Services Section */}
              <div className="mt-8">
                <h2 className="text-xl font-bold mb-4">Services Section</h2>
                <div className="bg-white rounded-lg shadow p-4">
                  {/* Services content */}
                  <div className="grid grid-cols-1 gap-6">
                    {data?.services?.map((service, serviceIndex) => (
                      <div key={service.id} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex flex-col md:flex-row gap-6">
                          <div className="flex-1">
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                              <EditableText
                                value={service.title}
                                onChange={(value) => updateService(serviceIndex, 'title', value)}
                                className="w-full font-bold text-xl"
                              />
                            </div>
                            
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-700 mb-1">สีพื้นหลัง</label>
                              <input
                                type="text"
                                value={service.color}
                                onChange={(e) => updateService(serviceIndex, 'color', e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="เช่น bg-yellow-400, bg-green-500, bg-blue-700"
                              />
                            </div>
                            
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-700 mb-1">สีข้อความ</label>
                              <input
                                type="text"
                                value={service.textColor}
                                onChange={(e) => updateService(serviceIndex, 'textColor', e.target.value)}
                                className="w-full border border-gray-300 rounded px-3 py-2"
                                placeholder="เช่น text-black, text-white"
                              />
                            </div>
                            
                            <div className="mb-4">
                              <label className="block text-sm font-medium text-gray-700 mb-1">คุณสมบัติ</label>
                              {service.features.map((feature, featureIndex) => (
                                <div key={featureIndex} className="mb-2">
                                  <EditableText
                                    value={feature}
                                    onChange={(value) => updateServiceFeature(serviceIndex, featureIndex, value)}
                                    className="w-full"
                                  />
                                </div>
                              ))}
                            </div>
                          </div>
                          
                          <div className="w-full md:w-1/3">
                            <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพ</label>
                            <EditableImage
                              src={service.image}
                              onChange={(value) => updateService(serviceIndex, 'image', value)}
                              className="border border-gray-200 rounded"
                            />
                            <div className="mt-2 text-xs text-gray-500">
                              คลิกที่รูปภาพเพื่อแก้ไข URL
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-4 p-2 rounded" style={{ backgroundColor: service.color.replace('bg-', '') }}>
                          <div className="text-center font-bold" style={{ color: service.textColor.replace('text-', '') }}>
                            ตัวอย่างการแสดงผล: {service.title}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Products Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Products Section</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">ส่วนแสดงสินค้า</h3>
                    <p className="text-sm text-gray-600 mb-4">แก้ไขส่วนแสดงสินค้าที่จะแสดงบนหน้าเว็บไซต์</p>
                    
                    {/* หัวข้อและคำอธิบาย */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                        <EditableText
                          value={data.productShowcase?.title || 'ผลิตภัณฑ์ที่แนะนำ'}
                          onChange={(value) => updateProductShowcase('title', value)}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                        <EditableText
                          value={data.productShowcase?.subtitle || 'เลือกซื้อสินค้าคุณภาพดีได้ที่นี่'}
                          onChange={(value) => updateProductShowcase('subtitle', value)}
                          className="w-full"
                        />
                      </div>
                    </div>
                    
                    {/* ปุ่มดูเพิ่มเติม */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                        <EditableText
                          value={data.productShowcase?.buttonText || 'ดูเพิ่มเติม'}
                          onChange={(value) => updateProductShowcase('buttonText', value)}
                          className="w-full"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                        <EditableText
                          value={data.productShowcase?.buttonLink || '/calculator'}
                          onChange={(value) => updateProductShowcase('buttonLink', value)}
                          className="w-full"
                          placeholder="เช่น /calculator, /faq"
                        />
                      </div>
                    </div>
                    
                    <h4 className="text-md font-medium mb-3">สินค้าที่แสดง</h4>
                    
                    {/* สร้างสินค้าตัวอย่างถ้าไม่มีข้อมูล */}
                    {(!data.productShowcase || !data.productShowcase.products || data.productShowcase.products.length === 0) && (
                      <div className="mb-4">
                        <button 
                          onClick={() => {
                            setData(prev => ({
                              ...prev,
                              productShowcase: {
                                ...prev.productShowcase,
                                products: [
                                  { 
                                    id: 1, 
                                    name: "iPhone 14", 
                                    image: "/images/alliphone.png", 
                                    price: "25,900.00",
                                    link: "/faq"
                                  },
                                  { 
                                    id: 2, 
                                    name: "iPhone 13", 
                                    image: "/images/alliphone.png", 
                                    price: "22,900.00",
                                    link: "/faq"
                                  },
                                  { 
                                    id: 3, 
                                    name: "iPhone 12", 
                                    image: "/images/alliphone.png", 
                                    price: "19,900.00",
                                    link: "/faq"
                                  }
                                ]
                              }
                            }))
                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                          สร้างสินค้าตัวอย่าง
                        </button>
                      </div>
                    )}
                    
                    {/* แสดงสินค้าที่มีอยู่ */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {data.productShowcase?.products?.map((product, productIndex) => (
                        <div key={productIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อสินค้า</label>
                            <EditableText
                              value={product.name || ''}
                              onChange={(value) => updateProduct(productIndex, 'name', value)}
                              className="w-full"
                              placeholder="ชื่อสินค้า"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพ</label>
                            <EditableImage
                              src={product.image}
                              onChange={(value) => updateProduct(productIndex, 'image', value)}
                              className="border border-gray-200 rounded w-full h-[150px] object-cover"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">ราคา</label>
                            <EditableText
                              value={product.price || ''}
                              onChange={(value) => updateProduct(productIndex, 'price', value)}
                              className="w-full"
                              placeholder="เช่น 25,900.00"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์</label>
                            <EditableText
                              value={product.link || '/faq'}
                              onChange={(value) => updateProduct(productIndex, 'link', value)}
                              className="w-full"
                              placeholder="เช่น /faq, /calculator"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* ปุ่มเพิ่มสินค้า */}
                    {data.productShowcase?.products?.length > 0 && (
                      <div className="mt-4">
                        <button 
                          onClick={() => {
                            setData(prev => {
                              const newProducts = [...(prev.productShowcase?.products || [])];
                              newProducts.push({
                                id: newProducts.length + 1,
                                name: "",
                                image: "/images/product-placeholder.png",
                                price: "",
                                link: "/faq"
                              });
                              return {
                                ...prev,
                                productShowcase: {
                                  ...prev.productShowcase,
                                  products: newProducts
                                }
                              };
                            });
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                        >
                          เพิ่มสินค้า
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Testimonials Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Testimonials Section</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">ทำไมต้องฟินฟิน?</h3>
                    <p className="text-sm text-gray-600 mb-4">แก้ไขคุณสมบัติที่โดดเด่นของฟินฟิน</p>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                      <EditableText
                        value={data.testimonials?.title || 'ทำไมต้องฟินฟิน?'}
                        onChange={(value) => updateTestimonials('title', value)}
                        className="w-full"
                      />
                    </div>
                    
                    {/* สร้างคุณสมบัติเริ่มต้นถ้าไม่มีข้อมูล */}
                    {(!data.testimonials || !data.testimonials.features || data.testimonials.features.length === 0) && (
                      <div className="mb-4">
                        <button 
                          onClick={() => {
                            setData(prev => ({
                              ...prev,
                              testimonials: {
                                ...prev.testimonials,
                                features: [
                                  {
                                    id: 1,
                                    title: 'ง่าย!',
                                    description: 'ไม่ใช้บัตรเครดิต ใช้แค่บัตรประชาชน\nเช็ก-จ่าย ผ่านแอปฟินฟิน'
                                  },
                                  {
                                    id: 2,
                                    title: 'ไว!',
                                    description: 'อนุมัติภายใน 1 วัน\nบริการรวดเร็ว'
                                  },
                                  {
                                    id: 3,
                                    title: 'ชัวร์!',
                                    description: 'เครื่องแท้ ประกันศูนย์ Apple 1 ปี\nมีมากกว่า 15 สาขาทั่วไทย'
                                  }
                                ]
                              }
                            }))
                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                          สร้างคุณสมบัติตัวอย่าง
                        </button>
                      </div>
                    )}
                    
                    {/* แสดงคุณสมบัติที่มีอยู่ */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {data.testimonials?.features?.map((feature, featureIndex) => (
                        <div key={featureIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                            <EditableText
                              value={feature.title || ''}
                              onChange={(value) => updateTestimonialFeature(featureIndex, 'title', value)}
                              className="w-full"
                              placeholder="เช่น ง่าย!, ไว!, ชัวร์!"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">รายละเอียด</label>
                            <textarea
                              value={feature.description || ''}
                              onChange={(e) => updateTestimonialFeature(featureIndex, 'description', e.target.value)}
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="รายละเอียดคุณสมบัติ (ใช้ \n เพื่อขึ้นบรรทัดใหม่)"
                              rows={4}
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* ปุ่มเพิ่มคุณสมบัติ */}
                    {data.testimonials?.features?.length > 0 && (
                      <div className="mt-4">
                        <button 
                          onClick={() => {
                            setData(prev => {
                              const newFeatures = [...(prev.testimonials?.features || [])];
                              newFeatures.push({
                                id: newFeatures.length + 1,
                                title: "",
                                description: ""
                              });
                              return {
                                ...prev,
                                testimonials: {
                                  ...prev.testimonials,
                                  features: newFeatures
                                }
                              };
                            });
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                        >
                          เพิ่มคุณสมบัติ
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Customer Reviews Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">Customer Reviews Section</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">รีวิวจากลูกค้า</h3>
                    <p className="text-sm text-gray-600 mb-4">แก้ไขรีวิวจากลูกค้าที่จะแสดงบนหน้าเว็บไซต์</p>
                    
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      {/* สร้างรีวิวเริ่มต้นถ้าไม่มีข้อมูล */}
                      {(!data.customerReviews || !data.customerReviews.reviews || data.customerReviews.reviews.length === 0) && (
                        <div className="col-span-3">
                          <button 
                            onClick={() => {
                              setData(prev => ({
                                ...prev,
                                customerReviews: {
                                  reviews: [
                                    { id: 1, image: "/images/review1.png", name: "คุณสมชาย", highlight: "ผ่อนไอโฟนได้ง่ายมาก" },
                                    { id: 2, image: "/images/review2.png", name: "คุณสมหญิง", highlight: "บริการดีมาก" },
                                    { id: 3, image: "/images/review3.png", name: "คุณสมศักดิ์", highlight: "อนุมัติไวมาก" }
                                  ]
                                }
                              }))
                            }}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                          >
                            สร้างรีวิวตัวอย่าง
                          </button>
                        </div>
                      )}
                      
                      {/* แสดงรีวิวที่มีอยู่ */}
                      {data.customerReviews?.reviews?.map((review, reviewIndex) => (
                        <div key={reviewIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพ</label>
                            <EditableImage
                              src={review.image}
                              onChange={(value) => updateReview(reviewIndex, 'image', value)}
                              className="border border-gray-200 rounded w-full h-[150px] object-cover"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อลูกค้า</label>
                            <EditableText
                              value={review.name || ''}
                              onChange={(value) => updateReview(reviewIndex, 'name', value)}
                              className="w-full"
                              placeholder="ชื่อลูกค้า"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความไฮไลท์</label>
                            <EditableText
                              value={review.highlight || ''}
                              onChange={(value) => updateReview(reviewIndex, 'highlight', value)}
                              className="w-full"
                              placeholder="ข้อความไฮไลท์"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">แบดจ์ (ถ้ามี)</label>
                            <EditableText
                              value={review.badge || ''}
                              onChange={(value) => updateReview(reviewIndex, 'badge', value)}
                              className="w-full"
                              placeholder="เช่น ลูกค้า VIP"
                            />
                          </div>
                        </div>
                      ))}
                    </div>
                    
                    {/* ปุ่มเพิ่มรีวิว */}
                    {data.customerReviews?.reviews?.length > 0 && (
                      <div className="mt-4">
                        <button 
                          onClick={() => {
                            setData(prev => {
                              const newReviews = [...(prev.customerReviews?.reviews || [])];
                              newReviews.push({
                                id: newReviews.length + 1,
                                image: "/images/review-placeholder.png",
                                name: "",
                                highlight: ""
                              });
                              return {
                                ...prev,
                                customerReviews: {
                                  ...prev.customerReviews,
                                  reviews: newReviews
                                }
                              };
                            });
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                        >
                          เพิ่มรีวิว
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* FAQ Section */}
              <div className="mb-8">
                <h2 className="text-xl font-semibold mb-4">FAQ Section</h2>
                <div className="bg-white rounded-lg shadow-md p-6">
                  <div className="mb-4">
                    <h3 className="text-lg font-medium mb-2">คำถามที่พบบ่อย</h3>
                    <p className="text-sm text-gray-600 mb-4">แก้ไขคำถามที่พบบ่อยที่จะแสดงบนหน้าเว็บไซต์</p>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                      <EditableText
                        value={data.faq?.title || 'คำถามที่พบบ่อย'}
                        onChange={(value) => updateFaq('title', value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                      <EditableText
                        value={data.faq?.buttonText || 'ดูเพิ่มเติม'}
                        onChange={(value) => updateFaq('buttonText', value)}
                        className="w-full"
                      />
                    </div>
                    
                    <div className="mb-4">
                      <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                      <EditableText
                        value={data.faq?.buttonLink || '/faq'}
                        onChange={(value) => updateFaq('buttonLink', value)}
                        className="w-full"
                      />
                    </div>
                    
                    {/* สร้างคำถามตัวอย่างถ้าไม่มีข้อมูล */}
                    {(!data.faq || !data.faq.items || data.faq.items.length === 0) && (
                      <div className="mb-4">
                        <button 
                          onClick={() => {
                            setData(prev => ({
                              ...prev,
                              faq: {
                                ...prev.faq,
                                title: 'คำถามที่พบบ่อย',
                                buttonText: 'ดูเพิ่มเติม',
                                buttonLink: '/faq',
                                items: [
                                  {
                                    id: 0,
                                    question: 'ใช้เอกสารอะไรบ้าง',
                                    answer: 'บัตรประชาชนใบเดียว'
                                  },
                                  {
                                    id: 1,
                                    question: 'อายุเท่าไหร่จึงผ่อนได้',
                                    answer: 'อายุ 20 ปีขึ้นไป'
                                  },
                                  {
                                    id: 2,
                                    question: 'เครื่องติด icloud ไหม',
                                    answer: 'ไม่ติดicloudทางร้าน สามารถใช้apple idของลูกค้าได้เลย'
                                  }
                                ]
                              }
                            }))
                          }}
                          className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded-md"
                        >
                          สร้างคำถามตัวอย่าง
                        </button>
                      </div>
                    )}
                    
                    {/* แสดงคำถามที่มีอยู่ */}
                    <div className="space-y-4">
                      {data.faq?.items?.map((item, itemIndex) => (
                        <div key={itemIndex} className="bg-gray-50 rounded-lg p-4 border border-gray-200">
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">คำถาม</label>
                            <EditableText
                              value={item.question || ''}
                              onChange={(value) => updateFaqItem(itemIndex, 'question', value)}
                              className="w-full"
                              placeholder="เช่น ใช้เอกสารอะไรบ้าง"
                            />
                          </div>
                          
                          <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-1">คำตอบ</label>
                            <textarea
                              value={item.answer || ''}
                              onChange={(e) => updateFaqItem(itemIndex, 'answer', e.target.value)}
                              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                              placeholder="คำตอบของคำถาม"
                              rows={3}
                            />
                          </div>
                          
                          <div className="flex justify-end">
                            <button 
                              onClick={() => {
                                setData(prev => {
                                  const updatedItems = [...prev.faq.items];
                                  updatedItems.splice(itemIndex, 1);
                                  return {
                                    ...prev,
                                    faq: {
                                      ...prev.faq,
                                      items: updatedItems
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
                    </div>
                    
                    {/* ปุ่มเพิ่มคำถาม */}
                    {data.faq?.items?.length > 0 && (
                      <div className="mt-4">
                        <button 
                          onClick={() => {
                            setData(prev => {
                              const newItems = [...(prev.faq?.items || [])];
                              newItems.push({
                                id: newItems.length,
                                question: "",
                                answer: ""
                              });
                              return {
                                ...prev,
                                faq: {
                                  ...prev.faq,
                                  items: newItems
                                }
                              };
                            });
                          }}
                          className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                        >
                          เพิ่มคำถาม
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </div>
              
              {/* Service Banner Section */}
              <div className="bg-white shadow-md rounded-lg p-6 mb-6">
                <h2 className="text-xl font-bold mb-4">แบนเนอร์บริการ</h2>
                
                <div className="bg-blue-50 p-4 rounded-md mb-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อบรรทัดที่ 1</label>
                        <EditableText
                          value={data?.serviceBanner?.title1 || ''}
                          onChange={(value) => updateServiceBanner('title1', value)}
                          className="w-full"
                          placeholder="ง่าย สะดวก ปลอดภัย"
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อบรรทัดที่ 2</label>
                        <EditableText
                          value={data?.serviceBanner?.title2 || ''}
                          onChange={(value) => updateServiceBanner('title2', value)}
                          className="w-full"
                          placeholder="มีโปร"
                        />
                      </div>
                    </div>
                    
                    <div>
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบายส่วนที่ 1</label>
                        <EditableText
                          value={data?.serviceBanner?.subtitle1 || ''}
                          onChange={(value) => updateServiceBanner('subtitle1', value)}
                          className="w-full"
                          placeholder="เลือก... "
                        />
                      </div>
                      
                      <div className="mb-4">
                        <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบายส่วนที่ 2</label>
                        <EditableText
                          value={data?.serviceBanner?.subtitle2 || ''}
                          onChange={(value) => updateServiceBanner('subtitle2', value)}
                          className="w-full"
                          placeholder="ฟินฟิน"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                
                <h3 className="text-lg font-semibold mb-3">บริการ</h3>
                <div className="space-y-4">
                  {(data?.serviceBanner?.services || []).map((service, serviceIndex) => (
                    <div key={service.id || serviceIndex} className="border border-gray-200 rounded-md p-4">
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อบริการ</label>
                        <EditableText
                          value={service.title || ''}
                          onChange={(value) => updateServiceBannerItem(serviceIndex, 'title', value)}
                          className="w-full"
                          placeholder="ชื่อบริการ"
                        />
                      </div>
                      
                      <div className="mb-3">
                        <label className="block text-sm font-medium text-gray-700 mb-1">ไอคอน</label>
                        <select
                          value={service.icon || 'plus'}
                          onChange={(e) => updateServiceBannerItem(serviceIndex, 'icon', e.target.value)}
                          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          <option value="plus">บวก (Plus)</option>
                          <option value="users">ผู้ใช้ (Users)</option>
                          <option value="credit-card">บัตรเครดิต (Credit Card)</option>
                          <option value="smartphone">สมาร์ทโฟน (Smartphone)</option>
                        </select>
                      </div>
                      
                      <div className="flex justify-end">
                        <button 
                          onClick={() => {
                            setData(prev => {
                              const updatedServices = [...(prev.serviceBanner?.services || [])];
                              updatedServices.splice(serviceIndex, 1);
                              return {
                                ...prev,
                                serviceBanner: {
                                  ...prev.serviceBanner,
                                  services: updatedServices
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
                </div>
                
                {/* ปุ่มเพิ่มบริการ */}
                <div className="mt-4">
                  <button 
                    onClick={() => {
                      setData(prev => {
                        const newServices = [...(prev.serviceBanner?.services || [])];
                        newServices.push({
                          id: newServices.length + 1,
                          title: "",
                          icon: "plus"
                        });
                        return {
                          ...prev,
                          serviceBanner: {
                            ...prev.serviceBanner,
                            services: newServices
                          }
                        };
                      });
                    }}
                    className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
                  >
                    เพิ่มบริการ
                  </button>
                </div>
              </div>
              
              {/* Footer Placeholder */}
              <div className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                  <AdminPlaceholder title="ส่วนท้ายเว็บไซต์" className="text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
