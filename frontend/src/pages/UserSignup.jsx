import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {UserDataContext} from '../context/UserContext'

const UserSignup = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')

  const {user,setUser}=React.useContext(UserDataContext)

  const navigation = useNavigate()

  const submitHandler = async (e) => {
    e.preventDefault()
    const newUser={
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password
    }
    // console.log(newUser)

    axios.post(`${import.meta.env.VITE_BASE_URL}/users/register`, newUser)
      .then(response => {
      if(response.status === 201){
        const data = response.data
        setUser(data.user)
        localStorage.setItem('token', data.token)
        navigation('/home')
      }
      })
      .catch(error => {
      console.error("There was an error registering the user!", error)
      })
    // console.log(response)

    // if(response.status===201){
    //   const data=response.data
      
    //   setUser(data.user)

    //   navigation('/home')
    // }


    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>

      <div>
        <img className='w-20 mb-10' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-m font-medium mb-2'>Your Name</h3>
          <div className='flex flex-ro gap-4'>
            <input
              className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border text-m placeholder:text-sm'
              type="text"
              onChange={(e) => setFirstName(e.target.value)}
              value={firstName}
              placeholder='First Name'
              required />
            <input
              className='bg-[#eeeeee] w-1/2 mb-7 rounded px-4 py-2 border text-m placeholder:text-sm'
              type="text"
              onChange={(e) => setLastName(e.target.value)}
              value={lastName}
              placeholder='Last Name'
            />
          </div>
          <h3 className='text-m font-medium mb-2'>What's your email</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-m placeholder:text-sm'
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder='email@example.com'
            required />
          <h3 className='text-m font-medium mb-2'>What's your password</h3>
          <input
            className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-full text-m placeholder:text-sm'
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder='password'
            required />
          <button
            className='bg-[#111] text-white mb-3 font-semibold rounded px-4 py-2 w-full'
          >Signup</button>
          <div>
            <span className='text-center'>Have an account?&nbsp;</span><Link className='text-blue-600 ' to='/login'>Login</Link>
          </div>
        </form>
      </div>
      <div>
        <p className='text-xs leading-tight'>By proceeding, you consent to get calls, Whatsapp or SMS messages, including by automated means, from Uber
          and its affiliates for marketing purposes. You may opt out of receiving such communication at any time.
        </p>
      </div>


    </div>
  )
}

export default UserSignup