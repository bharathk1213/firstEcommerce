import React, { useState } from 'react'
import Title from '../components/Title'

function Login(){

  const [user,setUser]=useState('login')
  const handleSubmit=(e)=>{e.preventDefault();

  console.log('FormSubmitted:',{
    username:e.target.username.value,
    email:e.target.email?.value,
    password:e.target.password.value,
  }  )
  }


  return (
    <div className='border border-white bg-slate-400'>
      <Title/>  
      <form className='flex flex-col items-center gap-3 w-52 border border-black p-3 rounded-sm text-xs'
            onSubmit={handleSubmit}
      >
        <p className='font-sans'>
          {user==='login'?'Login':'Signup'}
        </p>
        <input type="text" placeholder='username' className='rounded-[2px] p-1' required/>
        <input type="email" placeholder='userEmail' className={`rounded-[2px] p-1 ${user==='login'?'hidden':'flex'}`} required/>
        <input type="password" placeholder='password' className='rounded-[2px] p-1' required/>

        {/* For rendering Signup and Login */}
        {user==='login'
        ?
        (<>
          <a onClick={()=>setUser('signup')} className='underline cursor-pointer'>
          createone
          </a>
          <button type='submit' className='border border-transparent bg-black w-16 text-center text-white p-1 mx-auto cursor-pointer'>
          Login
          </button>
        </>)
        :
        (<>
          <a onClick={()=>setUser('login')} className='underline cursor-pointer'>
          alreadyexists
          </a>
          <button type='submit' className='border border-transparent bg-black w-16 text-center text-white p-1 mx-auto cursor-pointer'>
          signup
          </button>
        </>)
        }
      </form>
    </div>
  )
}

export default Login
