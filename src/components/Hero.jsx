import React from 'react'
import { assets } from '../assets/assets'
import Title from './Title';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {Link} from 'react-router-dom'

function Hero(){
  return (
    <>
    <div className='relative rounded-lg h-[500px] overflow-hidden'>
      <div className='absolute inset-0 bg-gradient-to-r from-black via-transparent to-transparent'>
      </div>
      <img src={assets.heroimg2} className='h-full w-full object-cover'/>
      <div className='absolute flex flex-col gap-10 inset-0 mt-16 ml-10 sm:ml-40'>
        <Title/>
        <div>
          <p className='text-white'>Explore your unique and custom fashion with us...</p>
        </div>
        <Link to='/collections'>
          <div className='absolute flex top-52 ml-20 gap-1 hover:gap-2 duration-500 w-[105px] p-2 rounded-xl  inset-0 mt-20 h-10 items-center text-sm text-black bg-white'>
            <button className='hover:-ml-[2px] duration-500'>SHOPNOW</button>          
            <FontAwesomeIcon icon={faArrowRight} className='fa-3'/>
          </div>
        </Link>
      </div>
    </div>
    </>
  );
}

export default Hero
