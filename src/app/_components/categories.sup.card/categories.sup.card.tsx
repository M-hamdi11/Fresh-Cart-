import React from "react";
import Link from "next/link";

type CategoryType = {
  _id: string;
  name: string;
  image: string;
};

export default async function CategoriesSupCard() {
  async function getCategories() {
    try {
      const res = await fetch(
        "https://ecommerce.routemisr.com/api/v1/categories"
      );
      const data = await res.json();
      console.log(data);
      return data.data;
    } catch (err) {
      console.log(err);
    }
  }

  const allCategories = await getCategories();

  return (
    <div>
    <div className="flex items-center justify-between mb-6">
      <h2 className="text-2xl font-bold">
        Shop By <span className="text-green-500">Category</span>
      </h2>
      <Link
        href="/categories"
        className="text-green-500 flex items-center gap-1 text-sm"
      >
        View All Categories <span>→</span>
      </Link>
    </div>
  
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {allCategories?.map((cat: CategoryType) => (
        <Link
          href={`/categories/${cat._id}`}
          key={cat._id}
          className="border border-gray-100 rounded-xl p-4 flex flex-col items-center gap-3 hover:shadow-md transition cursor-pointer"
        >
          <img
            src={cat.image}
            alt={cat.name}
            className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover"
          />
          <p className="text-sm text-gray-700 font-medium text-center">{cat.name}</p>
        </Link>
      ))}
    </div>
  </div>
  );
}
