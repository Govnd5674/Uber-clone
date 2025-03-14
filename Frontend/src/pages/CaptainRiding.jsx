import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import React, { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import FinishRide from '../components/FinishRide'

const CaptainRiding = () => {

    const [finishRidePanel, setFinishRidePanel] = useState(false);

    const finishRidePanelRef = useRef(null);


    useGSAP(function(){
        if(finishRidePanel){
          gsap.to(finishRidePanelRef.current,{
            transform: 'translateY(0)',
          })
        }else{
          gsap.to(finishRidePanelRef.current,{
            transform: 'translateY(100%)',
          })
        }
      },[finishRidePanel ])



  return (
    <div className="h-screen relative">
      <div className="fixed p-4 top-0 flex items-center justify-between w-screen">
        <img
          className="w-16"
          src="https://www.svgrepo.com/show/505031/uber-driver.svg"
          alt=""
        />
        <Link
          to="/home"
          className=" h-10 w-10 bg-gray-400 flex items-center justify-center rounded-full"
        >
          <i className="text-lg font-medium ri-logout-box-r-line"></i>
        </Link>
      </div>

      <div className="h-4/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-1/5 bg-yellow-400 flex items-center relative justify-between p-6"
        onClick={()=>{
            setFinishRidePanel(true);
        }}
      >
      <h5
        opacity={0}
        onClick={() => {
        //   props.setRidePopUPPanel(false);
        }}
        className="absolute p-1 top-0 text-center w-[93%] text-2xl"
      >
        <i className="ri-arrow-up-wide-fill"></i>
      </h5>
        <h4 className='text-xl font-semibold' >4 KM Away</h4>
        <button className="flex justify-center bg-green-600 font-semibold p-3 px-10 text-white rounded-lg ">Complete Ride</button>
      </div>
      <div ref={finishRidePanelRef} className="fixed h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full">
        <FinishRide setFinishRidePanel={setFinishRidePanel} />
      </div>
    </div>
  )
}

export default CaptainRiding
