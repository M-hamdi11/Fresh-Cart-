import ProductDetailsClient from "../productdetailsclient";


export default async function ProductDetails({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const id = (await params).id;
  const res = await fetch(`https://ecommerce.routemisr.com/api/v1/products/${id}`);
  const data = await res.json();
  const product = data.data;

  return (
    <div className="max-w-6xl mx-auto p-6">
      <ProductDetailsClient product={product} />
    </div>
  );
}