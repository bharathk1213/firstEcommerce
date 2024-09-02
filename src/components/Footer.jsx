import React from 'react'
import { NavLink } from 'react-router-dom'
import Title from './Title'

function Footer(){
  return (
    <div className='flex text-white justify-between px-10 mt-10 border border-white'>
      <div className='w-80'>
        <Title/>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. In illo omnis enim similique? Sunt voluptates magnam, id ut culpa sit libero blanditiis tenetur optio fugiat fugit molestias deserunt aut necessitatibus.</p>
      </div>
      <div className='flex flex-col gap-7'>
        <h1>OurCompany</h1>
        <ul>
          <NavLink to='/'><li>Home</li></NavLink>
          <NavLink to='/about'><li>AboutUs</li></NavLink>
          <NavLink to='/delivery'><li>Delivery</li></NavLink>
        </ul>
      </div>
      <div className='flex flex-col gap-7'>
        <h1>GET IN TOUCH</h1>
        <p>+917075217746</p>
        <p>bharathkumark1017@gmail.com</p>
      </div>
    </div>
  )
}

export default Footer
