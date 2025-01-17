import React from 'react'
import home from '../assets/home.jpg'
import logo from '../assets/logo.png'
import { Link } from 'react-router-dom'

const Start = () => {
  return (
    <div>
        <div className='bg-cover bg-center bg-[url(https://images.unsplash.com/photo-1647692833760-83032ecf3e3e?q=80&w=3386&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)] h-screen pt-8 flex justify-between flex-col w-full'>
            <img className='w-20 ml-8' src={logo} alt='Uber Logo'/>
            <div className='bg-white py-4 px-4'>
                <h2 className='text-2xl font-bold'>Get started with Uber</h2>
                <Link to='/login' className='flex items-center justify-center w-full bg-black text-white py-3 mt-5 rounded'>Continue</Link>
            </div>
        </div>
    </div>
  )
}

export default Start

