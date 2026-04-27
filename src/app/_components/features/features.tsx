import React from 'react';
import { FaTruck, FaShieldAlt, FaUndoAlt, FaHeadset } from 'react-icons/fa';

const Features = () => {
  const features = [
    {
      id: 1,
      title: "Free Shipping",
      desc: "On orders over 500 EGP",
      icon: <FaTruck className="text-xl" />,
      bgColor: "bg-blue-50",
      iconColor: "text-blue-500",
    },
    {
      id: 2,
      title: "Secure Payment",
      desc: "100% secure transactions",
      icon: <FaShieldAlt className="text-xl" />,
      bgColor: "bg-emerald-50",
      iconColor: "text-emerald-500",
    },
    {
      id: 3,
      title: "Easy Returns",
      desc: "14-day return policy",
      icon: <FaUndoAlt className="text-xl" />,
      bgColor: "bg-orange-50",
      iconColor: "text-orange-500",
    },
    {
      id: 4,
      title: "24/7 Support",
      desc: "Dedicated support team",
      icon: <FaHeadset className="text-xl" />,
      bgColor: "bg-purple-50",
      iconColor: "text-purple-500",
    },
  ];

  return (
    <section className="py-8 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="flex items-center gap-4 bg-white p-4 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div
                className={`${feature.bgColor} ${feature.iconColor} w-12 h-12 rounded-full flex items-center justify-center shrink-0`}
              >
                {feature.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-800 text-sm">
                  {feature.title}
                </h3>
                <p className="text-xs text-gray-500">
                  {feature.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;