import React, { useContext, useEffect, useState } from 'react'
import {ProductsContext} from '../context/ProductsContext'
import Productcard from './Productcard';

function Latest(){

  const {products,currency}=useContext(ProductsContext)

  const [display,setDisplay]=useState([]);

  useEffect(()=>{
    setDisplay(products.filter(products=>products.Latest).slice(0,15))
  },[products])

  return (
    <div className='flex flex-col items-center gap-5 bg-black'>
      <p className='text-white'>OUR LATEST</p>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 p-2 mx-10 overflow-hidden bg-white border border-white rounded-md gap-10'>
        {
          display.map((product,index)=>{
            return(
              <Productcard key={index} image={product.image} name={product.name} currency={currency} price={product.price} id={product.id}/>
            )
          })
        }
      </div>
    </div>
  )
}

export default Latest

