'use client';

import React, { useState, useEffect } from 'react';
import { FaSync } from 'react-icons/fa';
import Link from 'next/link';

// EditableText component for inline text editing
const EditableText = ({ value, onChange, className = '', placeholder = 'คลิกเพื่อแก้ไข', multiline = false }) => {
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
    if (!multiline && e.key === 'Enter') {
      handleBlur();
    }
  };

  return isEditing ? (
    multiline ? (
      <textarea
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        className={`border border-gray-300 p-1 min-h-[100px] ${className}`}
        autoFocus
      />
    ) : (
      <input
        type="text"
        value={text}
        onChange={handleChange}
        onBlur={handleBlur}
        onKeyDown={handleKeyDown}
        className={`border border-gray-300 p-1 ${className}`}
        autoFocus
      />
    )
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
      alert('เกิดข้อผิดพลาดในการอัปโหลดรูปภาพ');
    } finally {
      setIsUploading(false);
    }
  };

  return (
    <div className="relative">
      {isEditing ? (
        <div className="border border-gray-300 p-2 rounded-md">
          <input
            type="text"
            value={url}
            onChange={handleChange}
            onBlur={handleBlur}
            onKeyDown={handleKeyDown}
            className="w-full mb-2 p-1 border border-gray-300"
            placeholder="ใส่ URL ของรูปภาพ"
            autoFocus
          />
          
          <div className="flex space-x-2">
            <button
              id="upload-button"
              onClick={handleFileSelect}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
              disabled={isUploading}
            >
              {isUploading ? 'กำลังอัปโหลด...' : 'อัปโหลดรูปภาพ'}
            </button>
            
            <button
              id="close-button"
              onClick={() => setIsEditing(false)}
              className="bg-gray-500 hover:bg-gray-600 text-white px-3 py-1 rounded-md text-sm"
            >
              ยกเลิก
            </button>
          </div>
          
          <input
            type="file"
            ref={fileInputRef}
            onChange={handleFileChange}
            accept="image/*"
            className="hidden"
          />
        </div>
      ) : (
        <div
          onClick={handleClick}
          className="cursor-pointer hover:bg-gray-100 rounded-md overflow-hidden"
        >
          <img
            src={src || placeholder}
            alt="Editable"
            className={`object-cover ${className}`}
            style={{ maxHeight: '200px' }}
          />
          <div className="absolute top-0 right-0 bg-blue-500 text-white text-xs px-1 opacity-0 hover:opacity-100">
            แก้ไข
          </div>
        </div>
      )}
    </div>
  );
};

// AdminPlaceholder component for sections that are not yet editable
const AdminPlaceholder = ({ title, className = '' }) => {
  return (
    <div className={`p-4 bg-gray-100 border border-dashed border-gray-300 rounded-md text-center ${className}`}>
      <p className="text-gray-500">{title || 'ส่วนนี้ยังไม่สามารถแก้ไขได้'}</p>
    </div>
  );
};

// Main AdminPromotionPage component
export default function AdminPromotionPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState({});
  const [isSaving, setIsSaving] = useState(false);
  const [saveStatus, setSaveStatus] = useState('');

  useEffect(() => {
    refreshData();
  }, []);

  // ฟังก์ชันโหลดข้อมูลใหม่
  const refreshData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch('/api/content/promotion');
      
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      
      const contentData = await response.json();
      
      // ถ้าไม่มีข้อมูล ให้กำหนดค่าเริ่มต้น
      if (!contentData) {
        setData({
          banner: {
            image: '/images/bannerpromo.png',
            mainText: 'ร้อนเงิน หมุนไม่ทัน',
            subText: 'ไอโฟน ในมือคุณ ช่วยได้!',
            sideImage: '/images/money1.png'
          },
          heroBanner: {
            title: 'ช็อต! อยากได้เงินก้อน, เงินตั้งหลัก, เงินกู้เติม',
            description: 'ไม่อยากเป็นหนี้นอกระบบ ไม่รู้จะไปหาใคร ฟินฟินช่วยได้ เพียงแค่คุณเป็นเจ้าของไอโฟน นำมาแลกเงินกับเรา คุณจะได้รับเงินก้อนและได้เครื่องกลับไปใช้ด้วย ได้เงินไว อนุมัติภายใน 1 วัน ไม่ใช่จำนำ มีเงินสำรองจ่ายหมดทวงเรื่องไม่มีข้อติดใจ (ฟินฟินรับแลกเงินตั้งแต่รุ่นไอโฟน 11 ขึ้นไป)',
            description2: 'ไอโฟนแลกเงิน คือ การนำไอโฟนของลูกค้ามาให้ทางฟินฟินประเมินราคา ลูกค้าจะได้รับเงินก้อนพร้อมไอโฟนกลับไปใช้งานปกติ ตัวเครื่องจะติด iCloud ของทางร้านจวนกว่าลูกค้าจะผ่อนชำระครบ',
            rightTitle: 'ไอโฟนแลกเงินกับฟินฟิน',
            features: [
              'วงเงินสูง อนุมัติไว',
              'ได้เครื่องกลับไปใช้ ไม่ใช่จำนำ',
              'ไม่ต้องยืมหน้า',
              'ผ่อนสบาย ผ่านแอปฯ'
            ]
          },
          threeSteps: {
            title: 'ไอโฟนแลกเงิน กับฟินฟินดีกว่าอย่างไร',
            features: [
              {
                title: 'ง่าย',
                description: 'แค่เป็นเจ้าของไอโฟน ไม่ต้องมีคนค้ำ',
                icon: 'phone'
              },
              {
                title: 'ทันใจ',
                description: 'ได้เงินไว อนุมัติภายใน 1 วัน',
                icon: 'document'
              },
              {
                title: 'ได้คืน',
                description: 'ยังมีเครื่องใช้ ไม่ใช่จำนำ',
                icon: 'hand'
              }
            ],
            mainTitle: 'ขั้นตอนง่าย ๆ',
            subTitle: 'ผ่อนไอโฟนกับฟินฟิน',
            question: 'อยากผ่อนไอโฟนง่าย ๆ ไม่ยุ่งยาก ต้องทำไง ?',
            stepsImage: '/images/bannerbuy.png'
          },
          infoBoxes: {
            title: 'ข้อมูลเพิ่มเติม',
            boxes: [
              {
                title: 'ผ่อนสินค้า',
                description: 'ผ่อนสินค้าราคาถูก ไม่มีบัตรเครดิตก็ผ่อนได้',
                buttonText: 'สนใจผ่อน',
                buttonLink: '/faq'
              },
              {
                title: 'แลกเปลี่ยน',
                description: 'เทิร์นเครื่องเก่าแลกเครื่องใหม่ ได้ราคาสูง',
                buttonText: 'สนใจเทิร์น',
                buttonLink: '/faq'
              }
            ]
          },
          products: {
            title: 'สินค้าแนะนำ',
            description: 'สินค้าคุณภาพดี ราคาถูก ผ่อนได้',
            buttonText: 'ดูเพิ่มเติม',
            buttonLink: '/calculator',
            items: [
              {
                id: 'iphone-15',
                brand: 'Apple',
                name: 'iPhone 15',
                price: '฿29,900',
                image: '/images/iphone15.png',
                isNew: true,
                link: '/faq'
              },
              {
                id: 'iphone-14',
                brand: 'Apple',
                name: 'iPhone 14',
                price: '฿25,900',
                image: '/images/iphone14.png',
                isNew: false,
                link: '/faq'
              },
              {
                id: 'iphone-13',
                brand: 'Apple',
                name: 'iPhone 13',
                price: '฿22,900',
                image: '/images/iphone13.png',
                isNew: false,
                link: '/faq'
              }
            ]
          }
        });
      } else {
        setData(contentData);
      }
    } catch (error) {
      console.error('Error fetching data:', error);
      alert('เกิดข้อผิดพลาดในการโหลดข้อมูล');
    } finally {
      setIsLoading(false);
    }
  };

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

  // ฟังก์ชันสำหรับอัปเดตคุณสมบัติใน HeroBanner
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

  // ฟังก์ชันสำหรับอัปเดตคุณสมบัติใน ThreeSteps
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

  // ฟังก์ชันสำหรับอัปเดตข้อมูลกล่องใน InfoBoxes
  const updateInfoBoxesItem = (boxIndex, field, value) => {
    setData(prev => {
      const updatedBoxes = [...prev.infoBoxes.boxes];
      updatedBoxes[boxIndex] = {
        ...updatedBoxes[boxIndex],
        [field]: value
      };
      return {
        ...prev,
        infoBoxes: {
          ...prev.infoBoxes,
          boxes: updatedBoxes
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
    setIsSaving(true);
    setSaveStatus('กำลังบันทึก...');
    
    try {
      const response = await fetch('/api/content/promotion', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      
      if (!response.ok) {
        throw new Error('Failed to save data');
      }
      
      setSaveStatus('บันทึกสำเร็จ');
      setTimeout(() => setSaveStatus(''), 3000);
    } catch (error) {
      console.error('Error saving data:', error);
      setSaveStatus('บันทึกไม่สำเร็จ');
      setTimeout(() => setSaveStatus(''), 3000);
    } finally {
      setIsSaving(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">จัดการหน้าโปรโมชั่น</h1>
          
          <div className="flex items-center space-x-2">
            <button
              onClick={refreshData}
              className="bg-gray-200 hover:bg-gray-300 px-4 py-2 rounded-md flex items-center"
              disabled={isLoading}
            >
              <FaSync className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} />
              รีเฟรช
            </button>
            
            <button
              onClick={handleSave}
              className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
              disabled={isSaving}
            >
              {isSaving ? 'กำลังบันทึก...' : 'บันทึก'}
            </button>
            
            <Link href="/admin" className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded-md">
              กลับ
            </Link>
          </div>
        </div>
        
        {saveStatus && (
          <div className={`mb-4 p-2 rounded-md text-center ${saveStatus.includes('สำเร็จ') ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {saveStatus}
          </div>
        )}
        
        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">ตัวอย่างหน้าโปรโมชั่น</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="col-span-1 md:col-span-3">
              <Link href="/promotion" target="_blank" className="text-blue-500 hover:underline">
                ดูหน้าโปรโมชั่น
              </Link>
            </div>
          </div>
        </div>

        {isLoading ? (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500 mx-auto"></div>
            <p className="mt-4 text-gray-600">กำลังโหลดข้อมูล...</p>
          </div>
        ) : (
          <div>
            {/* Banner Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">แบนเนอร์</h2>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพแบนเนอร์</label>
                <EditableImage 
                  src={data.banner?.image || '/images/bannerpromo.png'} 
                  onChange={(value) => updateBanner('image', value)}
                  className="w-full h-32 object-cover"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความหลัก</label>
                <EditableText 
                  value={data.banner?.mainText || 'ร้อนเงิน หมุนไม่ทัน'} 
                  onChange={(value) => updateBanner('mainText', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความรอง</label>
                <EditableText 
                  value={data.banner?.subText || 'ไอโฟน ในมือคุณ ช่วยได้!'} 
                  onChange={(value) => updateBanner('subText', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพประกอบ</label>
                <EditableImage 
                  src={data.banner?.sideImage || '/images/money1.png'} 
                  onChange={(value) => updateBanner('sideImage', value)}
                  className="max-w-xs"
                />
              </div>
            </div>
            
            {/* HeroBanner Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">ส่วนข้อมูลหลัก (Hero Banner)</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อซ้าย</label>
                <EditableText 
                  value={data.heroBanner?.title || 'ช็อต! อยากได้เงินก้อน, เงินตั้งหลัก, เงินกู้เติม'} 
                  onChange={(value) => updateHeroBanner('title', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รายละเอียดซ้าย 1</label>
                <EditableText 
                  value={data.heroBanner?.description || 'ไม่อยากเป็นหนี้นอกระบบ ไม่รู้จะไปหาใคร ฟินฟินช่วยได้ เพียงแค่คุณเป็นเจ้าของไอโฟน นำมาแลกเงินกับเรา คุณจะได้รับเงินก้อนและได้เครื่องกลับไปใช้ด้วย ได้เงินไว อนุมัติภายใน 1 วัน ไม่ใช่จำนำ มีเงินสำรองจ่ายหมดทวงเรื่องไม่มีข้อติดใจ (ฟินฟินรับแลกเงินตั้งแต่รุ่นไอโฟน 11 ขึ้นไป)'} 
                  onChange={(value) => updateHeroBanner('description', value)}
                  className="w-full p-2 border rounded"
                  multiline={true}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รายละเอียดซ้าย 2</label>
                <EditableText 
                  value={data.heroBanner?.description2 || 'ไอโฟนแลกเงิน คือ การนำไอโฟนของลูกค้ามาให้ทางฟินฟินประเมินราคา ลูกค้าจะได้รับเงินก้อนพร้อมไอโฟนกลับไปใช้งานปกติ ตัวเครื่องจะติด iCloud ของทางร้านจวนกว่าลูกค้าจะผ่อนชำระครบ'} 
                  onChange={(value) => updateHeroBanner('description2', value)}
                  className="w-full p-2 border rounded"
                  multiline={true}
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อขวา</label>
                <EditableText 
                  value={data.heroBanner?.rightTitle || 'ไอโฟนแลกเงินกับฟินฟิน'} 
                  onChange={(value) => updateHeroBanner('rightTitle', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-md font-medium mb-2">คุณสมบัติ</h3>
                {data.heroBanner?.features?.map((feature, index) => (
                  <div key={index} className="mb-2">
                    <label className="block text-sm font-medium text-gray-700 mb-1">คุณสมบัติ {index + 1}</label>
                    <EditableText 
                      value={feature} 
                      onChange={(value) => updateHeroBannerFeature(index, value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                ))}
                
                <button 
                  onClick={() => {
                    setData(prev => ({
                      ...prev,
                      heroBanner: {
                        ...prev.heroBanner,
                        features: [...(prev.heroBanner?.features || []), '']
                      }
                    }));
                  }}
                  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  เพิ่มคุณสมบัติ
                </button>
              </div>
            </div>
            
            {/* ThreeSteps Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">ส่วนขั้นตอนการใช้บริการ</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อคุณสมบัติ</label>
                <EditableText 
                  value={data.threeSteps?.title || 'ไอโฟนแลกเงิน กับฟินฟินดีกว่าอย่างไร'} 
                  onChange={(value) => updateThreeSteps('title', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-md font-medium mb-2">คุณสมบัติ</h3>
                {data.threeSteps?.features?.map((feature, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-md">
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                      <EditableText 
                        value={feature.title} 
                        onChange={(value) => updateThreeStepsFeature(index, 'title', value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                      <EditableText 
                        value={feature.description} 
                        onChange={(value) => updateThreeStepsFeature(index, 'description', value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">ไอคอน</label>
                      <select
                        value={feature.icon || 'phone'}
                        onChange={(e) => updateThreeStepsFeature(index, 'icon', e.target.value)}
                        className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      >
                        <option value="phone">โทรศัพท์ (Phone)</option>
                        <option value="document">เอกสาร (Document)</option>
                        <option value="hand">มือ (Hand)</option>
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
                    setData(prev => ({
                      ...prev,
                      threeSteps: {
                        ...prev.threeSteps,
                        features: [...(prev.threeSteps?.features || []), {
                          title: '',
                          description: '',
                          icon: 'phone'
                        }]
                      }
                    }));
                  }}
                  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  เพิ่มคุณสมบัติ
                </button>
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อใหญ่</label>
                <EditableText 
                  value={data.threeSteps?.mainTitle || 'ขั้นตอนง่าย ๆ'} 
                  onChange={(value) => updateThreeSteps('mainTitle', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อย่อย</label>
                <EditableText 
                  value={data.threeSteps?.subTitle || 'ผ่อนไอโฟนกับฟินฟิน'} 
                  onChange={(value) => updateThreeSteps('subTitle', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">คำถาม</label>
                <EditableText 
                  value={data.threeSteps?.question || 'อยากผ่อนไอโฟนง่าย ๆ ไม่ยุ่งยาก ต้องทำไง ?'} 
                  onChange={(value) => updateThreeSteps('question', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">รูปภาพขั้นตอน</label>
                <EditableImage 
                  src={data.threeSteps?.stepsImage || '/images/bannerbuy.png'} 
                  onChange={(value) => updateThreeSteps('stepsImage', value)}
                  className="max-w-lg"
                />
              </div>
            </div>
            
            {/* InfoBoxes Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">ส่วนข้อมูลเพิ่มเติม</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText 
                  value={data.infoBoxes?.title || 'ข้อมูลเพิ่มเติม'} 
                  onChange={(value) => updateInfoBoxes('title', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-md font-medium mb-2">กล่องข้อมูล</h3>
                {data.infoBoxes?.boxes?.map((box, index) => (
                  <div key={index} className="mb-4 p-4 border rounded-md">
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                      <EditableText 
                        value={box.title} 
                        onChange={(value) => updateInfoBoxesItem(index, 'title', value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                      <EditableText 
                        value={box.description} 
                        onChange={(value) => updateInfoBoxesItem(index, 'description', value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                      <EditableText 
                        value={box.buttonText} 
                        onChange={(value) => updateInfoBoxesItem(index, 'buttonText', value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                      <EditableText 
                        value={box.buttonLink} 
                        onChange={(value) => updateInfoBoxesItem(index, 'buttonLink', value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div className="flex justify-end">
                      <button 
                        onClick={() => {
                          setData(prev => {
                            const updatedBoxes = [...prev.infoBoxes.boxes];
                            updatedBoxes.splice(index, 1);
                            return {
                              ...prev,
                              infoBoxes: {
                                ...prev.infoBoxes,
                                boxes: updatedBoxes
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
                    setData(prev => ({
                      ...prev,
                      infoBoxes: {
                        ...prev.infoBoxes,
                        boxes: [...(prev.infoBoxes?.boxes || []), {
                          title: '',
                          description: '',
                          buttonText: '',
                          buttonLink: '/faq'
                        }]
                      }
                    }));
                  }}
                  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  เพิ่มกล่องข้อมูล
                </button>
              </div>
            </div>
            
            {/* Products Section */}
            <div className="bg-white rounded-lg shadow-md p-6 mb-6">
              <h2 className="text-xl font-semibold mb-4">ส่วนสินค้าแนะนำ</h2>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">หัวข้อ</label>
                <EditableText 
                  value={data.products?.title || 'สินค้าแนะนำ'} 
                  onChange={(value) => updateProducts('title', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">คำอธิบาย</label>
                <EditableText 
                  value={data.products?.description || 'สินค้าคุณภาพดี ราคาถูก ผ่อนได้'} 
                  onChange={(value) => updateProducts('description', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ข้อความปุ่ม</label>
                <EditableText 
                  value={data.products?.buttonText || 'ดูเพิ่มเติม'} 
                  onChange={(value) => updateProducts('buttonText', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์ปุ่ม</label>
                <EditableText 
                  value={data.products?.buttonLink || '/calculator'} 
                  onChange={(value) => updateProducts('buttonLink', value)}
                  className="w-full p-2 border rounded"
                />
              </div>
              
              <div className="mb-4">
                <h3 className="text-md font-medium mb-2">สินค้า</h3>
                {data.products?.items?.map((product, index) => (
                  <div key={index} className="mb-6 p-4 border rounded-md">
                    <h4 className="font-medium mb-2">สินค้า {index + 1}</h4>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">รหัสสินค้า</label>
                      <EditableText 
                        value={product.id} 
                        onChange={(value) => updateProductsItem(index, 'id', value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">แบรนด์</label>
                      <EditableText 
                        value={product.brand} 
                        onChange={(value) => updateProductsItem(index, 'brand', value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">ชื่อสินค้า</label>
                      <EditableText 
                        value={product.name} 
                        onChange={(value) => updateProductsItem(index, 'name', value)}
                        className="w-full p-2 border rounded"
                      />
                    </div>
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">ราคา</label>
                      <EditableText 
                        value={product.price} 
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
                    
                    <div className="mb-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">ลิงก์</label>
                      <EditableText 
                        value={product.link || '/faq'} 
                        onChange={(value) => updateProductsItem(index, 'link', value)}
                        className="w-full p-2 border rounded"
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
                    
                    <div className="flex justify-end">
                      <button 
                        onClick={() => {
                          setData(prev => {
                            const updatedItems = [...prev.products.items];
                            updatedItems.splice(index, 1);
                            return {
                              ...prev,
                              products: {
                                ...prev.products,
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
                
                <button 
                  onClick={() => {
                    setData(prev => ({
                      ...prev,
                      products: {
                        ...prev.products,
                        items: [...(prev.products?.items || []), {
                          id: '',
                          brand: '',
                          name: '',
                          price: '',
                          image: '/images/placeholder.jpg',
                          isNew: false,
                          link: '/faq'
                        }]
                      }
                    }));
                  }}
                  className="mt-2 bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded-md text-sm"
                >
                  เพิ่มสินค้า
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
