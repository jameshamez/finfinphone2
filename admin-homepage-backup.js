"use client";

import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaEdit, FaSave, FaTimes, FaHome, FaArrowLeft, FaShoppingCart, FaExchangeAlt, FaMoneyBillWave, FaTag, FaSync } from "react-icons/fa";

export default function AdminHomepagePage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);
  const [editMode, setEditMode] = useState(false);
  const [activeEdit, setActiveEdit] = useState(null);
  const editInputRef = useRef(null);

  // เธเธฑเธเธเนเธเธฑเธเนเธซเธฅเธ”เธเนเธญเธกเธนเธฅเนเธซเธกเน
  const refreshData = async () => {
    setLoading(true);
    try {
      // เนเธซเธฅเธ”เธเนเธญเธกเธนเธฅเธเธฒเธเนเธเธฅเน JSON เนเธ”เธขเธ•เธฃเธ เนเธ”เธขเนเธกเนเนเธเน cache
      const timestamp = new Date().getTime(); // เน€เธเธดเนเธก timestamp เน€เธเธทเนเธญเธเนเธญเธเธเธฑเธเธเธฒเธฃ cache
      const response = await fetch(`/data/homepage.json?t=${timestamp}`, {
        cache: 'no-store', // เนเธกเนเนเธเน cache
        headers: {
          'Cache-Control': 'no-cache', // เนเธกเนเนเธเน cache
          'Pragma': 'no-cache' // เนเธกเนเนเธเน cache
        }
      });
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
      console.log('Data refreshed:', result);
    } catch (err) {
      console.error('Error refreshing data:', err);
      // เธ–เนเธฒเน€เธเธดเธ”เธเนเธญเธเธดเธ”เธเธฅเธฒเธ” เนเธเนเธเนเธญเธกเธนเธฅเธ•เธฑเธงเธญเธขเนเธฒเธเนเธ—เธ
      setError(err.message);
      
      // เธเนเธญเธกเธนเธฅเธ•เธฑเธงเธญเธขเนเธฒเธเธชเธณเธซเธฃเธฑเธเธเธฃเธ“เธตเธ—เธตเนเนเธกเนเธชเธฒเธกเธฒเธฃเธ–เนเธซเธฅเธ”เนเธเธฅเนเนเธ”เน
      const sampleData = {
        hero: {
          title: "เธเนเธญเธเนเธญเนเธเธเธ—เธตเน เธเธดเธเธเธดเธ",
          subtitle: "เธเนเธฒเธข เนเธง เธเธฑเธงเธฃเน!",
          description: "เธเธฃเธดเธเธฒเธฃเธเนเธญเธเธชเธดเธเธเนเธฒเนเธญเธ—เธตเธเธฑเนเธเธเธณ เธ”เธญเธเน€เธเธตเนเธขเธ•เนเธณ เธญเธเธธเธกเธฑเธ•เธดเนเธง",
          image: "/images/banner1.png"
        },
          features: [
            {
              id: 1,
              icon: "shopping-cart",
              title: "เธเนเธญเธเธชเธดเธเธเนเธฒเธฃเธฒเธเธฒเธ–เธนเธ",
              description: "เธเนเธญเธเธชเธดเธเธเนเธฒเนเธญเธ—เธตเธฃเธฒเธเธฒเธ–เธนเธเธเธงเนเธฒเธ—เนเธญเธเธ•เธฅเธฒเธ” เธฃเธฑเธเธเธฃเธฐเธเธฑเธเธจเธนเธเธขเนเนเธ—เธข",
              link: "/products"
            },
            {
              id: 2,
              icon: "refresh",
              title: "เน€เธ—เธดเธฃเนเธเน€เธเธฃเธทเนเธญเธเน€เธเนเธฒ",
              description: "เธเธณเน€เธเธฃเธทเนเธญเธเน€เธเนเธฒเธกเธฒเน€เธ—เธดเธฃเนเธ เธฃเธฑเธเธชเนเธงเธเธฅเธ”เน€เธเธดเนเธกเธ—เธฑเธเธ—เธต",
              link: "/trade"
            },
            {
              id: 3,
              icon: "cash",
              title: "เนเธฅเธเน€เธเธดเธเธชเธ”",
              description: "เนเธฅเธเน€เธเธฃเธทเนเธญเธเน€เธเนเธเน€เธเธดเธเธชเธ” เธฃเธฑเธเน€เธเธดเธเธ—เธฑเธเธ—เธต",
              link: "/cash"
            },
            {
              id: 4,
              icon: "tag",
              title: "เธเธฒเธขเธชเธดเธเธเนเธฒเนเธซเนเธฃเธฒเธเธฒเธชเธนเธ",
              description: "เธฃเธฑเธเธเธทเนเธญเธชเธดเธเธเนเธฒเนเธญเธ—เธตเนเธเธฃเธฒเธเธฒเธชเธนเธ เธเนเธฒเธขเน€เธเธดเธเธชเธ”",
              link: "/sell"
            }
          ],
          productShowcase: {
            title: "เธชเธดเธเธเนเธฒเนเธเธฐเธเธณ",
            subtitle: "เธชเธดเธเธเนเธฒเธเธธเธ“เธ เธฒเธ เธฃเธฒเธเธฒเธเธดเน€เธจเธฉ",
            buttonText: "เธ”เธนเน€เธเธดเนเธกเน€เธ•เธดเธก",
            buttonLink: "/calculator",
            products: [
              {
                id: 1,
                name: "iPhone 13 Pro",
                price: "32,900",
                image: "/images/iphone13.png",
                link: "/faq"
              },
              {
                id: 2,
                name: "iPhone 12",
                price: "22,900",
                image: "/images/iphone12.png",
                link: "/faq"
              },
              {
                id: 3,
                name: "iPhone SE",
                price: "14,900",
                image: "/images/iphonese.png",
                link: "/faq"
              }
            ]
          },
          testimonials: [
            {
              id: 1,
              name: "เธเธธเธ“เธชเธกเธเธฒเธข",
              image: "/images/testimonial1.jpg",
              text: "เธเธฃเธดเธเธฒเธฃเธ”เธตเธกเธฒเธ เธญเธเธธเธกเธฑเธ•เธดเนเธง เนเธ”เนเธฃเธฑเธเธชเธดเธเธเนเธฒเน€เธฃเนเธง เนเธเธฐเธเธณเน€เธฅเธขเธเธฃเธฑเธ"
            },
            {
              id: 2,
              name: "เธเธธเธ“เธชเธกเธซเธเธดเธ",
              image: "/images/testimonial2.jpg",
              text: "เธฃเธฒเธเธฒเธ–เธนเธเธเธงเนเธฒเธ—เธตเนเธญเธทเนเธ เธเนเธญเธเธชเธเธฒเธข เนเธกเนเธกเธตเธเธฑเธ•เธฃเธเนเธเนเธญเธเนเธ”เน"
            },
            {
              id: 3,
              name: "เธเธธเธ“เธกเธฒเธเธต",
              image: "/images/testimonial3.jpg",
              text: "เน€เธ—เธดเธฃเนเธเน€เธเธฃเธทเนเธญเธเน€เธเนเธฒเนเธ”เนเธฃเธฒเธเธฒเธ”เธต เธเธเธฑเธเธเธฒเธเธเธฃเธดเธเธฒเธฃเธ”เธตเธกเธฒเธ"
            }
          ],
          callToAction: {
            title: "เธชเธกเธฑเธเธฃเน€เธฅเธข เธงเธฑเธเธเธตเน!",
            description: "เธฃเธฑเธเนเธเธฃเนเธกเธเธฑเนเธเธเธดเน€เธจเธฉเน€เธกเธทเนเธญเธชเธกเธฑเธเธฃเธเนเธฒเธเน€เธงเนเธเนเธเธ•เน เธฃเธฑเธเธชเนเธงเธเธฅเธ”เน€เธเธดเนเธก 10%",
            buttonText: "เธชเธกเธฑเธเธฃเน€เธฅเธข",
            buttonLink: "/faq",
            image: "/images/promotion.jpg"
          }
        };
        
        setData(sampleData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // เน€เธเธดเธ”/เธเธดเธ”เนเธซเธกเธ”เนเธเนเนเธ
  const toggleEditMode = () => {
    setEditMode(!editMode);
    setActiveEdit(null);
  };

  // เน€เธฃเธดเนเธกเนเธเนเนเธเธเธดเธฅเธ”เน
  const startEditing = (path, value) => {
    setActiveEdit({ path, value });
    setTimeout(() => {
      if (editInputRef.current) {
        editInputRef.current.focus();
      }
    }, 100);
  };

  // เธขเธเน€เธฅเธดเธเธเธฒเธฃเนเธเนเนเธ
  const cancelEditing = () => {
    setActiveEdit(null);
  };

  // เธเธฑเธเธ—เธถเธเธเธฒเธฃเนเธเนเนเธเธเธดเธฅเธ”เน
  const saveEdit = (newValue) => {
    if (!activeEdit) return;
    
    const { path } = activeEdit;
    const pathParts = path.split('.');
    const updatedData = { ...data };
    
    let current = updatedData;
    for (let i = 0; i < pathParts.length - 1; i++) {
      const part = pathParts[i];
      if (part.includes('[')) {
        const arrayName = part.split('[')[0];
        const index = parseInt(part.split('[')[1].replace(']', ''));
        current = current[arrayName][index];
      } else {
        current = current[part];
      }
    }
    
    const lastPart = pathParts[pathParts.length - 1];
    current[lastPart] = newValue;
    
    setData(updatedData);
    setActiveEdit(null);
  };

  // เธเธฑเธเธ—เธถเธเธเนเธญเธกเธนเธฅเธ—เธฑเนเธเธซเธกเธ”
  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage(null);
    
    try {
      // เธเธฑเธเธ—เธถเธเธเนเธญเธกเธนเธฅเธฅเธเนเธเนเธเธฅเน JSON เนเธ”เธขเธ•เธฃเธ
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
      
      // เนเธชเธ”เธเธเนเธญเธเธงเธฒเธกเธชเธณเน€เธฃเนเธ
      setSaveMessage({ type: 'success', text: 'เธเธฑเธเธ—เธถเธเธเนเธญเธกเธนเธฅเธชเธณเน€เธฃเนเธ' });
      setTimeout(() => setSaveMessage(null), 3000);
      
      // เธฃเธตเนเธซเธฅเธ”เธซเธเนเธฒเน€เธงเนเธเธซเธฅเธฑเธเธเธฒเธเธเธฑเธเธ—เธถเธเธชเธณเน€เธฃเนเธ
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      console.error('Error saving data:', err);
      setSaveMessage({ type: 'error', text: `เน€เธเธดเธ”เธเนเธญเธเธดเธ”เธเธฅเธฒเธ”: ${err.message}` });
    } finally {
      setIsSaving(false);
    }
  };

  // เธเธญเธกเนเธเน€เธเธเธ•เนเธชเธณเธซเธฃเธฑเธเนเธชเธ”เธเธเนเธญเธเธงเธฒเธกเธ—เธตเนเนเธเนเนเธเนเธ”เน
  const EditableText = ({ path, value, type = 'text', className = '' }) => {
    const isEditing = activeEdit && activeEdit.path === path;
    
    if (!editMode) {
      return <span className={className}>{value}</span>;
    }
    
    if (isEditing) {
      if (type === 'textarea') {
        return (
          <div className="relative inline-block w-full">
            <textarea
              ref={editInputRef}
              className="w-full p-2 border border-blue-500 rounded bg-white text-gray-800"
              value={activeEdit.value}
              onChange={(e) => setActiveEdit({ ...activeEdit, value: e.target.value })}
              rows={3}
            />
            <div className="absolute right-0 top-0 flex">
              <button
                className="bg-green-500 text-white p-1 rounded-tr"
                onClick={() => saveEdit(activeEdit.value)}
              >
                <FaSave size={16} />
              </button>
              <button
                className="bg-red-500 text-white p-1 rounded-br"
                onClick={cancelEditing}
              >
                <FaTimes size={16} />
              </button>
            </div>
          </div>
        );
      }
      
      return (
        <div className="relative inline-block">
          <input
            ref={editInputRef}
            type="text"
            className="p-1 border border-blue-500 rounded bg-white text-gray-800"
            value={activeEdit.value}
            onChange={(e) => setActiveEdit({ ...activeEdit, value: e.target.value })}
          />
          <div className="absolute right-0 top-0 flex">
            <button
              className="bg-green-500 text-white p-1 rounded-tr"
              onClick={() => saveEdit(activeEdit.value)}
            >
              <FaSave size={12} />
            </button>
            <button
              className="bg-red-500 text-white p-1 rounded-br"
              onClick={cancelEditing}
            >
              <FaTimes size={12} />
            </button>
          </div>
        </div>
      );
    }
    
    return (
      <span 
        className={`${className} relative group cursor-pointer hover:bg-blue-50 border border-transparent hover:border-blue-200 rounded px-1`}
        onClick={() => startEditing(path, value)}
      >
        {value}
        <span className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 bg-blue-500 text-white rounded-full p-1">
          <FaEdit size={12} />
        </span>
      </span>
    );
  };
  
  // เธเธญเธกเนเธเน€เธเธเธ•เนเธชเธณเธซเธฃเธฑเธเนเธชเธ”เธเธฃเธนเธเธ เธฒเธเธ—เธตเนเนเธเนเนเธเนเธ”เน
  const EditableImage = ({ path, src, alt, width, height, className = '' }) => {
    const isEditing = activeEdit && activeEdit.path === path;
    const [uploading, setUploading] = useState(false);
    const fileInputRef = useRef(null);
    
    const handleFileUpload = async (e) => {
      if (!e.target.files || e.target.files.length === 0) return;
      
      const file = e.target.files[0];
      setUploading(true);
      
      const formData = new FormData();
      formData.append('file', file);
      
      try {
        const response = await fetch('/api/upload', {
          method: 'POST',
          body: formData,
        });
        
        const result = await response.json();
        
        if (result.success) {
          setActiveEdit({...activeEdit, value: result.url});
        } else {
          alert('เธญเธฑเธเนเธซเธฅเธ”เนเธกเนเธชเธณเน€เธฃเนเธ: ' + (result.error || 'เน€เธเธดเธ”เธเนเธญเธเธดเธ”เธเธฅเธฒเธ”เธ—เธตเนเนเธกเนเธ—เธฃเธฒเธเธชเธฒเน€เธซเธ•เธธ'));
        }
      } catch (error) {
        console.error('เน€เธเธดเธ”เธเนเธญเธเธดเธ”เธเธฅเธฒเธ”เนเธเธเธฒเธฃเธญเธฑเธเนเธซเธฅเธ”เนเธเธฅเน:', error);
        alert('เน€เธเธดเธ”เธเนเธญเธเธดเธ”เธเธฅเธฒเธ”เนเธเธเธฒเธฃเธญเธฑเธเนเธซเธฅเธ”เนเธเธฅเน');
      } finally {
        setUploading(false);
      }
    };
    
    if (!editMode) {
      return (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
        />
      );
    }
    
    if (isEditing) {
      return (
        <div className="relative p-4 border-2 border-blue-500 rounded bg-white shadow-lg w-full max-w-md">
          <h3 className="font-bold text-lg mb-2">เนเธเนเนเธเธฃเธนเธเธ เธฒเธ</h3>
          
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">URL เธฃเธนเธเธ เธฒเธ</label>
            <input
              ref={editInputRef}
              type="text"
              className="p-2 border rounded w-full mb-2"
              value={activeEdit.value}
              onChange={(e) => setActiveEdit({ ...activeEdit, value: e.target.value })}
              placeholder="เนเธชเน URL เธฃเธนเธเธ เธฒเธ"
            />
            
            <div className="flex items-center space-x-2">
              <button 
                onClick={() => fileInputRef.current?.click()} 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors flex items-center"
                disabled={uploading}
              >
                {uploading ? 'เธเธณเธฅเธฑเธเธญเธฑเธเนเธซเธฅเธ”...' : 'เธญเธฑเธเนเธซเธฅเธ”เธฃเธนเธเธ เธฒเธ'}
              </button>
              <input 
                type="file" 
                ref={fileInputRef} 
                onChange={handleFileUpload} 
                className="hidden" 
                accept="image/*"
              />
            </div>
          </div>
          
          {/* เนเธชเธ”เธเธ•เธฑเธงเธญเธขเนเธฒเธเธฃเธนเธเธ เธฒเธ */}
          {activeEdit.value && (
            <div className="mb-4">
              <p className="text-sm text-gray-500 mb-1">เธ•เธฑเธงเธญเธขเนเธฒเธ:</p>
              <div className="border rounded p-2 bg-gray-50">
                <img 
                  src={activeEdit.value} 
                  alt="Preview" 
                  className="max-h-40 object-contain mx-auto"
                  onError={(e) => e.target.src = '/images/placeholder.png'}
                />
              </div>
            </div>
          )}
          
          <div className="flex justify-end space-x-2">
            <button
              className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors flex items-center"
              onClick={cancelEditing}
            >
              <FaTimes className="mr-1" /> เธขเธเน€เธฅเธดเธ
            </button>
            <button
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition-colors flex items-center"
              onClick={() => saveEdit(activeEdit.value)}
              disabled={uploading}
            >
              <FaSave className="mr-1" /> เธเธฑเธเธ—เธถเธ
            </button>
          </div>
        </div>
      );
    }
    
    return (
      <div className="relative group cursor-pointer">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          onClick={() => startEditing(path, src)}
        />
        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 bg-blue-500 text-white rounded-full p-1">
          <FaEdit size={16} />
        </div>
      </div>
    );
  };

  // เนเธชเธ”เธเนเธญเธเธญเธเธ•เธฒเธกเธเธทเนเธญ
  const getIconByName = (iconName) => {
    switch(iconName) {
      case 'shopping-cart': return <FaShoppingCart />;
      case 'refresh': return <FaExchangeAlt />;
      case 'cash': return <FaMoneyBillWave />;
      case 'tag': return <FaTag />;
      default: return <FaHome />;
    }
  };
  
  // เธชเธฃเนเธฒเธ Component Placeholder เธชเธณเธซเธฃเธฑเธเนเธชเธ”เธเนเธเนเธซเธกเธ” Admin
  const AdminPlaceholder = ({ title, className = '' }) => (
    <div className={`bg-gray-100 p-4 rounded-lg shadow-sm text-center ${className}`}>
      <p className="text-gray-500 mb-2">{title}</p>
      <p className="text-xs text-gray-400">เธชเนเธงเธเธเธตเนเธเธฐเนเธชเธ”เธเธเธฒเธ Component เธเธฃเธดเธเนเธเธซเธเนเธฒเน€เธงเนเธเนเธเธ•เน</p>
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="spinner-border text-blue-600" role="status">
            <span className="sr-only">เธเธณเธฅเธฑเธเนเธซเธฅเธ”...</span>
          </div>
          <p className="mt-2">เธเธณเธฅเธฑเธเนเธซเธฅเธ”เธเนเธญเธกเธนเธฅ...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-600 mb-2">เน€เธเธดเธ”เธเนเธญเธเธดเธ”เธเธฅเธฒเธ”</h2>
          <p className="mb-4">{error}</p>
          <Link href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            เธเธฅเธฑเธเนเธเธซเธเนเธฒ Admin
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="min-h-screen bg-gray-100 flex">
      {/* Sidebar - เธเธฅเนเธฒเธข WordPress */}
      <div className="w-64 bg-gray-900 text-white min-h-screen">
        <div className="p-4 border-b border-gray-800">
          <h1 className="text-xl font-bold">FinFin Admin</h1>
        </div>
        <nav className="mt-4">
          <div className="px-4 py-2 bg-gray-800 text-white font-medium">เธเธฑเธ”เธเธฒเธฃเน€เธเธทเนเธญเธซเธฒ</div>
          <Link href="/admin/homepage" className="flex items-center px-4 py-3 bg-blue-600 text-white hover:bg-blue-700">
            <FaHome className="mr-3" /> เธซเธเนเธฒเนเธฃเธ
          </Link>
          <Link href="/" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <FaShoppingCart className="mr-3" /> เธชเธดเธเธเนเธฒ
          </Link>
          <Link href="/" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <FaExchangeAlt className="mr-3" /> เธเธฃเธดเธเธฒเธฃ
          </Link>
          <Link href="/" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <FaMoneyBillWave className="mr-3" /> เนเธเธฃเนเธกเธเธฑเนเธ
          </Link>
          <Link href="/" className="flex items-center px-4 py-3 text-gray-300 hover:bg-gray-800">
            <FaTag className="mr-3" /> FAQ
          </Link>
        </nav>
        <div className="absolute bottom-0 left-0 w-64 p-4 bg-gray-900 border-t border-gray-800">
          <Link href="/" className="flex items-center text-gray-300 hover:text-white">
            <FaArrowLeft className="mr-2" /> เธเธฅเธฑเธเนเธเธซเธเนเธฒเน€เธงเนเธเนเธเธ•เน
          </Link>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <div className="py-6 px-8">
          <div className="flex justify-between items-center mb-6 border-b pb-4">
            <h1 className="text-2xl font-semibold text-gray-900">เธเธฑเธ”เธเธฒเธฃเธซเธเนเธฒเนเธฃเธ</h1>
            
            <div className="flex items-center space-x-4">
              <button
                onClick={toggleEditMode}
                className={`px-4 py-2 rounded-md ${editMode ? 'bg-gray-500 hover:bg-gray-600' : 'bg-blue-500 hover:bg-blue-600'} text-white flex items-center`}
              >
                {editMode ? <><FaTimes className="mr-2" /> เธขเธเน€เธฅเธดเธเธเธฒเธฃเนเธเนเนเธ</> : <><FaEdit className="mr-2" /> เนเธเนเนเธเน€เธเธทเนเธญเธซเธฒ</>}
              </button>
              
              {editMode && (
                <button
                  onClick={handleSave}
                  disabled={isSaving}
                  className="px-4 py-2 bg-green-500 hover:bg-green-600 text-white rounded-md flex items-center"
                >
                  {isSaving ? 'เธเธณเธฅเธฑเธเธเธฑเธเธ—เธถเธ...' : <><FaSave className="mr-2" /> เธเธฑเธเธ—เธถเธเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธ</>}
                </button>
              )}
            </div>
          </div>
          
          {saveMessage && (
            <div className={`mb-6 p-4 rounded-md ${saveMessage.type === 'success' ? 'bg-green-100 text-green-800 border border-green-200' : 'bg-red-100 text-red-800 border border-red-200'} flex items-center`}>
              {saveMessage.type === 'success' ? (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
              ) : (
                <svg className="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z" clipRule="evenodd"></path></svg>
              )}
              {saveMessage.text}
            </div>
          )}
          
          {editMode && (
            <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-6">
              <div className="flex">
                <div className="flex-shrink-0">
                  <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                  </svg>
                </div>
                <div className="ml-3">
                  <p className="text-sm text-yellow-700">
                    เธเธธเธ“เธเธณเธฅเธฑเธเธญเธขเธนเนเนเธเนเธซเธกเธ”เนเธเนเนเธ เธเธฅเธดเธเธ—เธตเนเธเนเธญเธเธงเธฒเธกเธซเธฃเธทเธญเธฃเธนเธเธ เธฒเธเน€เธเธทเนเธญเนเธเนเนเธ เนเธฅเธฐเธเธ”เธเธธเนเธก "เธเธฑเธเธ—เธถเธเธเธฒเธฃเน€เธเธฅเธตเนเธขเธเนเธเธฅเธ" เน€เธกเธทเนเธญเน€เธชเธฃเนเธเธชเธดเนเธ
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Preview Content */}
          {data && (
            <div className="bg-white p-4 rounded-lg shadow-md">
              {/* Hero Section with Banner and Form */}
              <div className="bg-blue-600 relative overflow-hidden pb-32">
                {/* Banner */}
                <div className="w-full pt-6 pb-4 flex justify-center">
                  <div className="w-full max-w-5xl px-2">
                    <div className="rounded-xl overflow-hidden shadow-lg">
                      {editMode ? (
                        <EditableImage 
                          path="hero.image"
                          src={data?.hero?.image || "/images/banner1.png"}
                          alt="Promotion Banner"
                          width={1000}
                          height={200}
                          className="w-full h-auto object-cover max-h-32"
                        />
                      ) : (
                        <img 
                          src={data?.hero?.image || "/images/banner1.png"} 
                          alt="Promotion Banner" 
                          className="w-full h-auto object-cover max-h-32"
                        />
                      )}
                    </div>
                  </div>
                </div>
                
                {/* Main Content */}
                <div className="container mx-auto px-4 pt-16 pb-20 relative">
                  <div className="flex justify-start items-center pl-6 md:pl-32 lg:pl-48">
                    <div className="text-white z-10">
                      <h2 className="text-3xl md:text-4xl font-bold">
                        {editMode ? (
                          <EditableText 
                            path="hero.title" 
                            value={data?.hero?.title || "เธเนเธญเธเนเธญเนเธเธเธ—เธตเน เธเธดเธเธเธดเธ"} 
                            className="text-white"
                          />
                        ) : (
                          data?.hero?.title || "เธเนเธญเธเนเธญเนเธเธเธ—เธตเน เธเธดเธเธเธดเธ"
                        )}
                      </h2>
                      <h3 className="text-2xl md:text-3xl font-bold mt-2">
                        {editMode ? (
                          <EditableText 
                            path="hero.subtitle" 
                            value={data?.hero?.subtitle || "เธเนเธฒเธข เนเธง เธเธฑเธงเธฃเน!"}
                            className="text-white"
                          />
                        ) : (
                          data?.hero?.subtitle || "เธเนเธฒเธข เนเธง เธเธฑเธงเธฃเน!"
                        )}
                      </h3>
                      {editMode && (
                        <div className="mt-4">
                          <EditableText 
                            path="hero.description" 
                            value={data?.hero?.description || "เธเธฃเธดเธเธฒเธฃเธเนเธญเธเธชเธดเธเธเนเธฒเนเธญเธ—เธตเธเธฑเนเธเธเธณ เธ”เธญเธเน€เธเธตเนเธขเธ•เนเธณ เธญเธเธธเธกเธฑเธ•เธดเนเธง"}
                            type="textarea"
                            className="text-white text-sm"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="absolute right-[20%] top-[80%] transform -translate-y-1/2">
                    {editMode ? (
                      <EditableImage 
                        path="hero.productImage"
                        src={data?.hero?.productImage || "/images/iphone1.png"}
                        alt="iPhone"
                        width={140}
                        height={280}
                        className="max-w-[140px] drop-shadow-lg"
                      />
                    ) : (
                      <img 
                        src={data?.hero?.productImage || "/images/iphone1.png"} 
                        alt="iPhone" 
                        className="max-w-[140px] drop-shadow-lg"
                      />
                    )}
                  </div>
                </div>
              </div>
              
              {/* Application Form */}
              <div className="py-8 bg-gray-50 -mt-24">
                <div className="container mx-auto px-4">
                  <AdminPlaceholder title="เนเธเธเธเธญเธฃเนเธกเธชเธกเธฑเธเธฃเธชเธดเธเน€เธเธทเนเธญ" />
                </div>
              </div>
              
              {/* Services */}
              <div className="bg-white py-12">
                <div className="container mx-auto px-4">
                  <h2 className="text-center text-2xl md:text-3xl font-bold mb-10">เธเธฃเธดเธเธฒเธฃเธเธญเธเน€เธฃเธฒ</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                    {data.features.map((feature, index) => (
                      <div key={feature.id} className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl shadow-md text-center hover:shadow-lg transition-all duration-300 border border-blue-100">
                        <div className="text-blue-600 text-4xl mb-4 flex justify-center">
                          {getIconByName(feature.icon)}
                          <div className="text-xs text-gray-500 mt-1 absolute top-2 right-2">
                            Icon: <EditableText path={`features[${index}].icon`} value={feature.icon} />
                          </div>
                        </div>
                        <h3 className="text-xl font-semibold mb-2">
                          <EditableText path={`features[${index}].title`} value={feature.title} />
                        </h3>
                        <p className="text-gray-600 text-sm">
                          <EditableText path={`features[${index}].description`} value={feature.description} type="textarea" />
                        </p>
                        <div className="mt-4">
                          <div className="text-xs text-gray-500 mt-2">
                            Link: <EditableText path={`features[${index}].link`} value={feature.link} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Customer Reviews */}
              <div className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-8">เธฃเธตเธงเธดเธงเธเธฒเธเธฅเธนเธเธเนเธฒ</h2>
                  <AdminPlaceholder title="เธฃเธตเธงเธดเธงเธเธฒเธเธฅเธนเธเธเนเธฒ" className="max-w-4xl mx-auto" />
                </div>
              </div>

              {/* Product Showcase */}
              <div className="py-12 bg-white">
                <div className="container mx-auto px-4">
                  <div className="text-center mb-12">
                    <h2 className="text-3xl font-bold mb-4">
                      <EditableText path="productShowcase.title" value={data.productShowcase.title} />
                    </h2>
                    <p className="text-gray-600">
                      <EditableText path="productShowcase.subtitle" value={data.productShowcase.subtitle} />
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {data.productShowcase.products.map((product, index) => (
                      <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-gray-100">
                        <div className="p-6 flex justify-center items-center h-48">
                          <EditableImage 
                            path={`productShowcase.products[${index}].image`}
                            src={product.image}
                            alt={product.name}
                            width={200}
                            height={200}
                            className="h-40 object-contain"
                          />
                        </div>
                        <div className="p-4 border-t bg-gray-50">
                          <h3 className="text-xl font-semibold mb-2 text-center">
                            <EditableText path={`productShowcase.products[${index}].name`} value={product.name} />
                          </h3>
                          <p className="text-blue-600 font-bold mb-2 text-center">
                            เธฟ<EditableText path={`productShowcase.products[${index}].price`} value={product.price} />
                          </p>
                          <div className="text-xs text-gray-500 text-center">
                            Link: <EditableText path={`productShowcase.products[${index}].link`} value={product.link} />
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="text-center mt-10">
                    <button className="bg-blue-600 text-white px-6 py-2 rounded-full font-medium hover:bg-blue-700 transition-colors">
                      <EditableText path="productShowcase.buttonText" value={data.productShowcase.buttonText} />
                    </button>
                    <div className="text-xs text-gray-500 mt-2">
                      Link: <EditableText path="productShowcase.buttonLink" value={data.productShowcase.buttonLink} />
                    </div>
                  </div>
                </div>
              </div>

              {/* Testimonials */}
              <div className="py-12 bg-gray-50">
                <div className="container mx-auto px-4">
                  <h2 className="text-3xl font-bold text-center mb-8">เธเธฃเธฐเธชเธเธเธฒเธฃเธ“เนเธเธฒเธเธฅเธนเธเธเนเธฒ</h2>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
                    {data.testimonials.map((testimonial, index) => (
                      <div key={testimonial.id} className="bg-blue-50 p-6 rounded-xl shadow-sm hover:shadow-md transition-all duration-300 border border-blue-100">
                        <div className="flex flex-col items-center mb-4">
                          <div className="mb-4">
                            <EditableImage 
                              path={`testimonials[${index}].image`}
                              src={testimonial.image}
                              alt={testimonial.name}
                              width={80}
                              height={80}
                              className="rounded-full border-4 border-white shadow-md"
                            />
                          </div>
                          <h3 className="font-semibold text-lg text-center">
                            <EditableText path={`testimonials[${index}].name`} value={testimonial.name} />
                          </h3>
                        </div>
                        <div className="text-gray-600 text-center italic">
                          <EditableText path={`testimonials[${index}].text`} value={testimonial.text} type="textarea" />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* FAQ */}
              <div className="py-12 bg-white">
                <div className="container mx-auto px-4 text-center">
                  <h2 className="text-3xl font-bold mb-4">เธเธณเธ–เธฒเธกเธ—เธตเนเธเธเธเนเธญเธข</h2>
                  <AdminPlaceholder title="เธเธณเธ–เธฒเธกเธ—เธตเนเธเธเธเนเธญเธข" className="max-w-4xl mx-auto" />
                </div>
              </div>
              
              {/* Service Banner / Call to Action */}
              <div className="py-12 bg-gradient-to-r from-blue-600 to-blue-800 text-white rounded-lg overflow-hidden my-8 mx-4">
                <div className="container mx-auto px-4">
                  <div className="flex flex-col md:flex-row items-center justify-between">
                    <div className="md:w-1/2 mb-8 md:mb-0 md:pr-8">
                      <h2 className="text-3xl font-bold mb-4">
                        <EditableText path="callToAction.title" value={data.callToAction.title} className="text-white" />
                      </h2>
                      <p className="mb-6 text-blue-100">
                        <EditableText path="callToAction.description" value={data.callToAction.description} className="text-blue-100" />
                      </p>
                      <button className="bg-white text-blue-600 px-6 py-3 rounded-full font-medium hover:bg-gray-100 transition-colors shadow-md">
                        <EditableText path="callToAction.buttonText" value={data.callToAction.buttonText} />
                      </button>
                      <div className="text-xs text-blue-200 mt-2">
                        Link: <EditableText path="callToAction.buttonLink" value={data.callToAction.buttonLink} />
                      </div>
                    </div>
                    <div className="md:w-1/2 flex justify-center">
                      <EditableImage 
                        path="callToAction.image"
                        src={data.callToAction.image}
                        alt="Call to Action"
                        width={400}
                        height={300}
                        className="rounded-lg shadow-lg object-cover"
                      />
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Footer Placeholder */}
              <div className="bg-gray-800 text-white py-8">
                <div className="container mx-auto px-4 text-center">
                  <AdminPlaceholder title="เธชเนเธงเธเธ—เนเธฒเธขเน€เธงเนเธเนเธเธ•เน" className="text-white" />
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
