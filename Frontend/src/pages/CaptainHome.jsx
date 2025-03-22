import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import RidePopUp from "../components/RidePopUp";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import ConfirmRidePopUp from "../components/ConfirmRidePopUp";
import { CaptainDataContext } from "../context/CaptainContext";
import { SocketContext } from "../context/SocketContext";
import { useContext } from "react";
import { useEffect } from "react";



const CaptainHome = () => {

  const [ridePopUPPanel, setRidePopUPPanel] = useState(true);
  const [confirmRidePopUPPanel, setConfirmRidePopUPPanel] = useState(false);




  const ridePopUPPanelRef = useRef(null);
  const confirmRidePopUPPanelRef = useRef(null);


  const { socket } = useContext(SocketContext)
  const { captain } = useContext(CaptainDataContext)

 useEffect(() => {
    console.log(captain);

      socket.emit("join", { userType: "captain", userId: captain._id });
  }, [ captain ])


  useGSAP(function(){
    if(ridePopUPPanel){
      gsap.to(ridePopUPPanelRef.current,{
        transform: 'translateY(0)',
      })
    }else{
      gsap.to(ridePopUPPanelRef.current,{
        transform: 'translateY(100%)',
      })
    }
  },[ridePopUPPanel])
  
  useGSAP(function(){
    if(confirmRidePopUPPanel){
      gsap.to(confirmRidePopUPPanelRef.current,{
        transform: 'translateY(0)',
      })
    }else{
      gsap.to(confirmRidePopUPPanelRef.current,{
        transform: 'translateY(100%)',
      })
    }
  },[confirmRidePopUPPanel])

  return (
    <div className="h-screen">
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

      <div className="h-3/5">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>

      <div className="h-2/5 p-4">
        <CaptainDetails />
      </div>
      <div ref={ridePopUPPanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full">
        <RidePopUp setRidePopUPPanel={setRidePopUPPanel} setConfirmRidePopUPPanel={setConfirmRidePopUPPanel}/>
      </div>
      <div ref={confirmRidePopUPPanelRef} className="fixed h-screen z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full">
        <ConfirmRidePopUp setConfirmRidePopUPPanel={setConfirmRidePopUPPanel} setRidePopUPPanel={setRidePopUPPanel}/>
      </div>
    </div>
  );
};

export default CaptainHome;
