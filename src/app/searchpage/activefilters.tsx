import React from 'react';
// استيراد الأيقونات كـ Components
import { FaFilter } from 'react-icons/fa';
import { IoMdClose } from 'react-icons/io';

const ActiveFilters = ({ searchQuery, activeCats, onClearCategory, onClearAll } :{ searchQuery: string, activeCats: string[], onClearCategory: (cat: string) => void, onClearAll: () => void}) => {
  // إخفاء المكون لو مفيش داتا
  if (!searchQuery && (!activeCats || activeCats.length === 0)) return null;

  return (
    <div className="mb-6 flex items-center gap-2 flex-wrap">
      {/* كلمة Active مع أيقونة الفلتر */}
      <span className="text-sm text-gray-500 flex items-center gap-1">
        <FaFilter className="text-[10px]" /> 
        Active:
      </span>

      {/* نص البحث searchQuery */}
      {searchQuery && (
        <span className="text-sm font-medium text-gray-800 italic">
          &ldquo;{searchQuery}&rdquo;
        </span>
      )}

      {/* لو فيه searchQuery وفيه كمان تصنيفات، ممكن نكتب كلمة "in" كفاصل اختياري */}
      {searchQuery && activeCats.length > 0 && (
        <span className="text-sm text-gray-400 mx-1">in</span>
      )}

      {/* عرض التصنيفات Active Categories */}
      {activeCats.map((cat) => (
        <span 
          key={cat}
          className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-green-50 text-green-600 text-xs "
        >
          {cat}
          <button 
            onClick={() => onClearCategory(cat)}
            className="hover:text-red-500 transition-colors p-0.5"
          >
            <IoMdClose className="text-sm" />
          </button>
        </span>
      ))}

      {/* زرار Clear All */}
      {(searchQuery || activeCats.length > 0) && (
        <button 
          onClick={onClearAll}
          className="text-xs text-gray-400 hover:text-gray-600 underline ml-2 transition-all"
        >
          Clear all
        </button>
      )}
    </div>
  );
};

export default ActiveFilters;