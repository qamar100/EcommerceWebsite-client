'use client'

import { getAllProducts } from '@/lib/utils/GlobalApi'
import React, { useCallback , useEffect, useState } from 'react'


const Home = () => {
  
  const [products, setProducts] = useState<any>();

//fetching all products from starpi rest api

const productData = useCallback(() => {

  getAllProducts.then((data) => {
    console.log(data.data);
    setProducts(data.data);
  }).catch(() => { })
}, [])
  
  useEffect(() => {
    productData()
  }, [productData])
  return (
    <div className=' flex flex-col gap-5 bh-slate-50 rounded-sm p-3 shadow-sm'>
      {products?.data?.map((item: any, index: number) => (
        <h1 key ={item.id}>
          {item.attributes.title}
       </h1>
     ))} 
    </div>
  )
}

export default Home
