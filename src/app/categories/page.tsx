import { get_all_categories } from '@/api/services/rout.services';
import React from 'react';
import CategoryCard from './categorycard';
export default async function Categories() {
  const categories = await get_all_categories();

  // بنحط الشرط هنا قبل الـ return الأساسي
  if (!categories || categories.length === 0) {
    return <p>لا توجد تصنيفات حالياً.</p>; // أو رندر أي حاجة تانية
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6 items-stretch">
    {categories.map((cat) => (
      <CategoryCard key={cat._id} category={cat} />
    ))}
  </div>
  );
}