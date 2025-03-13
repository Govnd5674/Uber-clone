import React from "react";

const LookingForDriver = (props) => {
  return (
    <div>
      <h5
        opacity={0}
        onClick={() => {
          props.setVehiclePanel(false);
          props.setVehicleFound(false);
        }}
        className="absolute top-6 right-6 text-2xl"
      >
        <i className="ri-arrow-down-wide-fill"></i>
      </h5>
      <h3 className="text-2xl font-semibold mb-5">
        Looking For a Nearby Driver
      </h3>
      <div className="flex gap-2 justify-between flex-col items-center">
        <img
          className="h-24"
          src="https://www.pngplay.com/wp-content/uploads/8/Uber-PNG-Photos.png"
          alt=""
        />
      </div>
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
    </div>
  );
};

export default LookingForDriver;
