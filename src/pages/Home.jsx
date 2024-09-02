import React from 'react'
import Hero from '../components/Hero'
import Latest from '../components/Latest'
import BestSeller from '../components/BestSeller'

function Home(){
  return (
    <div className='flex flex-col gap-8 mt-2  border border-white'>
      <Hero/>
      <Latest/>
      <BestSeller/>
    </div>
  )
}

export default Home
