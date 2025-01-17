import React from 'react'
import { Link } from 'react-router-dom'
import {CaptainDataContext} from '../context/CaptainContext'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import captainLogo from '../assets/captainLogo.png'

const CaptainSignup = () => {
  const [firstName, setFirstName] = React.useState('')
  const [lastName, setLastName] = React.useState('')
  const [email, setEmail] = React.useState('')
  const [password, setPassword] = React.useState('')
  const [vehicleColor, setVehicleColor] = React.useState('')
  const [VehiclePlate, setVehiclePlate] = React.useState('')
  const [vehicleCapacity, setVehicleCapacity] = React.useState('')
  const [vehicleType, setVehicleType] = React.useState('')
  const {captainData,setCaptainData}=React.useContext(CaptainDataContext)
  const navigation = useNavigate()
  const submitHandler = async(e) => {
    e.preventDefault()
    const capData={
      fullname: {
        firstname: firstName,
        lastname: lastName
      },
      email: email,
      password: password,
      vehicle:{
        color: vehicleColor,
        plate: VehiclePlate,
        capacity: vehicleCapacity,
        vehicleType: vehicleType
      }
    }
    await axios.post(`${import.meta.env.VITE_BASE_URL}/captains/register`, capData)
      .then(response => {
      if(response.status === 201){
        const data = response.data
        setCaptainData(data.user)
        localStorage.setItem('token', data.token)
        navigate('/captain-home')
      }
      })
      .catch(error => {
      console.error("There was an error registering the user!", error)
      })
    setFirstName('')
    setLastName('')
    setEmail('')
    setPassword('')
    setVehicleColor('')
    setVehiclePlate('')
    setVehicleCapacity('')
    setVehicleType('')
  }
  return (
    <div className='p-7 flex flex-col justify-between h-screen'>

      <div>
        <img className='w-20 mb-10' src={captainLogo} alt="" />
        <form onSubmit={(e) => submitHandler(e)}>
          <h3 className='text-m font-medium mb-2'>Your Name</h3>
          <div className='flex flex-row gap-4'>
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
          <h3 className='text-m font-medium mb-2'>Vehicle Info</h3>
          <div className='flex flex-col'>
            <div className='flex flex-row gap-4'>
              <input
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-m placeholder:text-sm'
                type="text"
                onChange={(e) => setVehicleColor(e.target.value)}
                value={vehicleColor}
                placeholder='Vehicle Color'
                required />
              <input
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-m placeholder:text-sm'
                type="text"
                onChange={(e) => setVehiclePlate(e.target.value)}
                value={VehiclePlate}
                placeholder='Vehicle Plate'
                required />
            </div>
            <div className='flex flex-row gap-4'>
              <input
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-m placeholder:text-sm'
                type="number"
                onChange={(e) => setVehicleCapacity(e.target.value)}
                value={vehicleCapacity}
                placeholder='Vehicle Capacity'
                required />
              <input
                className='bg-[#eeeeee] mb-7 rounded px-4 py-2 border w-1/2 text-m placeholder:text-sm'
                type="text"
                onChange={(e) => setVehicleType(e.target.value)}
                value={vehicleType}
                placeholder='Vehicle Type'
                required />
            </div>
           
          </div>
          
          <button
            className='bg-[#111] text-white mb-3 font-semibold rounded px-4 py-2 w-full'
          >Signup</button>
          <div>
            <span className='text-center'>Have an account?&nbsp;</span><Link className='text-blue-600 ' to='/captain-login'>Login</Link>
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

export default CaptainSignup