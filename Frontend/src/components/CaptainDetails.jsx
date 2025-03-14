import React from 'react'

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex items-center justify-between">
          <div className="flex items-center justify-start gap-3">
            <img className="h-10 w-10 rounded-full object-cover" src="https://images.unsplash.com/photo-1604072366595-e75dc92d6bdc?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            <h4 className="text-lg font-medium">Harshika Patel</h4>
          </div>
          <div>
            <h4 className="text-xl font-semibold">$259.6</h4>
            <p className="text-sm text-gray-600">Earned</p>
          </div>
        </div>
          <div className="flex p-5 mt-8 bg-gray-300 rounded-xl justify-center gap-4 items-start"> 
            <div className="text-center ">
              <i className="text-3xl mb-2 font-thin ri-time-line"></i>
              <h5 className="font-medium text-lg">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center ">
              <i className="text-3xl mb-2 font-thin ri-speed-up-line"></i>
              <h5 className="font-medium text-lg">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
            <div className="text-center ">
              <i className="text-3xl mb-2 font-thin ri-booklet-line"></i>
              <h5 className="font-medium text-lg">10.2</h5>
              <p className="text-sm text-gray-600">Hours Online</p>
            </div>
          </div>
    </div>
  )
}

export default CaptainDetails
