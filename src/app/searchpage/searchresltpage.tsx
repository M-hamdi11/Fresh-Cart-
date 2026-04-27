"use client";

import { ProductType } from "@/api/types";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";
import ProductCard from "../_components/productcard/productcard";
import ActiveFilters from "./activefilters";

import { useRouter } from "next/navigation";
import searchpage from './page';
import { FaSlidersH, FaTh } from "react-icons/fa";
import { FaGripVertical, FaList } from "react-icons/fa6";
import { set } from "zod";

interface Props {
  products: ProductType[];
  searchQuery: string;
}

export default function SearchResults({ products, searchQuery }: Props) {
  const [activeCats, setActiveCats] = useState<string[]>([]);
  const [activeBrands, setActiveBrands] = useState<string[]>([]);
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [sort, setSort] = useState("");
  const [search, setSearch] = useState(searchQuery);
  const [activeView, setActiveView] = useState('grid');
  // 🔥 Pagination
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 12;

  const router = useRouter();

  let filtered = [...products];

  const hasFilters =
    activeCats.length > 0 ||
    activeBrands.length > 0 ||
    minPrice ||
    maxPrice;

  // ===== FILTER =====
  if (hasFilters) {
    if (activeCats.length > 0) {
      filtered = filtered.filter((p) =>
        activeCats.includes(p.category.name)
      );
    }

    if (activeBrands.length > 0) {
      filtered = filtered.filter((p) =>
        activeBrands.includes(p.brand?.name)
      );
    }

    if (minPrice) {
      filtered = filtered.filter((p) => p.price >= Number(minPrice));
    }

    if (maxPrice) {
      filtered = filtered.filter((p) => p.price <= Number(maxPrice));
    }
  }

  // ===== لو مفيش فلتر → استخدم السيرش بس =====
  else if (searchQuery) {
    filtered = filtered.filter((p) =>
      p.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }

  // ===== SORT =====
  if (sort === "price-asc") filtered.sort((a, b) => a.price - b.price);
  if (sort === "price-desc") filtered.sort((a, b) => b.price - a.price);
  if (sort === "rating")
    filtered.sort((a, b) => b.ratingsAverage - a.ratingsAverage);
  if (sort === "name-asc")
    filtered.sort((a, b) => a.title.localeCompare(b.title));
  if (sort === "name-desc")
    filtered.sort((a, b) => b.title.localeCompare(a.title));

  // 🔥 Pagination logic
  const totalPages = Math.ceil(filtered.length / itemsPerPage);
  const start = (currentPage - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  const paginatedProducts = filtered.slice(start, end);

  // 🔥 reset page لما الفلاتر تتغير
  useEffect(() => {
    setCurrentPage(1);
  }, [activeCats, activeBrands, minPrice, maxPrice, sort, searchQuery]);

  // ===== toggle category =====
  function toggleCat(cat: string) {
    if (activeCats.includes(cat)) {
      setActiveCats(activeCats.filter((c) => c !== cat));
    } else {
      setActiveCats([...activeCats, cat]);
    }
  }

  function onClearCategory(cat: string) {
    setActiveCats(activeCats.filter((c) => c !== cat));
  }

  function onClearAll() {
    setActiveCats([]);
    setActiveBrands([]);
    setMinPrice("");
    setMaxPrice("");
    setSort("");
    setSearch("");
    router.push("/searchpage");
  }

  // ===== toggle brand =====
  function toggleBrand(brand: string) {
    if (activeBrands.includes(brand)) {
      setActiveBrands(activeBrands.filter((b) => b !== brand));
    } else {
      setActiveBrands([...activeBrands, brand]);
    }
  }

  // ===== reset =====
  function resetFilters() {
    setActiveCats([]);
    setActiveBrands([]);
    setMinPrice("");
    setMaxPrice("");
    setSort("");
  }

  // ===== categories و brands من الداتا =====
  const categories = [...new Set(products.map((p) => p.category.name))];
  const brands = [
    ...new Set(products.map((p) => p.brand?.name).filter(Boolean)),
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex gap-8">
        {/* Sidebar */}
        <aside className="hidden lg:block w-64 shrink-0">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 sticky top-24 space-y-6">
            {/* Categories */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Categories</h3>
              {categories.map((cat) => (
                <label
                  key={cat}
                  className="flex items-center gap-3 cursor-pointer mb-1"
                >
                  <input
                    type="checkbox"
                    checked={activeCats.includes(cat)}
                    onChange={() => toggleCat(cat)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-600">{cat}</span>
                </label>
              ))}
            </div>

            <hr className="border-gray-100" />

            {/* Price */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Price Range</h3>
              <div className="grid grid-cols-2 gap-3 mb-3">
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Min (EGP)
                  </label>
                  <input
                    type="number"
                    placeholder="0"
                    value={minPrice}
                    onChange={(e) => setMinPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none"
                  />
                </div>
                <div>
                  <label className="text-xs text-gray-500 mb-1 block">
                    Max (EGP)
                  </label>
                  <input
                    type="number"
                    placeholder="Any"
                    value={maxPrice}
                    onChange={(e) => setMaxPrice(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none"
                  />
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => {
                    setMinPrice("0");
                    setMaxPrice("500");
                  }}
                  className="px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  Under 500
                </button>
                <button
                  onClick={() => {
                    setMinPrice("0");
                    setMaxPrice("1000");
                  }}
                  className="px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  Under 1K
                </button>
                <button
                  onClick={() => {
                    setMinPrice("0");
                    setMaxPrice("5000");
                  }}
                  className="px-3 py-1.5 rounded-full text-xs bg-gray-100 text-gray-600 hover:bg-gray-200"
                >
                  Under 5K
                </button>
              </div>
            </div>

            <hr className="border-gray-100" />

            {/* Brands */}
            <div>
              <h3 className="font-bold text-gray-900 mb-3">Brands</h3>
              {brands.map((brand) => (
                <label
                  key={brand}
                  className="flex items-center gap-3 cursor-pointer mb-1"
                >
                  <input
                    type="checkbox"
                    checked={activeBrands.includes(brand)}
                    onChange={() => toggleBrand(brand)}
                    className="w-4 h-4 rounded border-gray-300"
                  />
                  <span className="text-sm text-gray-600">{brand}</span>
                </label>
              ))}
            </div>

            <button
              onClick={resetFilters}
              className="w-full text-sm text-red-500 py-2 border border-red-200 rounded-lg hover:bg-red-50 transition-colors"
            >
              Reset filters
            </button>
          </div>
        </aside>

        {/* Main */}
        <main className="flex-1 min-w-0">
        <div className="flex items-center justify-between mb-6">   
       <div className="flex items-center gap-1 bg-white rounded-lg border border-gray-200 p-1 w-fit">
      {/* Grid View Button */}
      <button
        onClick={() => setActiveView('grid')}
        className={`p-2 rounded-md transition-colors ${
          activeView === 'grid' 
            ? 'bg-green-600 text-white' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <FaGripVertical size={18} />
      </button>

      {/* List View Button */}
      <button
        onClick={() =>setActiveView('list')}
        className={`p-2 rounded-md transition-colors ${
          activeView === 'list' 
            ? 'bg-green-600 text-white' 
            : 'text-gray-500 hover:text-gray-700'
        }`}
      >
        <FaList size={18} />
      </button>
    </div> 
   

          {/* Top bar */}
          <div className="flex items-center justify-between mb-6">
            <select
              value={sort}
              onChange={(e) => setSort(e.target.value)}
              className="px-3 py-2 rounded-lg border border-gray-200 text-sm outline-none bg-white"
            >
              <option value="">Relevance</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating: High to Low</option>
              <option value="name-asc">Name: A to Z</option>
              <option value="name-desc">Name: Z to A</option>
            </select>
          </div>
          </div>
          <ActiveFilters
              searchQuery={searchQuery}
              activeCats={activeCats}
              onClearCategory={onClearCategory}
              onClearAll={onClearAll}
            />

          {/* Products */}
          {filtered.length === 0 ? (
            <div className="text-center py-20 text-gray-400">
              <p className="text-lg font-medium mb-2">No products found</p>
              <p className="text-sm">Try adjusting your filters</p>
            </div>
          ) : (
            <>
              <div className={activeView==='grid'?'grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6':'flex flex-col gap-4'}>
                {paginatedProducts.map((product) => (
                  <ProductCard key={product._id} product={product}/>
                ))}
              </div>

              {/* Pagination */}
              {totalPages > 1 && (
                <div className="flex items-center justify-center gap-2 mt-10">
                  <button
                    onClick={() => setCurrentPage((p) => p - 1)}
                    disabled={currentPage === 1}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {"<"}
                  </button>

                  {Array.from({ length: totalPages }, (_, i) => i + 1).map(
                    (page) => (
                      <button
                        key={page}
                        onClick={() => setCurrentPage(page)}
                        className={`w-10 h-10 rounded-lg flex items-center justify-center font-medium transition-colors ${
                          currentPage === page
                            ? "bg-green-600 text-white"
                            : "border border-gray-200 text-gray-600 hover:bg-gray-50"
                        }`}
                      >
                        {page}
                      </button>
                    )
                  )}

                  <button
                    onClick={() => setCurrentPage((p) => p + 1)}
                    disabled={currentPage === totalPages}
                    className="w-10 h-10 rounded-lg border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                  >
                    {">"}
                  </button>
                </div>
              )}
            </>
          )}
        </main>
      </div>
    </div>
  );
}