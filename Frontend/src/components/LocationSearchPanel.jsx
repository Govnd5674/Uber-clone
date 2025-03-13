import React from 'react'

const LocationSearchPanel = (props) => {
  console.log(props);
  

    // Sample array for location
    const locations = [
      'Rainbow boys Hostel , Nagpur',
      '20 Cooper Square, New York, NY 10003, USA',
      '33 3rd Ave, New York, NY 10003, USA',
      'Rainbow boys Hostel , Nagpur',
      '20 Cooper Square, New York, NY 10003, USA'

    ]

  return (
    <div>
      {
        locations.map(function(elem,idx){
          return<div key={idx} onClick={() => {
            props.setVehiclePanel(true)
            props.setPanelOpen(false)
          }} className='flex items-center border-2 p-3 rounded-xl border-gray-50 active:border-black justify-start my-2 gap-4'>
          <h2 className='bg-[#eee] h-10 w-10 flex items-center justify-center rounded-full' ><i className="ri-map-pin-range-fill"></i></h2>
          <h4 className='font-medium'>{elem}</h4>
        </div>
        })
      } 
    </div>
  )
}

export default LocationSearchPanel
