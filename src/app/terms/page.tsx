// app/terms/page.tsx
import React from 'react';
import Link from 'next/link';
import { 
  FaFileContract, 
  FaHandshake, 
  FaUserCheck, 
  FaIdCard, 
  FaCreditCard, 
  FaTruck, 
  FaRotateLeft, 
  FaScaleBalanced, 
  FaEnvelope,
  FaArrowLeft
} from 'react-icons/fa6';

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 text-white">
        <div className="container mx-auto px-4 py-12 sm:py-16">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-8">
            <Link className="hover:text-white transition-colors duration-200" href="/">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Terms of Service</span>
          </nav>
          
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-20 h-20 rounded-3xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-emerald-900/30 ring-1 ring-white/30">
              <FaFileContract className="text-4xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight">Terms of Service</h1>
              <p className="text-white/80 mt-2 text-lg">Last updated: February 2026</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        {/* Important Notice Section - الـتعديل هنا */}
        <div className="bg-linear-to-r from-amber-50 to-amber-100/50 border border-amber-200 rounded-3xl p-6 sm:p-8 mb-12 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-amber-500 flex items-center justify-center shrink-0 shadow-lg shadow-amber-500/25">
              <FaFileContract className="text-xl text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-amber-900 mb-2">Important Notice</h2>
              <p className="text-amber-800 leading-relaxed">
                By accessing and using FreshCart, you accept and agree to be bound by the terms and provisions of this agreement. Please read these terms carefully before using our services.
              </p>
            </div>
          </div>
        </div>

        {/* Articles Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
          
          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaHandshake className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 1</span>
                <h2 className="text-xl font-bold text-gray-900">Acceptance of Terms</h2>
              </div>
            </div>
            <div className="space-y-3">
              <p className="text-sm text-gray-600 leading-relaxed">
                By using our service, you acknowledge that you have read and agree to these terms. We reserve the right to update these terms at any time.
              </p>
            </div>
          </section>

          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaUserCheck className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 2</span>
                <h2 className="text-xl font-bold text-gray-900">User Eligibility</h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Users must be 18+ years old. By registering, you confirm all provided information is accurate and you are legally capable of entering into contracts.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaCreditCard className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 3</span>
                <h2 className="text-xl font-bold text-gray-900">Payments</h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              All payments are processed securely. We do not store full credit card details. Prices are inclusive of VAT unless stated otherwise.
            </p>
          </section>

          <section className="bg-white rounded-3xl border border-gray-100 p-6 sm:p-8 shadow-sm hover:shadow-lg transition-all duration-300 group">
            <div className="flex items-start gap-4 mb-5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center flex-shrink-0 group-hover:bg-emerald-500 transition-all duration-300">
                <FaScaleBalanced className="text-xl text-emerald-600 group-hover:text-white" />
              </div>
              <div>
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-wider">Article 4</span>
                <h2 className="text-xl font-bold text-gray-900">Liability</h2>
              </div>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              FreshCart is not liable for indirect damages or losses arising from the use of our platform to the fullest extent permitted by law.
            </p>
          </section>

        </div>

        {/* Footer Nav */}
        <div className="mt-12 pt-8 border-t border-gray-200">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <Link 
              href="/" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gray-100 text-gray-700 hover:bg-gray-200 transition-all"
            >
              <FaArrowLeft className="text-sm" /> Back to Home
            </Link>
            <Link 
              href="/privacy" 
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-500 text-white hover:bg-emerald-600 shadow-lg shadow-emerald-500/20 transition-all"
            >
              Privacy Policy →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}