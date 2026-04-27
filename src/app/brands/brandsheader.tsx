import Link from "next/link";
import { FaTags } from "react-icons/fa";

export default function BrandsHeader() {
  return (
    <div className="container mx-auto px-4 py-12 sm:py-16 bg-linear-to-br from-violet-600 via-violet-500 to-purple-400">
    <nav className="flex items-center gap-2 text-sm text-white/70 mb-6">
      <Link className="hover:text-white transition-colors" href="/">Home</Link>
      <span className="text-white/40">/</span>
      <span className="text-white font-medium">Brands</span>
    </nav>

    <div className="flex items-center gap-5">
      <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
        <FaTags className="text-3xl text-white" />
      </div>

      <div>
        <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-white">Top Brands</h1>
        <p className="text-white/80 mt-1">Shop from your favorite brands</p>
      </div>
    </div>
  </div>
  );
}