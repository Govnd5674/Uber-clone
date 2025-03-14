import React from 'react'
import { Link } from "react-router-dom";


const FinishRide = (props) => {
  return (
    <div>
      <div>
      <h5
        opacity={0}
        onClick={() => {
        //   props.setRidePopUPPanel(false);
        // props.setConfirmRidePopUPPanel(false);
        props.setFinishRidePanel(false);
        }}
        className="absolute top-6 right-6 text-2xl"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Finish this Ride to Start
      </h3>
      <div className="flex items-center justify-between mt-4 p-3 border-2 border-yellow-300 rounded-lg">
        <div className="flex items-center gap-3">
          <img
            className="h-10 w-10 rounded-full object-cover"
            src="https://64.media.tumblr.com/62f506fa5ba649dadd7547c2112286e8/tumblr_pl0gr4xpop1u24tvp_1280.jpg "
            alt=""
          />
          <h4 className="text-lg font-medium">dhruv ingle</h4>
        </div>
        <h5 className="text-lg font-semibold">2.2 KM</h5>
      </div>
      <div className="flex gap-2 justify-between flex-col items-center"></div>
      <div className="w-full">
        <div className="flex items-center gap-5 p-3">
          <i className="text-lg ri-map-pin-4-fill"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A </h3>
            <p className="text-gray-600 text-sm">YCCE, Nagpur</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <i className="text-lg ri-map-pin-3-line"></i>
          <div>
            <h3 className="text-lg font-medium">562/11-A </h3>
            <p className="text-gray-600 text-sm">YCCE, Nagpur</p>
          </div>
        </div>
        <div className="flex items-center gap-5 p-3">
          <i className="text-lg ri-paypal-fill"></i>
          <div>
            <h3 className="text-lg font-medium">$193.20</h3>
            <p className="text-gray-600 text-sm">Cash Cash</p>
          </div>
        </div>
      </div>
      <div className="py-4">
        <div className="mt-6 ">
            <Link
              to="/captain-home"
              className="flex justify-center w-full mt-5 bg-green-600 font-semibold p-3 text-lg text-white rounded-lg "
            >
              Finish Ride
            </Link>

            <p className='mt-12 w-full flex items-center justify-center text-xs'>Click on Finish Ride if You Have Completed the Payment.</p>
        </div>
      </div>
    </div>
    </div>
  )
}

export default FinishRide
