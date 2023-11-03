import React from 'react';
import { BsArrowRight } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux'
import { addToCart } from '../redux/slices/CartSlice';
import toast from 'react-hot-toast';
function ProductCard({ product }) {
  const navigate = useNavigate();
  function clickHandler () {
    navigate(`/product/${product.title.replaceAll(" ", "-")}` , {
      state : {
        item : product ,
      }
    })
  }
  product = { ...product , ...{ 'qty' : 1 }};
  const dispatch = useDispatch();

  return (
    <div className='group relative'>
      <div className='w-full h-96 cursor-pointer overflow-hidden'>
        <img 
        className='w-full h-full object-cover group-hover:scale-110 duration-500'
        src={product.image} alt=''
        onClick={ clickHandler }
        />
      </div>
      <div className='w-full border-[1px] px-2 py-4'>
        <div className='flex items-center justify-between'>
          <div>
            <h2 className='font-titleFont text-base font-bold'>
              { product.title.substring(0 , 15) }...
            </h2>
          </div>
          <div className='flex gap-2 relative w-28 text-sm overflow-hidden justify-end'>
            <div className="flex gap-2 transform group-hover:translate-x-24 transition-transform duration-500">
              <p className='line-through text-gray-500'>${ product.oldPrice }</p>
              <p className='font-semibold'>${ product.price }</p>
            </div>
            <p className="absolute top-0 z-20 w-[100px] text-gray-500 flex items-center gap-1
            hover:text-gray-900 transform -translate-x-32 group-hover:translate-x-0 
            transition-transform cursor-pointer duration-500"
            onClick={() => { dispatch(addToCart(product)) && toast.success(`${product.title} added to cart`)}}>
              add to cart <span><BsArrowRight/></span>
            </p>
          </div>
        </div>
        <div>
          <p>{ product.category }</p>
        </div>
        <div className="absolute top-4 right-0">
          {
            product.isNew && (
            <p className="bg-black text-white font-semibold font-titleFont px-6 py-1">
              Sale
            </p>)
          }
        </div>
      </div>
    </div>
  )
}

export default ProductCard