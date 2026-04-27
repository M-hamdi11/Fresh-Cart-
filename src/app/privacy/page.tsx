// app/privacy/page.tsx
import React from 'react';
import Link from 'next/link';
import { 
  FaShieldHalved, 
  FaDatabase, 
  FaUserShield, 
  FaLock, 
  FaShareNodes, 
  FaUserCheck, 
  FaCookie, 
  FaClock, 
  FaEnvelope,
  FaArrowLeft
} from 'react-icons/fa6';

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link className="hover:text-white transition-colors duration-200" href="/">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Privacy Policy</span>
          </nav>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-emerald-900/30 ring-1 ring-white/30">
              <FaShieldHalved className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Privacy Policy</h1>
              <p className="text-white/80 mt-2 text-lg">Last updated: February 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Intro Banner */}
        <div className="bg-gradient-to-r from-emerald-50 to-emerald-100/50 border border-emerald-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-500 flex items-center justify-center flex-shrink-0 shadow-lg shadow-emerald-500/25">
              <FaShieldHalved className="text-xl text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-emerald-900 mb-2">Your Privacy Matters</h2>
              <p className="text-emerald-800 leading-relaxed">
                This Privacy Policy describes how FreshCart collects, uses, and protects your personal information when you use our services. We are committed to ensuring that your privacy is protected.
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          {/* Article 1 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaDatabase className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 1</span>
                <h2 className="text-xl font-bold text-gray-900">Information We Collect</h2>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md mt-0.5 flex-shrink-0">1.1</span>
                <p className="text-sm"><strong className="text-gray-800">Personal Data: </strong>Name, email address, phone number, and shipping address.</p>
              </div>
              <div className="flex items-start gap-3 text-gray-600 leading-relaxed">
                <span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md mt-0.5 flex-shrink-0">1.2</span>
                <p className="text-sm"><strong className="text-gray-800">Payment Data: </strong>Processed securely through our payment providers.</p>
              </div>
            </div>
          </section>

          {/* Article 2 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaUserShield className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 2</span>
                <h2 className="text-xl font-bold text-gray-900">How We Use Information</h2>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3 text-gray-600"><span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md flex-shrink-0">2.1</span><p className="text-sm">To process and fulfill your orders.</p></div>
              <div className="flex items-start gap-3 text-gray-600"><span className="text-xs font-bold text-emerald-500 bg-emerald-50 px-2 py-0.5 rounded-md flex-shrink-0">2.2</span><p className="text-sm">To send shipping updates and order confirmations.</p></div>
            </div>
          </section>

          {/* Article 3 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaLock className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 3</span>
                <h2 className="text-xl font-bold text-gray-900">Data Protection</h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              We implement industry-standard encryption (SSL/TLS) for all data transfers. Payment info is processed by PCI-compliant providers.
            </p>
          </section>

          {/* Article 4 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaShareNodes className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 4</span>
                <h2 className="text-xl font-bold text-gray-900">Information Sharing</h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              We do not sell, trade, or rent your personal information. Data shared with partners is purely for operational purposes (e.g., shipping).
            </p>
          </section>

          {/* Article 5 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaUserCheck className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 5</span>
                <h2 className="text-xl font-bold text-gray-900">Your Rights</h2>
              </div>
            </div>
            <div className="flex flex-wrap gap-2">
              {['Access', 'Rectification', 'Erasure', 'Portability', 'Opt-out'].map((tag) => (
                <span key={tag} className="px-3 py-1 bg-emerald-50 text-emerald-700 text-xs font-semibold rounded-full border border-emerald-100">
                  {tag}
                </span>
              ))}
            </div>
          </section>

          {/* Article 6 */}
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg hover:border-emerald-100 transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaCookie className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 6</span>
                <h2 className="text-xl font-bold text-gray-900">Cookies</h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              We use cookies to improve your experience. You can manage them in your browser settings.
            </p>
          </section>
        </div>

        {/* Footer Navigation */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 font-medium transition-all"
            >
              <FaArrowLeft className="text-sm" />
              Back to Home
            </Link>
            <Link 
              href="/terms" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 font-medium shadow-lg shadow-emerald-500/20 transition-all"
            >
              View Terms of Service
              <span className="text-lg">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}