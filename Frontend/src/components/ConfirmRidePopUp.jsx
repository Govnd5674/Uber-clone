import React from "react";
import { Link } from "react-router-dom";

const ConfirmRidePopUp = (props) => {

    // const [opt, setOpt] = useState('');

    // const submitHandler(e)=>{
    //     e.preventDefault();
    // }


  return (
    <div>
      <h5
        opacity={0}
        onClick={() => {
        //   props.setRidePopUPPanel(false);
        props.setConfirmRidePopUPPanel(false);
        }}
        className="absolute top-6 right-6 text-2xl"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Confrim this Ride to Start
      </h3>
      <div className="flex items-center justify-between mt-4 p-3 bg-yellow-300 rounded-lg">
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
          <form action="" 
        //   onSubmit={(e)=> {
        //     submitHandler(e);
        //   }}
          >


            <input
            //  value={opt} onChange={()=>{
            //     setOpt(e.target.value)
            // }}
             type="text" placeholder="Enter OTP"               
            className="bg-[#eee] px-6 py-4 font-mono text-lg rounded-lg w-full mt-3"
            />
            <Link
              to="/captain-riding"
              onClick={()=>{
                props.ConfirmRidePopUp(false);
              }}
              className="flex justify-center text-lg w-full mt-5 bg-green-600 font-semibold p-3 text-white rounded-lg "
            >
              Confirm
            </Link>
            <button
              onClick={() => {
                props.setRidePopUPPanel(false);
                props.setConfirmRidePopUPPanel(false);
              }}
              className="w-full mt-5 bg-red-500 text-lg font-semibold p-3 text-white rounded-lg "
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ConfirmRidePopUp;
