import React from "react";

export const socialBtn: React.CSSProperties = {
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: 10,
  padding: "11px",
  border: "1.5px solid #e5e7eb",
  borderRadius: 10,
  background: "#fff",
  fontSize: 14,
  fontWeight: 700,
  color: "#111",
  cursor: "pointer",
  fontFamily: "inherit",
};

export const labelStyle: React.CSSProperties = {
  display: "block",
  fontSize: 13,
  fontWeight: 700,
  color: "#374151",
  marginBottom: 6,
};

export const inputWrapper: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  border: "1.5px solid #e5e7eb",
  borderRadius: 10,
  padding: "0 12px",
  background: "#fff",
  gap: 8,
};

export const iconSpan: React.CSSProperties = {
  fontSize: 15,
  opacity: 0.5,
  flexShrink: 0,
};

export const inputStyle: React.CSSProperties = {
  flex: 1,
  border: "none",
  outline: "none",
  padding: "11px 0",
  fontSize: 14,
  color: "#111",
  background: "transparent",
  fontFamily: "inherit",
};
export const inputClassNames = {
  input: "placeholder:text-gray-400 outline-none focus:outline-none",
  inputWrapper:
    "border border-gray-300 hover:border-gray-400 shadow-none data-[focus=true]:border-green-500 data-[focus-visible=true]:ring-0 data-[focus-visible=true]:outline-none data-[invalid=true]:border-red-500 data-[invalid=true]:border-2 p-1 rounded-lg",
};