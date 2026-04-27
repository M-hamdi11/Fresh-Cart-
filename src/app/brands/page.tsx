import { get_prands } from '@/api/services/rout.services'
import React from 'react'
import BrandsHeader from './brandsheader'
import { BrandCard } from './brandcard'
import { brandType } from '@/api/types'

export default async function page() {
   const brands = await get_prands()
  return (
    <>
    <BrandsHeader/>

    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
      {brands.map((brand:brandType) => (
        <BrandCard key={brand._id} brand={brand} />
      ))}
    </div> 
    
    </>
  )
}
