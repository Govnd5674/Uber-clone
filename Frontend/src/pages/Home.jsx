import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPane from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmedRide from "../components/ConfirmedRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false);
  const [confirmRidePanel, setConfirmRidePanel] = useState(false);
  const [vehiclePanel, setVehiclePanel] = useState(false);
  const [vehicleFound, setVehicleFound] = useState(false);
  const [waitingForDriver, setWaitingForDriver] = useState();


  const vehiclePanelRef = useRef(null);
  const confirmRidePanelRef = useRef(null);
  const panelCloseRef = useRef(null);
  const panelRef = useRef(null);
  const vehicleFoundRef = useRef(null);
  const waitingForDriverRef  = useRef(null);

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submitted");
  };

  useGSAP(
    function () {
      if (panelOpen) {
        gsap.to(panelRef.current, { height: "70%", opacity: 1, padding: 24 });
        gsap.to(panelCloseRef.current, {
          opacity: 1,
          color:'black',
          duration: 0.8,
        });
      } else {
        gsap.to(panelRef.current, { height: "0%", opacity: 0, padding: 0 });
        gsap.to(panelCloseRef.current, {
          opacity: 0,
          color:'white',
          duration: 0.8,
        });
      }
    },
    [panelOpen]
  );

  useGSAP(function(){
    if(vehiclePanel){
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(0)',
      })
    }else{
      gsap.to(vehiclePanelRef.current,{
        transform: 'translateY(100%)',
      })
    }
  },[vehiclePanel])

  useGSAP(function(){
    if(confirmRidePanel){
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(0)',
      })
    }else{
      gsap.to(confirmRidePanelRef.current,{
        transform: 'translateY(100%)',
      })
    }
  },[confirmRidePanel])
  
  useGSAP(function(){
    if(vehicleFound){
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(0)',
      })
    }else{
      gsap.to(vehicleFoundRef.current,{
        transform: 'translateY(100%)',
      })
    }
  },[vehicleFound])

  useGSAP(function(){
    if(waitingForDriver){
      gsap.to(waitingForDriverRef.current,{
        transform: 'translateY(0)',
      })
    }else{
      gsap.to(waitingForDriverRef.current,{
        transform: 'translateY(100%)',
      })
    }
  },[waitingForDriver])

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute left-5 top-5 "
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQYQy-OIkA6In0fTvVwZADPmFFibjmszu2A0g&s"
        alt=""
      />
      <div className="h-screen w-screen">
        {/* temp img */}
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/v2/resize:fit:1400/0*gwMx05pqII5hbfmX.gif"
          alt=""
        />
      </div>
      <div className=" absolute flex flex-col justify-end h-screen top-0 w-full ">
        <div className="h-[30%] p-6 bg-white relative">
          <h5
            opacity={0}
            ref={panelCloseRef}
            onClick={() => {
              setPanelOpen(false);
            }}
            className="absolute top-6 right-6 text-2xl"
          >
            <i className="ri-arrow-down-wide-fill"></i>
          </h5>
          <h4 className="text-2xl font-semibold">Find a Trip</h4>
          <form
            onSubmit={(e) => {
              submitHandler(e);
            }}
          >
            <div className="line absolute h-16 w-1 top-[45%] left-[10%] bg-gray-600 rounded-full"></div>
            <input
              onClick={() => setPanelOpen(true)}
              value={pickup}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-5"
              type="text"
              placeholder="Add a Pick-up Location"
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-lg rounded-lg w-full mt-3"
              type="text"
              placeholder="Enter your Destination"
            />
          </form>
        </div>
        <div ref={panelRef} className="bg-white h-0 opacity-1 ">
          <LocationSearchPane setPanelOpen={setPanelOpen} setVehiclePanel={setVehiclePanel}  />
        </div>
      </div>
      <div ref={vehiclePanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-10 pt-12 w-full">
        <VehiclePanel setConfirmRidePanel={setConfirmRidePanel} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={confirmRidePanelRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full">
            <ConfirmedRide setConfirmRidePanel={setConfirmRidePanel} setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={vehicleFoundRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full">
            <LookingForDriver setVehicleFound={setVehicleFound} setVehiclePanel={setVehiclePanel} />
      </div>
      <div ref={waitingForDriverRef} className="fixed z-10 bottom-0 translate-y-full bg-white px-3 py-6 pt-12 w-full">
            <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
