import React, { useEffect, useState } from 'react'
import EmptyCart from '../components/EmptyCart'
import { useSelector } from 'react-redux'
import CartItem from '../components/CartItem';
import toast from 'react-hot-toast';

function CartPage() {
  const productData = useSelector((state) => state.cart.cartItems);
  const userInfo = useSelector((state) => state.cart.userInfo);
  const [totalAmt, setTotalAmt] = useState('');
  const [payNow , setPaynow] = useState(false);
const handleCheckout = () => {
  if(userInfo){
    setPaynow(true);
  }else{
    setPaynow(false);
    toast.error("Please Sign in to checkout");
  }
}

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += ( item.price * item.qty );
      return price ;
    })
    setTotalAmt(price.toFixed(2));
  } , [ productData ]);
  
  return (
    <div>
      <img
        className="w-full h-60 object-cover"
        src="https://images.pexels.com/photos/1435752/pexels-photo-1435752.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
        alt="cartImg"
      />
      {
        productData.length > 0 ? (
        <div className="max-w-screen-xl mx-auto py-20 flex">
          <CartItem />
          <div className="w-1/3 bg-[#fafafa] py-6 px-4">
            <div className=" flex flex-col gap-6 border-b-[1px] border-b-gray-400 pb-6">
              <h2 className="text-2xl font-medium ">cart totals</h2>
              <p className="flex items-center gap-4 text-base">
                Subtotal{" "}
                <span className="font-titleFont font-bold text-lg">
                  ${totalAmt}
                </span>
              </p>
              <p className="flex items-start gap-4 text-base">
                Shipping{" "}
                <span>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Quos, veritatis.
                </span>
              </p>
            </div>
            <p className="font-titleFont font-semibold flex justify-between mt-6">
              Total <span className="text-xl font-bold">${totalAmt}</span>
            </p>
            <button
              onClick={handleCheckout}
              className="text-base bg-black text-white w-full py-3 mt-6 hover:bg-gray-800 duration-300"
            >
              proceed to checkout
            </button>
          </div>
        </div>
      ) : ( <EmptyCart/> )
      }
    </div>
  )
}

export default CartPage