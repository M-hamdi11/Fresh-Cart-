import { get_all_products } from '@/api/services/rout.services';
import Link from 'next/link';
import React from 'react'
import Internalsearch from '../internalsearch';
import SearchResults from '../searchresltpage';
import { ProductType } from '@/api/types';

export default async function serchresult({params}: { params: Promise<{ id: string }> }) {

 const {id}=await params
 const allproducts= await get_all_products();
 console.log(id);

  return (
    <>
    <Internalsearch/>
    <SearchResults products={allproducts as ProductType[]} searchQuery={id}/>

    </>

  )
}
