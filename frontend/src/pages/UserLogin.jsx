import React from 'react'
import { Link } from 'react-router-dom'
import { UserDataContext } from '../context/UserContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

const UserLogin = () => {
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const navigate=useNavigate()
  const { user, setUser } = React.useContext(UserDataContext)

  const submitHandler = async(e) => {
    e.preventDefault()
    const userData={ email: email, password: password }
    await axios.post(`${import.meta.env.VITE_BASE_URL}/users/login`, userData)
      .then(response => {
      if(response.status === 200){
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigate('/home')
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
        <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
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
            <span className='text-center'>New here?&nbsp;</span><Link className='text-blue-600 ' to='/signup'>Create Account</Link>
          </div>
          
          
        </form>
      </div>
      <div>
        <Link
          to='/captain-login'
          className='bg-gray-400 flex items-center justify-center text-white mb-5 font-semibold rounded px-4 py-2 w-full mt-10'
        >Sign in as Captain</Link>
      </div>
      
      

    </div>
  )
}

export default UserLogin