import { get_all_products } from '@/api/services/rout.services';
import { ProductType } from '@/api/types';
import React from 'react';
import Link from 'next/link';
import ProductCard from '@/app/_components/productcard/productcard';
import { FaBox, FaFilter, FaTags, FaXmark } from 'react-icons/fa6';

export default async function ShowBrand({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const products = (await get_all_products()) as ProductType[];

  const brandProducts = products?.filter(
    (product) => product.brand?._id === id
  );

  const brandName =
    brandProducts?.[0]?.brand &&
    typeof brandProducts[0].brand === 'object'
      ? brandProducts[0].brand.name
      : '';

  return (
    <div className="container mx-auto px-4 py-8">

      {/* Active Filters Bar */}
      {brandName && (
        <div className="mb-6 flex items-center gap-3 flex-wrap">
          <span className="flex items-center gap-2 text-sm text-gray-600">
            <FaFilter />
            Active Filters:
          </span>

          <Link
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 text-violet-700 text-sm font-medium hover:bg-violet-200 transition-colors"
            href="/products"
          >
            <FaTags className="text-xs" />
            {brandName}
            <FaXmark className="text-xs" />
          </Link>

          <Link className="text-sm text-gray-500 hover:text-gray-700 underline" href="/shop">
            Clear all
          </Link>
        </div>
      )}

      {/* Count */}
      {brandProducts?.length > 0 && (
        <div className="mb-6 text-sm text-gray-500">
          Showing {brandProducts.length} products
        </div>
      )}

      {/* No Products */}
      {brandProducts?.length === 0 ? (
        <div className="text-center py-20">
          <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-5">
            <FaBox className="text-3xl text-gray-400" />
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2">
            No Products Found
          </h3>

          <p className="text-gray-500 mb-6">
            No products match your current filters.
          </p>
        </div>
      ) : (
        // Products Grid
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {brandProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}

    </div>
  );
}