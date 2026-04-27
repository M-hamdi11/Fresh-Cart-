"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Swiper Styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const MainSlider = ({ backgroundImage }: { backgroundImage: string }) => {
  // المحتوى اللي هيتكرر على نفس الصورة
  const slideContent = [
    {
      title: "Fresh Products Delivered to your Door",
      desc: "Get 20% off your first order",
      btnText: "Shop Now",
      btnColor: "text-green-500",
    },
    {
      title: "Premium Quality Guaranteed",
      desc: "Fresh from farm to your table",
      btnText: "Explore More",
      btnColor: "text-blue-500",
    },
    {
      title: "Fast & Free Delivery",
      desc: "Same day delivery available",
      btnText: "Order Now",
      btnColor: "text-purple-500",
    },
  ];

  return (
    <div className="relative group overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        loop={true}
        autoplay={{ delay: 5000 }}
        navigation={{
          nextEl: ".custom-next",
          prevEl: ".custom-prev",
        }}
        pagination={{
          clickable: true,
          renderBullet: (index, className) => {
            return `<span class="${className} custom-bullet"></span>`;
          },
        }}
        className="h-100 lg:h-112.5"
      >
       
        {slideContent.map((content, i) => (
          <SwiperSlide key={i}>
            <div
              className="relative w-full h-full flex items-center bg-cover bg-center"
              style={{ backgroundImage: `url(${backgroundImage})` }}
            >
              <div className="absolute inset-0 bg-linear-to-r from-green-500/80 to-green-400/40">
                <div className="container mx-auto px-8 h-full flex flex-col justify-center text-white">
                  <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-lg leading-tight">
                    {content.title}
                  </h2>
                  <p className="text-base md:text-lg mb-6 opacity-90">
                    {content.desc}
                  </p>
                  <div className="flex gap-4">
                    <button className={`bg-white ${content.btnColor} px-6 py-2 rounded-lg font-bold hover:scale-105 transition-transform`}>
                      {content.btnText}
                    </button>
                    <button className="bg-transparent border-2 border-white/50 text-white px-6 py-2 rounded-lg font-bold hover:bg-white/10 transition-all">
                      View Deals
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Arrows */}
      <div className="custom-prev absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white/90 text-green-500 rounded-full w-11 h-11 hidden md:flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
        <FaChevronLeft />
      </div>
      <div className="custom-next absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-white/90 text-green-500 rounded-full w-11 h-11 hidden md:flex items-center justify-center shadow-md opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110">
        <FaChevronRight />
      </div>

      <style jsx global>{`
        .custom-bullet {
          width: 10px !important;
          height: 10px !important;
          background: #fff !important;
          opacity: 0.5 !important;
          display: inline-block;
          margin: 0 5px !important;
          border-radius: 50%;
          transition: all 0.3s ease;
        }
        .swiper-pagination-bullet-active {
          width: 30px !important;
          border-radius: 10px !important;
          opacity: 1 !important;
        }
      `}</style>
    </div>
  );
};

export default MainSlider;