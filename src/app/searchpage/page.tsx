import React from 'react'
import Searchtest from '../_components/seachtest/searchtest'
import SearchResults from './searchresltpage'
import { get_all_products } from '@/api/services/rout.services';
import Internalsearch from './internalsearch';

export default async function searchpage() {
  const allproducts =await get_all_products();
  return (
    
    <>
     <Internalsearch/>
    <SearchResults products={allproducts} searchQuery={""} />
   
</>
  )
}
