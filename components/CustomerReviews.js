"use client";

import React from 'react';
import Image from 'next/image';

export default function CustomerReviews() {
  const reviews = [
    {
      id: 1,
      image: "/images/review1.png",
    },
    {
      id: 2,
      image: "/images/review2.png",
    },
    {
      id: 3,
      image: "/images/review3.png",
    }
  ];

  return (
    <div className="bg-blue-700 py-10 my-10">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Header */}
        <div className="flex items-center mb-8">
          {/* Thumbs up icon */}
          <div className="mr-3">
            <svg className="h-16 w-16 text-blue-300" viewBox="0 0 24 24" fill="currentColor">
              <path d="M1 21h4V9H1v12zm22-11c0-1.1-.9-2-2-2h-6.31l.95-4.57.03-.32c0-.41-.17-.79-.44-1.06L14.17 1 7.59 7.59C7.22 7.95 7 8.45 7 9v10c0 1.1.9 2 2 2h9c.83 0 1.54-.5 1.84-1.22l3.02-7.05c.09-.23.14-.47.14-.73v-1.91l-.01-.01L23 10z" />
            </svg>
          </div>
          <div>
            <h2 className="text-2xl md:text-4xl font-bold text-white">รีวิวจากลูกค้า</h2>
            <p className="text-lg text-white mt-1">นี่คือส่วนหนึ่งจากลูกค้าจริงที่ไว้ใจให้ฟินฟินดูแล</p>
          </div>
        </div>

        {/* Reviews Grid */}
        <div className="relative">
          {/* Navigation arrow - left */}
          <button 
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-blue-800 hover:bg-blue-900 p-3 rounded-full focus:outline-none transition-colors"
            aria-label="Previous reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Reviews */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-10">
            {reviews.map((review) => (
              <div key={review.id} className="relative">
                <div className="rounded-lg overflow-hidden shadow-lg relative h-[250px]">
                  <img 
                    src={review.image} 
                    alt={review.name || 'Customer review'} 
                    className="w-full h-full object-cover"
                  />
                  
                  {/* Badge */}
                  {review.badge && (
                    <div className="absolute top-4 right-4">
                      <span className="bg-yellow-400 text-black text-sm font-medium px-4 py-1 rounded-full shadow-md">
                        {review.badge}
                      </span>
                    </div>
                  )}
                  
                  {/* Text overlay at bottom */}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black to-transparent pt-10 pb-3 px-4">
                    {review.name && <h3 className="text-white text-lg font-bold">{review.name}</h3>}
                    {review.highlight && <p className="text-yellow-400 text-sm font-semibold">{review.highlight}</p>}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation arrow - right */}
          <button 
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-blue-800 hover:bg-blue-900 p-3 rounded-full focus:outline-none transition-colors"
            aria-label="Next reviews"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
