"use client"
import React from 'react'




export default function Left() {
    return (
      <div
        style={{
          fontFamily: "'Nunito', sans-serif",
          minHeight: "100vh",
          display: "flex",
          alignItems: "stretch",
          background: "#f9fafb",
          flex: 1,
        }}
      >
        <link
          href="https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700;800;900&display=swap"
          rel="stylesheet"
        />
  
        {/* Left Panel */}
        <div
          style={{
            flex: 1,
            background:
              "linear-gradient(135deg, #f0fdf4 0%, #dcfce7 40%, #bbf7d0 100%)",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            padding: "48px 40px",
            position: "relative",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: -60,
              left: -60,
              width: 240,
              height: 240,
              borderRadius: "50%",
              background: "rgba(74,222,128,0.18)",
              zIndex: 0,
            }}
          />
          <div
            style={{
              position: "absolute",
              bottom: -80,
              right: -40,
              width: 300,
              height: 300,
              borderRadius: "50%",
              background: "rgba(34,197,94,0.13)",
              zIndex: 0,
            }}
          />
  
          <div
            style={{
              position: "relative",
              zIndex: 1,
              textAlign: "center",
              maxWidth: 420,
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: 8,
                marginBottom: 32,
              }}
            >
              <svg width="36" height="36" viewBox="0 0 36 36" fill="none">
                <rect width="36" height="36" rx="10" fill="#16a34a" />
                <path
                  d="M10 26c2-6 8-10 8-10s6 4 8 10"
                  stroke="#fff"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                />
                <circle cx="18" cy="13" r="4" fill="#bbf7d0" />
              </svg>
              <span style={{ fontSize: 26, fontWeight: 900, color: "#15803d" }}>
                Fresh<span style={{ color: "#111" }}>Cart</span>
              </span>
            </div>
  
            <div style={{ marginBottom: 28 }}>
              <svg width="260" height="200" viewBox="0 0 260 200" fill="none">
                <rect x="50" y="90" width="160" height="80" rx="14" fill="#fff" stroke="#16a34a" strokeWidth="2.5" />
                <rect x="65" y="105" width="130" height="50" rx="8" fill="#f0fdf4" />
                <path d="M30 60 Q50 90 50 90" stroke="#16a34a" strokeWidth="3" strokeLinecap="round" fill="none" />
                <circle cx="30" cy="57" r="6" fill="#16a34a" />
                <circle cx="90" cy="178" r="12" fill="#16a34a" stroke="#fff" strokeWidth="2" />
                <circle cx="170" cy="178" r="12" fill="#16a34a" stroke="#fff" strokeWidth="2" />
                <ellipse cx="100" cy="88" rx="18" ry="14" fill="#f97316" />
                <ellipse cx="130" cy="82" rx="16" ry="18" fill="#ef4444" />
                <ellipse cx="160" cy="88" rx="14" ry="12" fill="#eab308" />
                <ellipse cx="145" cy="75" rx="10" ry="14" fill="#84cc16" />
                <ellipse cx="115" cy="74" rx="9" ry="12" fill="#22c55e" />
                <path d="M130 64 Q138 50 150 55" stroke="#16a34a" strokeWidth="2" strokeLinecap="round" fill="none" />
                <path d="M115 62 Q108 48 118 50" stroke="#15803d" strokeWidth="2" strokeLinecap="round" fill="none" />
              </svg>
            </div>
  
            <h2 style={{ fontSize: 24, fontWeight: 900, color: "#14532d", marginBottom: 12 }}>
              FreshCart – Your One-Stop Shop
              <br />
              for Fresh Products
            </h2>
            <p style={{ fontSize: 15, color: "#4b7a5a", lineHeight: 1.7 }}>
              Join thousands of happy customers who trust
              <br />
              FreshCart for their daily grocery needs.
            </p>
  
            {[
              { icon: "🥦", text: "100% Fresh & Organic" },
              { icon: "🚚", text: "Fast Delivery to Your Door" },
              { icon: "💳", text: "Secure & Easy Checkout" },
            ].map((f) => (
              <div
                key={f.text}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginTop: 14,
                  background: "#fff",
                  borderRadius: 10,
                  padding: "10px 16px",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
                }}
              >
                <span style={{ fontSize: 20 }}>{f.icon}</span>
                <span style={{ fontWeight: 700, color: "#166534", fontSize: 14 }}>
                  {f.text}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }