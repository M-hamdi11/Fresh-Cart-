"use client"; // لازم عشان الـ State والـ Form

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  FaHeadset, FaPhone, FaEnvelope, 
  FaLocationDot, FaClock, FaFacebookF, 
  FaTwitter, FaInstagram, FaLinkedinIn,
  FaPaperPlane, FaCircleQuestion
} from 'react-icons/fa6';
import { toast } from 'react-toastify';

const ContactPage = () => {
  // 1. التحكم في بيانات الفورم
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // 2. تحديث الـ State عند الكتابة
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // 3. مسح البيانات بعد الإرسال
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // هنا ممكن تحط Toast أو Alert بسيط
    console.log("Form Submitted:", formData);
    toast.success("Message sent successfully!");

    // تفريغ المدخلات
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <div className="min-h-screen bg-gray-50/50 pb-12">
      {/* Header Section */}
      <div className="bg-gradient-to-br from-emerald-600 via-emerald-500 to-emerald-400 text-white">
        <div className="container mx-auto px-4 py-10 sm:py-14">
          <nav className="flex items-center gap-2 text-sm text-white/70 mb-6 flex-wrap">
            <Link className="hover:text-white transition-colors" href="/">Home</Link>
            <span className="text-white/40">/</span>
            <span className="text-white font-medium">Contact Us</span>
          </nav>
          
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center shadow-xl ring-1 ring-white/30">
              <FaHeadset className="text-3xl" />
            </div>
            <div>
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight">Contact Us</h1>
              <p className="text-white/80 mt-1">We'd love to hear from you. Get in touch with our team.</p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Side Info Cards */}
          <div className="lg:col-span-1 space-y-6">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <FaPhone className="text-emerald-600 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Phone</h3>
                  <p className="text-gray-500 text-sm mb-2">Mon-Fri from 8am to 6pm</p>
                  <Link href="tel:+18001234567" className="text-emerald-600 font-medium hover:underline tracking-wide">+1 (800) 123-4567</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <FaEnvelope className="text-emerald-600 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Email</h3>
                  <p className="text-gray-500 text-sm mb-2">We'll respond within 24 hours</p>
                  <Link href="mailto:support@freshcart.com" className="text-emerald-600 font-medium hover:underline">support@freshcart.com</Link>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <FaLocationDot className="text-emerald-600 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Office</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    123 Commerce Street<br />New York, NY 10001<br />United States
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center shrink-0">
                  <FaClock className="text-emerald-600 text-lg" />
                </div>
                <div>
                  <h3 className="font-semibold text-gray-900 mb-1">Business Hours</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Monday - Friday: 8am - 6pm<br />Saturday: 9am - 4pm
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm">
              <h3 className="font-semibold text-gray-900 mb-4">Follow Us</h3>
              <div className="flex items-center gap-3">
                {[
                  { Icon: FaFacebookF, href: "#" },
                  { Icon: FaTwitter, href: "#" },
                  { Icon: FaInstagram, href: "#" },
                  { Icon: FaLinkedinIn, href: "#" }
                ].map((social, idx) => (
                  <Link 
                    key={idx} 
                    href={social.href}
                    className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center text-gray-500 hover:bg-emerald-600 hover:text-white transition-all duration-300"
                  >
                    <social.Icon size={16} />
                  </Link>
                ))}
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl border border-gray-100 p-6 lg:p-8 shadow-sm">
              <div className="flex items-center gap-3 mb-8">
                <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center">
                  <FaHeadset className="text-emerald-600 text-lg" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-900">Send us a Message</h2>
                  <p className="text-gray-500 text-sm">We'll get back to you as soon as possible</p>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Full Name</label>
                    <input 
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      type="text" 
                      placeholder="John Doe" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-700 ml-1">Email Address</label>
                    <input 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      type="email" 
                      placeholder="john@example.com" 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Subject</label>
                  <select 
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all bg-white outline-none"
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="shipping">Shipping Question</option>
                    <option value="product">Product Info</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-gray-700 ml-1">Message</label>
                  <textarea 
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5} 
                    placeholder="Tell us how we can help..." 
                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all resize-none outline-none"
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full md:w-auto inline-flex items-center justify-center gap-2 px-10 py-4 rounded-xl bg-emerald-600 text-white font-bold hover:bg-emerald-700 active:scale-95 transition-all shadow-lg shadow-emerald-600/20"
                >
                  <FaPaperPlane />
                  Send Message
                </button>
              </form>
            </div>

            {/* Help Center CTA */}
            <div className="mt-6 bg-emerald-50 rounded-2xl p-6 border border-emerald-100 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-white flex items-center justify-center shrink-0 shadow-sm">
                <FaCircleQuestion className="text-emerald-600 text-xl" />
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">Looking for quick answers?</h3>
                <p className="text-gray-600 text-sm mb-3">Check out our Help Center for common questions about shipping and returns.</p>
                <Link className="text-emerald-600 font-bold text-sm hover:underline inline-flex items-center gap-1" href="/help">
                  Visit Help Center →
                </Link>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default ContactPage;