import { get_all_products } from "@/api/services/rout.services";
import { ProductType } from "@/api/types";
import ProductCard from "@/app/_components/productcard/productcard";

export default async function CategoryPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const allProducts: ProductType[] = (await get_all_products()) || [];

  const categoryProducts = allProducts.filter(
    (product) => product.category._id === id
  );

  const categoryName = categoryProducts.length > 0
    ? categoryProducts[0].category.name
    : "Category Products";

  return (
    <div className="container mx-auto px-4 py-10">
      <div className="bg-green-600 text-white p-8 rounded-2xl mb-10">
        <h1 className="text-3xl font-bold uppercase">{categoryName}</h1>
        <p className="opacity-80">Showing {categoryProducts.length} products found in this section</p>
      </div>

      {categoryProducts.length === 0 ? (
        <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed">
          <p className="text-xl text-gray-500 font-medium">No Products Found in this Category</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 sm:gap-6">
          {categoryProducts.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      )}
    </div>
  );
}