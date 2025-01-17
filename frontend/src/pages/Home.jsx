import React, { useRef, useState } from 'react'
import {useGSAP} from '@gsap/react'
import gsap from 'gsap'
import map from '../assets/map.png'
import LocationSearchPanel from '../components/LocationSearchPanel'
import uberGo from '../assets/uberGo.png'
import uberBike from '../assets/uberBike.png'
import VehicleSelectPanel from '../components/VehicleSelectPanel'


const Home = () => {
  const [pickup, setPickup] = useState('')
  const [destination, setDestination] = useState('')
  const [panelOpen, setPanelOpen] = useState(false)

  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false)
  const vehiclePanelRef = useRef(null)
  const vehiclePanelCloseRef = useRef(null)

  const panelRef=useRef(null)
  const pannelCloseRef = useRef(null)
  const submitHandler = (e) => {
    e.preventDefault()
  }

  useGSAP(function(){
    if(panelOpen){
      gsap.to(panelRef.current,{
        height: '70%',
        display:''
      })
      gsap.to(pannelCloseRef.current,{
        opacity:1,
      })
    }
    else{
      gsap.to(panelRef.current,{
        height: '0%',
        display:'none'
      })
      gsap.to(pannelCloseRef.current,{
        opacity:0,
      })
    }}
  ,[panelOpen])

  useGSAP(function(){
    if(vehiclePanelOpen){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)',
      })
      gsap.to(pannelCloseRef.current,{
        opacity:1,
      })
    }
    else{
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)',
      })
      gsap.to(pannelCloseRef.current,{
        opacity:0,
      })
  }}
  ,[vehiclePanelOpen])

  

  return (
    <div className='h-screen relative'>
      <img className='w-16 absolute left-5 top-5' src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Uber_logo_2018.svg/2560px-Uber_logo_2018.svg.png" alt="" />
      <div className='h-screen w-screen'>
        {/* Temp Img */}
        <img className='h-full w-full object-cover' src={map} alt="" />
      </div>

      <div className='h-screen flex flex-col justify-end absolute top-0 w-full'>
        <div className='h-[30%] bg-white p-5 relative'>
          <h5 ref={pannelCloseRef} onClick={() => setPanelOpen(!panelOpen)} className='absolute opacity-0 right-5 top-5 text-2xl'>
            <i className="ri-arrow-down-s-line"></i>
          </h5>
          <h1 className='text-2xl font-semibold'>Find a trip</h1>
          <form onSubmit={(e) => submitHandler(e)}>
            <div className='line absolute h-16 w-1 top-[45%] left-[11%] rounded-full bg-gray-800'></div>
            <input
              value={pickup}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg mt-6 w-full'
              type="text"
              placeholder='Add pickup location'
              required />
            <input
              value={destination}
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setDestination(e.target.value)}
              className='bg-[#eeeeee] px-12 py-2 text-base rounded-lg mt-3 w-full'
              type="text"
              placeholder='Add destination'
              required />
          </form>
        </div>
        <div ref={panelRef} className='h-[70%] bg-white'>
          <LocationSearchPanel setPanelOpen={setPanelOpen} setVehiclePanelOpen={setVehiclePanelOpen} />
        </div>


      </div>

      <div ref={vehiclePanelRef} className='w-full fixed z-10 bottom-0 p-3 flex gap-5 flex-col bg-white translate-y-full'>
        <h5 ref={vehiclePanelCloseRef} 
          onClick={() => {
              console.log('vehicle close')
              setVehiclePanelOpen(false)
              // setPanelOpen(true)
            }} 
            className='absolute right-5 text-2xl'>
              <i className="ri-arrow-down-s-line"></i>
        </h5>
        <h2 className='font-semibold text-xl mb-5'>Choose a vehicle</h2>
            <VehicleSelectPanel/>
        

        
      </div>
    </div>
  )
}

export default Home