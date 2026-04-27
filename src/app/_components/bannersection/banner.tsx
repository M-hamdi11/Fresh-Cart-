import Link from 'next/link';
import { FaArrowRight } from "react-icons/fa6";

export default function BannerSection() {
  return (
    <section className="py-10">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Banner 1: Organic Fruits */}
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-emerald-500 to-emerald-700 p-8 text-white shadow-xl">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span>🔥</span>
                <span>Deal of the Day</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
                Fresh Organic Fruits
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Get up to <span className="font-bold text-white underline decoration-yellow-400">40% off</span> on selected organic fruits
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="text-4xl font-black italic">40% OFF</div>
                <div className="text-sm text-white/80 bg-black/10 px-3 py-1 rounded-lg border border-white/20">
                  Use code: <span className="font-bold text-white tracking-widest">ORGANIC40</span>
                </div>
              </div>
              
              <Link 
                href="/products" 
                className="inline-flex items-center gap-3 bg-white text-emerald-700 px-8 py-3.5 rounded-full font-bold hover:bg-emerald-50 transition-all shadow-lg active:scale-95"
              >
                Shop Now
                <FaArrowRight />
              </Link>
            </div>
          </div>

          {/* Banner 2: Exotic Vegetables */}
          <div className="relative overflow-hidden rounded-3xl bg-linear-to-br from-orange-400 to-rose-500 p-8 text-white shadow-xl">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-white/10 rounded-full translate-y-1/2 -translate-x-1/2"></div>
            
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 bg-white/20 px-4 py-1.5 rounded-full text-sm font-medium mb-6 backdrop-blur-sm">
                <span>✨</span>
                <span>New Arrivals</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-extrabold mb-3 tracking-tight">
                Exotic Vegetables
              </h3>
              <p className="text-white/90 mb-6 text-lg">
                Discover our latest collection of premium vegetables
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <div className="text-4xl font-black italic">25% OFF</div>
                <div className="text-sm text-white/80 bg-black/10 px-3 py-1 rounded-lg border border-white/20">
                  Use code: <span className="font-bold text-white tracking-widest">FRESH25</span>
                </div>
              </div>
              
              <Link 
                href="/products?sort=newest" 
                className="inline-flex items-center gap-3 bg-white text-orange-600 px-8 py-3.5 rounded-full font-bold hover:bg-orange-50 transition-all shadow-lg active:scale-95"
              >
                Explore Now
                <FaArrowRight />
              </Link>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}