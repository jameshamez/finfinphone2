"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";

export default function AdminProductsPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);

  // โหลดข้อมูลสินค้า
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/cms/products');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  // บันทึกข้อมูล
  const handleSave = async () => {
    setIsSaving(true);
    setSaveMessage(null);
    
    try {
      const response = await fetch('/api/cms/products', {
        method: 'PUT',
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
    } catch (err) {
      setSaveMessage({ type: 'error', text: `เกิดข้อผิดพลาด: ${err.message}` });
    } finally {
      setIsSaving(false);
    }
  };

  // อัปเดตข้อมูลสินค้า
  const updateProduct = (index, field, value) => {
    const updatedData = { ...data };
    updatedData.iphones[index][field] = value;
    setData(updatedData);
  };

  // เพิ่มสินค้าใหม่
  const addProduct = () => {
    const updatedData = { ...data };
    const newId = Math.max(...updatedData.iphones.map(p => p.id)) + 1;
    
    updatedData.iphones.push({
      id: newId,
      model: "iPhone รุ่นใหม่",
      image: "/images/iphone13.jpg",
      isNew: false,
      price: "0.00",
      fullName: "[B] Apple iPhone รุ่นใหม่"
    });
    
    setData(updatedData);
  };

  // ลบสินค้า
  const removeProduct = (index) => {
    const updatedData = { ...data };
    updatedData.iphones.splice(index, 1);
    setData(updatedData);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="text-center">
          <div className="spinner-border text-blue-600" role="status">
            <span className="sr-only">กำลังโหลด...</span>
          </div>
          <p className="mt-2">กำลังโหลดข้อมูล...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-red-600 mb-2">เกิดข้อผิดพลาด</h2>
          <p className="mb-4">{error}</p>
          <Link href="/admin" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
            กลับไปหน้า Admin
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-100">
      <div className="bg-blue-600 text-white p-4 shadow-md">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">จัดการข้อมูลสินค้า iPhone</h1>
            <Link href="/admin" className="text-white hover:text-blue-200">
              กลับไปหน้า Admin
            </Link>
          </div>
        </div>
      </div>

      <div className="container mx-auto py-8 px-4">
        {saveMessage && (
          <div className={`p-4 mb-4 rounded ${saveMessage.type === 'success' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
            {saveMessage.text}
          </div>
        )}

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <div className="flex justify-between items-center mb-4">
            <h2 className="text-xl font-semibold">สินค้า iPhone ทั้งหมด</h2>
            <div className="flex space-x-2">
              <button
                onClick={addProduct}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                เพิ่มสินค้าใหม่
              </button>
              <button
                onClick={handleSave}
                disabled={isSaving}
                className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
              >
                {isSaving ? 'กำลังบันทึก...' : 'บันทึกการเปลี่ยนแปลง'}
              </button>
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รูปภาพ</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รุ่น</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อเต็ม</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ราคา</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">สินค้าใหม่</th>
                  <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">จัดการ</th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {data.iphones.map((product, index) => (
                  <tr key={product.id}>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="relative h-12 w-12">
                        <Image 
                          src={product.image} 
                          alt={product.model}
                          width={48}
                          height={48}
                          className="object-cover rounded"
                        />
                      </div>
                      <input
                        type="text"
                        value={product.image}
                        onChange={(e) => updateProduct(index, 'image', e.target.value)}
                        className="mt-1 block w-full text-xs p-1 border rounded"
                        placeholder="Path to image"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        value={product.model}
                        onChange={(e) => updateProduct(index, 'model', e.target.value)}
                        className="block w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        value={product.fullName}
                        onChange={(e) => updateProduct(index, 'fullName', e.target.value)}
                        className="block w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="text"
                        value={product.price}
                        onChange={(e) => updateProduct(index, 'price', e.target.value)}
                        className="block w-full p-2 border rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <input
                        type="checkbox"
                        checked={product.isNew}
                        onChange={(e) => updateProduct(index, 'isNew', e.target.checked)}
                        className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                      />
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <button
                        onClick={() => removeProduct(index)}
                        className="text-red-600 hover:text-red-800"
                      >
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                        </svg>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
