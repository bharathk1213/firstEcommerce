import React, { useState } from 'react'
import {assets} from '../assets/assets'
import {NavLink,Link} from 'react-router-dom'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch,faUser,faCartShopping,faBars,faXmark} from '@fortawesome/free-solid-svg-icons'


const Navbar = () => {

  const [show,setShow]=useState(false);

  return (
    <div className='flex text-white p-3 items-center  justify-between rounded-md'>
      <img src={assets.YOur} alt=""  className='h-9 w-18'/>
      <div className='flex'>
        <ul className='hidden sm:flex gap-10 text-white'>
          <NavLink to='/'>
            <li>Home</li>
          </NavLink>
          <NavLink to='/collections'>
            <li>Collection</li>
          </NavLink>
          <NavLink to='/about'>
            <li>About</li>
          </NavLink>
          <NavLink to='/contact'>
            <li>Contact</li>
          </NavLink>
        </ul>
      </div>
      <div className='flex items-center gap-10 sm:mr-5'>
          <div>
            <FontAwesomeIcon icon={faSearch} className='size-5'/>
          </div>
          <div className='flex group relative'>
            <FontAwesomeIcon icon={faUser} className='size-5'/>
            <div className={`absolute hidden group-hover:flex group-hover:flex-col z-20 gap-3 rounded-sm top-[20px] p-4 -left-8 bg-gray-50 text-black ${show?'flex':'hidden'}`}>
              <Link to='/' onClick={()=>setShow(!show)}><p>Profile</p></Link>
              <Link to='/orders' onClick={()=>setShow(!show)}><p>Wishlist</p></Link>
              <Link to='/cart' onClick={()=>setShow(!show)}><p>Orders</p></Link>
            </div>
          </div>
          <div>
            <FontAwesomeIcon icon={faCartShopping} className='size-5'/>
          </div>
          <div onClick={()=>setShow(!show)} className='flex sm:hidden'>
            <FontAwesomeIcon icon={faBars} className='size-6'/>
          </div>
          <div>
            <Link to='/login'>
              <button>LOGIN</button>
            </Link>
          </div>
      </div>
      <div className={`absolute flex flex-col right-0 z-30 sm:hidden overflow-hidden bottom-0 top-5 rounded-s-sm bg-gradient-to-tl from-orange-700/40 via-red-600/60 to-blue-600 ${show?'w-1/2':'w-0'}`}>
        <div>
          <FontAwesomeIcon icon={faXmark} onClick={()=>setShow(!show)} className='size-6'/>
        </div>
        <div className='flex flex-col p-6 gap-6'>
          <Link to='/' onClick={()=>setShow(!show)}><p>Home</p></Link>
          <Link to='/collections' onClick={()=>setShow(!show)}><p>Colleciton</p></Link>
          <Link to='/orders' onClick={()=>setShow(!show)}><p>Orders</p></Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
