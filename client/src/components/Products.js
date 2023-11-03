import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard'
import  productsData  from '../api/Api'
function Products() {
  const [data , setData] = useState([]);
  useEffect(() => {
    setData(productsData);
  } , [])
  return (
    <div className="py-10">
        <div className="flex flex-col items-center gap-4">
            <h1 className="text-2xl bg-black text-white py-2 w-80 text-center">shopping everyday</h1>
            <span className="w-20 h-[3px] bg-black"></span>
            <p className="max-w-[700px] text-gray-600 text-center">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo,
                quos fugit inventore, cumque quae corporis ratione tenetur eos
                voluptates neque magnam soluta aperiam omnis perspiciatis reiciendis
                asperiores repudiandae assumenda quidem.
            </p>
        </div>
        <div className='max-w-screen-xl mx-auto py-10 grid grid-cols-4 gap-10'>
            {
              data.map((product) => {
                return ( <ProductCard 
                  product={ product } 
                  key={ product._id }/> 
                )
              })
            }
        </div>
    </div>
  )
}

export default Products