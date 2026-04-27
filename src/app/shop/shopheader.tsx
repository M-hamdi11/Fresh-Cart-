import React from 'react';
import Link from 'next/link';
import { FaBoxOpen } from "react-icons/fa6";

export default function ShopHeader() {
  // تعريف الألوان كمتغيرات لسهولة الاستخدام
  const styles = {
    header: {
      background: 'linear-gradient(135deg, #198754, #146c43)',
      color: 'white',
      padding: '50px 0'
    },
    nav: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      fontSize: '14px',
      opacity: 0.8,
      marginBottom: '20px'
    },
    container: {
      display: 'flex',
      alignItems: 'center',
      gap: '20px'
    },
    iconBox: {
      width: '64px',
      height: '64px',
      borderRadius: '16px',
      backgroundColor: 'rgba(255, 255, 255, 0.2)',
      backdropFilter: 'blur(4px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      border: '1px solid rgba(255, 255, 255, 0.3)',
      boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.1)'
    }
  };

  return (
    <header style={styles.header}>
      <div className="container mx-auto px-4">
        
        {/* Breadcrumbs */}
        <nav style={styles.nav}>
          <Link href="/" style={{ color: 'white', textDecoration: 'none' }}>Home</Link>
          <span style={{ opacity: 0.5 }}>/</span>
          <span style={{ fontWeight: '500' }}>All Products</span>
        </nav>

        {/* Header Content */}
        <div style={styles.container}>
          
          <div style={styles.iconBox}>
            <FaBoxOpen style={{ fontSize: '32px', color: 'white' }} />
          </div>

          <div>
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', margin: 0 }}>
              All Products
            </h1>
            <p style={{ margin: '5px 0 0', opacity: 0.9, fontSize: '16px' }}>
              Explore our complete product collection
            </p>
          </div>

        </div>
      </div>
    </header>
  );
}