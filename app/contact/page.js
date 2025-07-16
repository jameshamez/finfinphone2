import Image from 'next/image';
import Link from 'next/link';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

export default function ArticlesPage() {
  return (
    <main>
      <Navbar />
      
      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <h1 className="text-3xl font-bold text-center mb-6">บทความ</h1>
        
        {/* Tab Navigation */}
        <div className="border-b border-gray-200 mb-6">
          <div className="flex space-x-4">
            <div className="border-b-2 border-blue-600 pb-2 px-1">
              <span className="font-medium text-blue-600">บทความเด่น</span>
            </div>
          </div>
        </div>
        
        {/* Main Promotion Banner */}
        <div className="flex flex-col md:flex-row justify-center gap-4 mb-6 max-w-5xl mx-auto">
          {/* Left Big Banner */}
          <div className="md:w-5/12 px-2">
            <div className="rounded-md overflow-hidden shadow-sm">
              <img 
                src="/images/finfinarticle1.png" 
                alt="เพื่อนชวนเพื่อน" 
                className="w-full h-auto" 
              />
            </div>
            <div className="text-xs text-black-1000-bold mt-1">โปรโมชั่นพิเศษ การใช้เงินสูงสุด 5,000 บาท เมื่อชวนเพื่อน 300 บาท</div>
          </div>
          
          {/* Right Side Banners */}
          <div className="md:w-3/12 flex flex-col space-y-4">
            {/* Banner 1 */}
            <div>
              <div className="rounded-md overflow-hidden shadow-sm">
                <img 
                  src="/images/finfinarticle2.png" 
                  alt="แนวคิดที่คนรวยทำซ้ำ" 
                  className="w-full h-auto" 
                />
              </div>
              <div className="text-xs text-black-1000-bold mt-1">7 วิธีที่คนรวยทำซ้ำ แต่คนทั่วไปมองข้าม</div>
            </div>
            
            {/* Banner 2 */}
            <div>
              <div className="rounded-md overflow-hidden shadow-sm">
                <img 
                  src="/images/finfinarticle3.png" 
                  alt="3 วิธี Say No" 
                  className="w-full h-auto" 
                />
              </div>
              <div className="text-xs text-black-500 mt-1">3 วิธี Say No เมื่อต้องปฏิเสธเรื่องการเงิน เพื่อชีวิตที่ดีขึ้น</div>
            </div>
          </div>
        </div>
        
        {/* Articles Categories */}
        <div className="mb-6">
          <div className="flex border-b border-gray-200">
            <div className="text-blue-600 font-medium pb-2 px-2 border-b-2 border-blue-600">
              บทความแนะนำ
            </div>
          </div>
        </div>
        
        {/* Featured Articles - Row 1 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Link href={`/article/${i}`} key={i}>
              <div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={`/images/finfinarticle3.png`} 
                    alt={`บทความแนะนำ ${i}`} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Regular Articles */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Link href={`/article/${i+4}`} key={i}>
              <div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={`/images/finfinarticle3.png`} 
                    alt={`บทความ ${i+4}`} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Row 3 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Link href={`/article/${i+8}`} key={i}>
              <div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={`/images/finfinarticle3.png`} 
                    alt={`บทความ ${i+8}`} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Row 4 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Link href={`/article/${i+12}`} key={i}>
              <div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={`/images/finfinarticle3.png`} 
                    alt={`บทความ ${i+12}`} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Row 5 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Link href={`/article/${i+16}`} key={i}>
              <div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={`/images/finfinarticle3.png`} 
                    alt={`บทความ ${i+16}`} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Row 6 */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3, 4].map((i) => (
            <Link href={`/article/${i+20}`} key={i}>
              <div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={`/images/finfinarticle3.png`} 
                    alt={`บทความ ${i+20}`} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
        
        {/* Last Row - 3 items */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[1, 2, 3].map((i) => (
            <Link href={`/article/${i+24}`} key={i}>
              <div>
                <div className="rounded-lg overflow-hidden shadow-sm">
                  <img 
                    src={`/images/finfinarticle3.png`} 
                    alt={`บทความ ${i+24}`} 
                    className="w-full h-auto" 
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      
      <Footer />
    </main>
  );
}
