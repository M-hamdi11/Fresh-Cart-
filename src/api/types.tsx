export interface ProductType {
    id: string;
    _id: string;
    title: string;
    slug: string;
    description: string;
    price: number;
    priceAfterDiscount?: number;
    quantity: number;
    sold: number;
    imageCover: string;
    images: string[];
    ratingsAverage: number;
    ratingsQuantity: number;
    createdAt: string;
    updatedAt: string;
    category: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };
    brand: {
      _id: string;
      name: string;
      slug: string;
      image: string;
    };
    subcategory: {
      _id: string;
      name: string;
      slug: string;
      category: string;
    }[];
  }
  
  export interface carttype{
   _id: string,
    cartOwner: string,
    products:CartItemType[],
    totalCartPrice: number

   
  }
  export interface CartItemType {
    count: number;
    _id: string;
    product: ProductType;
    price: number;
  }
  
  export interface cashobjtype {
    details: string,
    phone: string,
    city: string
  }
  export interface brandType {
    _id: string;
    name: string;
    slug: string;
    image: string;
    createdAt: string;
    updatedAt: string;
  }
  export type addtoWishlistResponse = {
    status: string;
    message: string;
    data: string[];
  };
  export type getWishlistResponse = {
    status: 'success' | 'fail';
    count: number;
    data: ProductType[];
  };
  export type addressresponsedatatype = {
    
      _id: string,
      name: string,
      city:  string,
      details: string,
      phone: string;
    
  };