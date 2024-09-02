import React from 'react'

function Title(){
  return (
    <div className='flex flex-col'>
      <div className='flex items-center gap-4'>
      <h1 className='font-serif text-lg text-white'>YOUR</h1>
      <p className='h-[5px] w-16 bg-gradient-to-r from-white to-black '></p>
      </div>
      <div className='flex items-center gap-3'>
      <p className='h-[5px] w-12 bg-gradient-to-r from-black to-white'></p>
      <h1  className='font-serif text-lg text-white'>CHOICE</h1>
      </div>
    </div>
  )
}

export default Title
