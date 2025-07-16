import React from 'react';
import Image from 'next/image';

export default function Products() {
  const articles = [
    {
      id: 1,
      title: 'วิดีโอคอลใน 5 วิน',
      subtitle: 'วิธีการกดวิดีโอคอล ง่าย ๆ ใน 5 วิน',
      image: '/images/article1.png',
    },
    {
      id: 2,
      title: '7 เทคนิคที่คนพูดภาษาอังกฤษเก่ง',
      subtitle: 'เทคนิคพิเศษที่ทำให้พูดภาษาอังกฤษได้คล่อง',
      image: '/images/article2.png',
    },
    {
      id: 3,
      title: '3 เทคนิคออมเงินให้ได้ผลเกินคาด',
      subtitle: 'ออมเงินให้ได้ผลเกินคาด',
      image: '/images/article3.png',
    },
    {
      id: 4,
      title: 'ศิลปะ Say No ขั้นเทพ',
      subtitle: 'เบี่ยงคู่คุยคนยืมเงิน',
      image: '/images/article4.png',
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold mb-2 text-gray-800">บทความที่น่าสนใจ</h2>
          <div className="w-16 h-1 bg-primary mx-auto mt-2 mb-4"></div>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {articles.map((article) => (
            <div key={article.id} className="bg-white rounded-lg overflow-hidden hover:shadow-lg transition-shadow">
              {/* Article Image */}
              <div className="relative">
                <Image
                  src={article.image}
                  alt={article.title}
                  width={300}
                  height={200}
                  className="w-full h-auto"
                />
                
                {/* Article Tag */}
                <div className="absolute top-3 left-3">
                  <div className={`${article.tagColor} text-primary text-xs font-bold px-2 py-1 rounded-md`}>
                    {article.tag}
                  </div>
                </div>
              </div>
              
              {/* Article Info */}
              <div className="p-4">
                <h3 className="font-bold text-lg text-gray-800 mb-2">{article.title}</h3>
                <p className="text-sm text-gray-600">{article.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        {/* "View All" Button */}
        <div className="text-center mt-8">
          <button className="bg-primary text-white hover:bg-blue-700 transition-colors font-medium py-2 px-8 rounded">
            ดูเพิ่มเติม
          </button>
        </div>
      </div>
    </section>
  );
}
