import React from 'react'
import { ClimbingBoxLoader } from 'react-spinners'

export default function loading() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center gap-4 bg-[#fafaf8]">
    <ClimbingBoxLoader color="#2d6a4f" size={20} />

  </div>
  )
}
