
import Image from "next/image";
import { FaRegHeart, FaStar } from "react-icons/fa";
import { HiOutlineRefresh } from "react-icons/hi";
import { IoEyeOutline } from "react-icons/io5";
import { get_all_products } from "../api/services/rout.services";
import Link from "next/link";
import Myswiper from "./_components/myswiper/myswiper";
import image1 from "@/assets/images/home-slider-1.d79601a8.png";
import { ClimbingBoxLoader } from 'react-spinners'
import image2 from "@/assets/images/freshcart-logo.49f1b44d.svg"
import { lazy, Suspense } from "react";
import  {AddToCartButton} from "./_components/addtocart/addtocart";
import ProductCard from "./_components/productcard/productcard";
import Features from "./_components/features/features";
import BannerSection from "./_components/bannersection/banner";
import NewsletterSection from "./_components/newslettersec/newslettersec";

const CategoriesSupCardLazy = lazy(() => import("./_components/categories.sup.card/categories.sup.card"));



 export default async function Home() {

  
 
 const products = await get_all_products();
  return ( <>



<div>
<Myswiper backgroundImage={image1.src} />
</div>

<Features/>


<Suspense fallback={ <div className=" flex flex-col items-center justify-center gap-4 bg-[#fafaf8]">
  <ClimbingBoxLoader color="#2d6a4f" size={20} />
</div>}>
<CategoriesSupCardLazy />
</Suspense>

<BannerSection/>


  

<h2 className="text-2xl font-bold mb-6">
  <span className="border-l-4 border-[#16A34A] pl-3 mr-1">Featured</span>
  <span className="text-[#16A34A]">Products</span>
</h2>



<div className="grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5 gap-4">
  {products?.map((product) => (
  <ProductCard key={product._id} product={product} />
  ))}
</div>

<NewsletterSection/>
   
  </>
  )
}
