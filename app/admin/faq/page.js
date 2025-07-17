"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminFaqPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeFaqIndex, setActiveFaqIndex] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);

  // โหลดข้อมูล FAQ
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/cms/faq');
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
      const response = await fetch('/api/cms/faq', {
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

  // อัปเดตข้อมูล FAQ
  const updateFaq = (index, field, value) => {
    const updatedData = { ...data };
    updatedData.faqs[index][field] = value;
    setData(updatedData);
  };

  // เพิ่ม FAQ ใหม่
  const addFaq = () => {
    const updatedData = { ...data };
    const newId = Math.max(...updatedData.faqs.map(f => f.id)) + 1;
    
    updatedData.faqs.push({
      id: newId,
      question: "คำถามใหม่",
      answer: "คำตอบใหม่"
    });
    
    setData(updatedData);
  };

  // ลบ FAQ
  const removeFaq = (index) => {
    const updatedData = { ...data };
    updatedData.faqs.splice(index, 1);
    setData(updatedData);
  };

  // อัปเดตข้อมูลการลงทะเบียน
  const updateRegistrationForm = (field, value) => {
    const updatedData = { ...data };
    updatedData.registrationForm[field] = value;
    setData(updatedData);
  };

  // อัปเดตตัวเลือกการลงทะเบียน
  const updateRegistrationOption = (index, field, value) => {
    const updatedData = { ...data };
    updatedData.registrationForm.options[index][field] = value;
    setData(updatedData);
  };

  // อัปเดตข้อมูลติดต่อ
  const updateContactInfo = (field, value) => {
    const updatedData = { ...data };
    updatedData.contactInfo[field] = value;
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
            <h1 className="text-2xl font-bold">จัดการข้อมูล FAQ และการลงทะเบียน</h1>
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
            <h2 className="text-xl font-semibold">คำถามที่พบบ่อย (FAQ)</h2>
            <div className="flex space-x-2">
              <button
                onClick={addFaq}
                className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
              >
                เพิ่มคำถามใหม่
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

          <div className="space-y-4">
            {data.faqs.map((faq, index) => (
              <div key={faq.id} className="border rounded-lg overflow-hidden">
                <div 
                  className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => setActiveFaqIndex(activeFaqIndex === index ? null : index)}
                >
                  <div className="flex-grow">
                    <input
                      type="text"
                      value={faq.question}
                      onChange={(e) => updateFaq(index, 'question', e.target.value)}
                      className="w-full p-2 border rounded"
                      onClick={(e) => e.stopPropagation()}
                    />
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        removeFaq(index);
                      }}
                      className="text-red-600 hover:text-red-800"
                    >
                      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                      </svg>
                    </button>
                    <svg 
                      className={`w-5 h-5 transform transition-transform ${activeFaqIndex === index ? 'rotate-180' : ''}`}
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24" 
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                    </svg>
                  </div>
                </div>

                {activeFaqIndex === index && (
                  <div className="p-4 border-t">
                    <label className="block mb-2 text-sm font-medium text-gray-700">คำตอบ</label>
                    <textarea
                      value={faq.answer}
                      onChange={(e) => updateFaq(index, 'answer', e.target.value)}
                      className="w-full p-2 border rounded h-32"
                    ></textarea>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">ข้อมูลการลงทะเบียน</h2>
          
          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">หัวข้อฟอร์ม</label>
            <input
              type="text"
              value={data.registrationForm.title}
              onChange={(e) => updateRegistrationForm('title', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-2 text-sm font-medium text-gray-700">ข้อความปุ่มส่งข้อมูล</label>
            <input
              type="text"
              value={data.registrationForm.submitButton}
              onChange={(e) => updateRegistrationForm('submitButton', e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>

          <h3 className="font-medium text-blue-600 mb-2 mt-4">ตัวเลือกการลงทะเบียน</h3>
          <div className="space-y-2 mb-4">
            {data.registrationForm.options.map((option, index) => (
              <div key={option.id} className="flex items-center space-x-2">
                <input
                  type="text"
                  value={option.text}
                  onChange={(e) => updateRegistrationOption(index, 'text', e.target.value)}
                  className="flex-grow p-2 border rounded"
                />
                <input
                  type="text"
                  value={option.value}
                  onChange={(e) => updateRegistrationOption(index, 'value', e.target.value)}
                  className="w-32 p-2 border rounded"
                  placeholder="value"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-4">ข้อมูลการติดต่อ</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">Facebook</label>
              <input
                type="text"
                value={data.contactInfo.facebook}
                onChange={(e) => updateContactInfo('facebook', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">LINE</label>
              <input
                type="text"
                value={data.contactInfo.line}
                onChange={(e) => updateContactInfo('line', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <label className="block mb-2 text-sm font-medium text-gray-700">เบอร์โทรศัพท์</label>
              <input
                type="text"
                value={data.contactInfo.phone}
                onChange={(e) => updateContactInfo('phone', e.target.value)}
                className="w-full p-2 border rounded"
              />
            </div>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={isSaving}
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
          >
            {isSaving ? 'กำลังบันทึก...' : 'บันทึกการเปลี่ยนแปลงทั้งหมด'}
          </button>
        </div>
      </div>
    </div>
  );
}
