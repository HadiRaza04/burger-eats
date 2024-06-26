import React, { useContext } from 'react'
import { CartContext } from '../Context/CartContext'
import './products.css'
import { AiOutlineClose } from 'react-icons/ai';

const Cart = () => {
  const cart = useContext(CartContext);
  const total = cart.items.reduce((a, b) => a + b.price, 0);

  const removeFromCart = (e, itemId) => {
    const updatedCart = cart.items.filter(item => item.id !== itemId);
    cart.setItems(updatedCart);
    e.stopPropagation()
  };
  const cartItems = cart.items.map((item, index) => {
    return (
      <div className='w-[80%] h-[120px] m-2 p-2 bg-gray-300 rounded-lg flex flex-col' key={index}>
        <div>
          <h1 className='text-md'>{item.title}</h1>
        </div>
        <div className='flex flex-row items-center justify-between m-2'>
          <p className='font-bold'>Rs: {item.price}</p>
          <button type='button' className='w-[90px] h-[40px] m-2 text-white hover:bg-orange-700 p-2 rounded-md border-none bg-orange-600' onClick={(e) => removeFromCart(e, item.id)}>Remove</button>
        </div>
      </div>
    )
  })
  return (
    <div className='md:w-[70%] w-[80%] mt-12 m-auto  relative lg:mt-12 bg-white rounded-md p-2 border-2 flex flex-col '>
        <h1 className='text-4xl '>
          Cart
        </h1>
        {/* onClick={() => setNav(!nav)}  */}
        <AiOutlineClose size={ 30 } className='absolute top-4 right-4 cursor-pointer'/>
        <div className='overflow-scroll xyz h-[300px] flex flex-col items-center pt-4'>
            {cartItems}
        </div>
        <div className=' bottom-2 w-[90%]  p-3'>
          <div className='w-[100%] h-[5px] '>
            {/* line */}
          </div>
          <h1 className='text-2xl mt-4  font-bold'>Total {total} Rupees </h1>
        </div>
    </div>
  )
}
export default Cart;