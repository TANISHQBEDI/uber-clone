import React from 'react'
import uberGo from '../assets/uberGo.png'
import uberBike from '../assets/uberBike.png'

const VehicleSelectPanel = () => {
    const vehicleSelect=[
        {
            name: 'UberGo',
            image: uberGo,
            capacity: 4,
            time: '2 min away',
            description: 'Affordable compact ride',
            price: 93.4
        },
        {
            name: 'UberBike',
            image: uberBike,
            capacity: 2,
            time: '2 min away',
            description: 'Affordable compact ride',
            price: 24
        }
    ]
    return (
        <div>
            {
                vehicleSelect.map((vehicle) => (
                    <div className='flex flex-row p-1 justify-between gap-5 items-center border-2 active:border-black rounded-xl'>
                        <div className='w-20'>
                            <img className='' src={vehicle.image} alt='' />
                        </div>
                        <div className='leading-0 flex flex-col gap-0'>
                            <span className='text-base font-bold'>
                                {vehicle.name}
                                <span className='font-normal pl-2'>
                                    <i className="ri-user-fill"></i> {vehicle.capacity}
                                </span>
                            </span>
                            <span className='text-sm'>{vehicle.time}</span>
                            <span className='text-xs leading-0'>{vehicle.description}</span>
                        </div>
                        <div className='font-bold p-1'>
                            &#36;{vehicle.price}
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default VehicleSelectPanel