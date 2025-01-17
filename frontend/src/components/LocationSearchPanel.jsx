import React from 'react'

const LocationSearchPanel = (props) => {
    const sampleArray=[
      {
        id:1,
        landmark: 'Iscon Towers',
        address: 'Test Address'
      },
      {
        id:2,
        landmark: 'Scape Berkeley',
        address: '105 Berkeley Street, Carlton, Melbourne-3000, Victoria, Australia'
      },
      {
        id:3,
        landmark: 'Iscon Towers',
        address: 'Test Address'
      },
    {
      id:4,
      landmark: 'Central Park',
      address: 'New York, NY, USA'
    },
    {
      id:5,
      landmark: 'Eiffel Tower',
      address: 'Champ de Mars, 5 Avenue Anatole France, 75007 Paris, France'
    },
    {
      id:6,
      landmark: 'Sydney Opera House',
      address: 'Bennelong Point, Sydney NSW 2000, Australia'
    },
    ]
  return (
    <div className='p-2'>
      {/* Sample Data  */}
      {sampleArray.map((item, index) => (
          <div onClick={()=>{
              props.setVehiclePanelOpen(true);
              props.setPanelOpen(false)
            }} key={item.id} className='flex items-center justify-start my-2 flex-row gap-3 border-2 active:border-black rounded-xl p-2'>
            <h2 className=''><i className="ri-map-pin-line text-xl"></i></h2>
            <div>
              <h4>{item.landmark}</h4>
              <p className='text-xs'>{item.address}</p>
            </div>
          
          </div>
      ))}
      {/* <div className='flex items-center justify-start my-2 flex-row gap-3'>
        <h2 className=''><i className="ri-map-pin-line text-xl"></i></h2>
        <div>
          <h4>Iscon Towers</h4>
          <p className='text-xs'>Test Address</p>
        </div>
        
      </div> */}
      
    </div>
  )
}

export default LocationSearchPanel