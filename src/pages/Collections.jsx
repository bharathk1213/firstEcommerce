import React from 'react'
import { ProductsContext } from '../context/ProductsContext';
import Productcard from '../components/Productcard';
import { useState,useContext,useEffect } from 'react';

function Collections(){

  const {products,currency}=useContext(ProductsContext)

  const [display,setDisplay]=useState([]);

  useEffect(()=>{
    setDisplay(products.slice(0,48))
  },[products])

  return (
    <div className='flex flex-col gap-8 mt-2  border border-white items-center'>
      <p className='text-white'>COLLECTIONS</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-2 mx-10 overflow-hidden bg-white border border-white rounded-md gap-10'>
        {
          display.map((product,index)=>{
            return(
              <Productcard key={index} image={product.image} name={product.name} currency={currency} price={product.price}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Collections
