import React, { useState, useContext } from 'react'
import {data} from '../data/data.js';
import { CartContext } from '../Context/CartContext.jsx';
function Food() {
    const cart = useContext(CartContext);
    // console.log(data);
    const [foods, setFoods] = useState(data);
    // Filter types burger/pizza/etc
    const filterType = (category) => {
        setFoods(
            data.filter((item) => {
                return item.category === category;
            })
        );
    };
    // Filter by Price
    const filterPrice = (price) => {
        setFoods(
            data.filter((item) => {
                return item.price === price;
            })
        );
    };
  return (
   <div className='max-w-[1640px] m-auto px-4 py-12'>
        <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Items</h1>
        {/* Filter Row */}
        <div className='flex flex-col lg:flex-row justify-between'>
            
            {/* Filter Type */}
            <div >
                <p className='font-bold text-gray-700'>Filter Type</p>
                <div className='flex justify-between flex-wrap'>
                    <button onClick={() => setFoods(data)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>All</button>
                    <button onClick={() => filterType('burger')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Burgers</button>
                    <button onClick={() => filterType('pizza')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Pizza</button>
                    <button onClick={() => filterType('salad')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Salads</button>
                    <button onClick={() => filterType('chicken')} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>Chicken</button>
                </div>
            </div>
            {/* Filter Price */}
            <div>
                <p className='font-bold text-gray-700'>Filter Price</p>
                <div className='flex justify-between max-w-[390px] w-full'>
                    <button onClick={() => filterPrice(500)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>500</button>
                    <button onClick={() => filterPrice(1000)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>1000</button>
                    <button onClick={() => filterPrice(3000)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>3000</button>
                    <button onClick={() => filterPrice(5000)} className='m-1 border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white'>5000</button>
                </div>
            </div>
        </div>
        {/* Display Foods */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-1 pt-4'>
            {foods.map((item, index) => (
                <div key={index} className='border shadow-lg rounded-lg hover:scale-105 duration-300'>
                    <img src={item.image} alt={item.name}
                    className='w-full h-[200px] object-cover rounded-t-lg'
                    />
                    <div className='flex justify-between px-1 md:px-2 py-4'>
                        <p className='font-bold text-sm md:text-xl'>{item.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full md:text-lg sm:text-md text-sm'>{item.price}</span>
                        </p>
                    </div>
                    <div className='flex w-full p-2'>
                        <button className='w-full h-[40px] text-sm md:text-lg border-orange-600 hover:bg-orange-600 text-orange-600 hover:text-white' onClick={() => cart.setItems([{title: item.name, price: item.price, id: item.id}, ...cart.items])}>Add to cart</button>
                    </div>
                </div>
            ))}
        </div>
   </div>
  )
}
export default Food