import React from 'react'
import { Link } from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import captainLogo from '../assets/captainLogo.png'

const CaptainLogin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const {captain,setCaptain}=React.useContext(CaptainDataContext)
  const navigate = useNavigate()
  const submitHandler = async(e) => {
    e.preventDefault()
    const capData={ email: email, password: password }
    await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/login`, capData)
    .then(response => {
      if(response.status === 200){
        const data = response.data
        setCaptain(data.captain)
        console.log(data)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
      })
      .catch(error => {
      console.error("There was an error registering the user!", error)
      })
    setEmail('')
    setPassword('')
  }

  return (
    <div className='p-7 flex flex-col justify-between h-screen'>
      
      <div>
        <img className='w-20 mb-10' src={captainLogo} alt="" />
        <form onSubmit={(e)=>submitHandler(e)}>
          <h3 className='text-lg font-medium mb-2'>What's your email</h3>
          <input 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="email"
            onChange={(e) => setEmail(e.target.value)} 
            value={email}
            placeholder='email@example.com' 
            required />
          <h3 className='text-lg font-medium mb-2'>What's your password</h3>
          <input 
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-lg placeholder:text-base'
            type="password"
            onChange={(e) => setPassword(e.target.value)} 
            value={password} 
            placeholder='password' 
            required />
          <button
            className='bg-[#111] text-white mb-3 font-semibold rounded px-4 py-2 w-full'
          >Login</button>
          <div>
            <span className='text-center'>Join fleet?&nbsp;</span>
            <Link 
              className='text-blue-600 ' 
              to='/captain-signup'>Become a Captain</Link>
          </div>
          
          
        </form>
      </div>
      <div>
        <Link
          to='/login'
          className='bg-gray-400 flex items-center justify-center text-white mb-5 font-semibold rounded px-4 py-2 w-full mt-10'
        >Sign in as User</Link>
      </div>
      
      

    </div>
  )
}

export default CaptainLogin