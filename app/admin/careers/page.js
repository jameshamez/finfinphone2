"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

export default function AdminCareersPage() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeJobIndex, setActiveJobIndex] = useState(null);
  const [isSaving, setIsSaving] = useState(false);
  const [saveMessage, setSaveMessage] = useState(null);

  // โหลดข้อมูลตำแหน่งงาน
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/cms/careers');
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
      const response = await fetch('/api/cms/careers', {
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

  // อัปเดตข้อมูลตำแหน่งงาน
  const updateJob = (index, field, value) => {
    const updatedData = { ...data };
    updatedData.jobs[index].title = value;
    setData(updatedData);
  };

  // อัปเดตรายละเอียดงาน
  const updateJobDetail = (jobIndex, detailType, itemIndex, value) => {
    const updatedData = { ...data };
    updatedData.jobs[jobIndex].details[detailType][itemIndex] = value;
    setData(updatedData);
  };

  // เพิ่มรายการในรายละเอียดงาน
  const addDetailItem = (jobIndex, detailType) => {
    const updatedData = { ...data };
    updatedData.jobs[jobIndex].details[detailType].push('');
    setData(updatedData);
  };

  // ลบรายการในรายละเอียดงาน
  const removeDetailItem = (jobIndex, detailType, itemIndex) => {
    const updatedData = { ...data };
    updatedData.jobs[jobIndex].details[detailType].splice(itemIndex, 1);
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
            <h1 className="text-2xl font-bold">จัดการข้อมูลตำแหน่งงาน</h1>
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
            <h2 className="text-xl font-semibold">ตำแหน่งงานทั้งหมด</h2>
            <button
              onClick={handleSave}
              disabled={isSaving}
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:bg-blue-300"
            >
              {isSaving ? 'กำลังบันทึก...' : 'บันทึกการเปลี่ยนแปลง'}
            </button>
          </div>

          <div className="space-y-4">
            {data.jobs.map((job, index) => (
              <div key={job.id} className="border rounded-lg overflow-hidden">
                <div 
                  className="bg-gray-50 p-4 flex justify-between items-center cursor-pointer"
                  onClick={() => setActiveJobIndex(activeJobIndex === index ? null : index)}
                >
                  <div className="flex-grow">
                    <input
                      type="text"
                      value={job.title}
                      onChange={(e) => updateJob(index, 'title', e.target.value)}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <svg 
                    className={`w-5 h-5 transform transition-transform ${activeJobIndex === index ? 'rotate-180' : ''}`}
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24" 
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                  </svg>
                </div>

                {activeJobIndex === index && (
                  <div className="p-4 border-t">
                    <div className="mb-4">
                      <h3 className="font-medium text-blue-600 mb-2">รายละเอียดงาน</h3>
                      {job.details.description.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center mb-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => updateJobDetail(index, 'description', itemIndex, e.target.value)}
                            className="flex-grow p-2 border rounded"
                          />
                          <button
                            onClick={() => removeDetailItem(index, 'description', itemIndex)}
                            className="ml-2 text-red-600 hover:text-red-800"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => addDetailItem(index, 'description')}
                        className="mt-2 text-blue-600 hover:text-blue-800"
                      >
                        + เพิ่มรายละเอียด
                      </button>
                    </div>

                    <div className="mb-4">
                      <h3 className="font-medium text-blue-600 mb-2">คุณสมบัติ</h3>
                      {job.details.qualifications.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center mb-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => updateJobDetail(index, 'qualifications', itemIndex, e.target.value)}
                            className="flex-grow p-2 border rounded"
                          />
                          <button
                            onClick={() => removeDetailItem(index, 'qualifications', itemIndex)}
                            className="ml-2 text-red-600 hover:text-red-800"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => addDetailItem(index, 'qualifications')}
                        className="mt-2 text-blue-600 hover:text-blue-800"
                      >
                        + เพิ่มคุณสมบัติ
                      </button>
                    </div>

                    <div>
                      <h3 className="font-medium text-blue-600 mb-2">สวัสดิการ</h3>
                      {job.details.benefits.map((item, itemIndex) => (
                        <div key={itemIndex} className="flex items-center mb-2">
                          <input
                            type="text"
                            value={item}
                            onChange={(e) => updateJobDetail(index, 'benefits', itemIndex, e.target.value)}
                            className="flex-grow p-2 border rounded"
                          />
                          <button
                            onClick={() => removeDetailItem(index, 'benefits', itemIndex)}
                            className="ml-2 text-red-600 hover:text-red-800"
                          >
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                            </svg>
                          </button>
                        </div>
                      ))}
                      <button
                        onClick={() => addDetailItem(index, 'benefits')}
                        className="mt-2 text-blue-600 hover:text-blue-800"
                      >
                        + เพิ่มสวัสดิการ
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
