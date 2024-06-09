import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { addToCart, removeFromCart } from '../../store/slices/cartSlice';


const Cart = () => {

  const dispatch = useDispatch();
  const incQty = (cartItem) => {
    dispatch(addToCart(cartItem));
  }
  const decQty = (cartItem) => {
    dispatch(removeFromCart(cartItem))
  }

  const [cart, setCart] = useState([]);
  const [totalQty, setTotalQty] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  const useCart = useSelector((state) => state.cartItems)

  useEffect(() => {
    setCart(useCart);
    window.scrollTo(0, 0);
    // console.log(cart);

    totalCartValue();
    priceDiscount();
  }, [incQty])

  const totalCartValue = () => {
    let proQ = 0;
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const qty = proQ += cart[i].productQuantity;
      const totalPrice = total += (cart[i].price * cart[i].productQuantity);

      setTotalQty(qty);
      setCartTotal(totalPrice)
    }
    // console.log(totalQty);
  }

  const priceDiscount = () => {
  }
  let discount = Math.floor(cartTotal)
  let actualDiscount = cartTotal - discount


  return (
    <>
      <div className="cart-box pb-6 bg-zinc-100 dark:bg-gray-900 dark:text-zinc-300">

        {
          cart.length === 0 ? <h3 className='text-2xl font-semibold text-center py-4'>Your Cart Is Currently Empty start <Link to='/' className='underline text-sm font-normal text-blue-600'>Shopping</Link> </h3>
            :
            <h3 className='text-2xl font-semibold text-center py-2'>Your Cart</h3>
        }


        <div className='table-responsive overflow-x-auto'>
          <table className='border w-full text-start m-auto border-black p-2 rounded-b-lg dark:bg-gray-800 dark:border-zinc-600 dark:backdrop-blur-sm'>

            <thead>
              <tr>
                <th className='px-4 py-2'></th>
                <th className='px-4 py-2'></th>
                <th className='px-4 py-2 font-semibold text-sm text-zinc-800 dark:text-zinc-300'>Product</th>
                <th className='px-4 py-2 font-semibold text-sm text-zinc-800 dark:text-zinc-300'>Price</th>
                <th className='pr-4 pl-8 py-2 font-semibold text-sm text-zinc-800 dark:text-zinc-300'>Qty</th>
                <th className='pr-4 pl-8 py-2 font-semibold text-sm text-zinc-800 dark:text-zinc-300'>Subtotal</th>
              </tr>
            </thead>
            <tbody className='text-sm'>
              {
                cart.map((cartItem, i) => (
                  <tr key={i}>
                    <td className='p-4'>1</td>
                    <td><img src={cartItem.image} alt="" className='h-12 rounded-full' /></td>
                    <td className='p-4'>{cartItem.title?.slice(0, 26)}</td>
                    <td className='p-4'>{cartItem.price}</td>
                    <td className='p-4'>
                      <button style={{ border: "none", outline: "none", padding: "0rem .6rem" }} onClick={() => { decQty(cartItem) }}>-</button>
                      <span>{cartItem.productQuantity}</span>
                      <button style={{ border: "none", outline: "none", padding: "0rem .6rem" }} onClick={() => { incQty(cartItem) }}>+</button>
                    </td>
                    <td className='pl-8'>{(cartItem.price * cartItem.productQuantity).toFixed(2)}$</td>
                  </tr>
                ))
              }
            </tbody>
          </table>
        </div>

        <div className="billing-section m-auto md:w-1/4 w-2/4 mt-8 dark:bg-gray-800 rounded-t-lg">
          <div className="cart-total border-black border pl-4 py-2 rounded-t-lg dark:border-zinc-600">
            <h4 className='font-semibold text-zinc-800 '>Cart Total</h4>
            <p className='font-medium mb-1 text-zinc-700 dark:text-zinc-200'>Total Qty : {totalQty}</p>
            <p className='font-medium mb-1 text-zinc-700 dark:text-zinc-200'>Shipping : Free</p>
            <p className='font-medium mb-1 text-zinc-700 dark:text-zinc-200'>Discount : {actualDiscount.toFixed(2)}</p>
            <p className='font-medium mb-1 text-zinc-700 dark:text-zinc-200'>Total Bill  : {cartTotal - actualDiscount}$</p>
          </div>

          <Link
            className='bg-blue-600 w-full py-2 rounded-b-lg block text-center text-zinc-200 hover:bg-blue-700'
          >
            Checkout
          </Link>
        </div>
      </div>
    </>
  )
}

export default Cart