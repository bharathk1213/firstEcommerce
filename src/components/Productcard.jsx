import React from 'react'
import {Link} from 'react-router-dom'

function Productcard({id,image,currency,name,price}){
  return (
    <Link to={`/product/${id}`}>
      <div className='flex flex-col overflow-hidden items-left p-2 rounded-md text-black gap-1 bg-neutral-200 border border-white hover:shadow-md hover:shadow-black'>
        <img src={image} alt="" className=' w-96 h-60 object-cover hover:scale-105 transition ease-in-out duration-300 rounded-md'/>
        <h2 className='font-sans font-semibold'>{name}</h2>
        <p className='font-light text-xs'>{currency}{price}</p>
      </div>
    </Link>
  )
}

export default Productcard

