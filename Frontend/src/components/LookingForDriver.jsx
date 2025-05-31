import React from 'react'

const LookingForDriver = ({ setVehicleFound, setWaitingForDriver }) => {
  return (
      <div>
          <h5
          onClick={() => {
            setVehicleFound(false);
            setWaitingForDriver(true);
          }}
          className='w-[90%] absolute left-[45%] top-[2%] leading-tight text-xl font-bold '>
          <i className=' ri-arrow-down-wide-line '></i>
      </h5>
      <h3 className="text-2xl font-medium mt-1">Looking for a driver</h3>

      <div className="flex flex-col items-center justify-between gap-2  ">
        <img
          className="h-25"
          src="https://tse1.mm.bing.net/th?id=OIP.0h_p-K7h14PaqFxHbDU3_gHaEK&pid=Api&rs=1&c=1&qlt=95&w=179&h=100"
          alt="car-logo"
        />
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 my-4 border-b-2 border-gray-300 p-3">
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-500 -mt-1">
                Kaikondrahalli, Begaluru, Karnataka
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 my-4 border-b-2 border-gray-300 p-3">
            <i className="ri-square-fill"></i>
            <div>
              <h3 className="text-lg font-medium"> Third Wave Coffee</h3>
              <p className="text-sm text-gray-500 -mt-1">
                {" "}
                17th Cross Rd, PWD Quarters, 1st Sector, HSR Layout, Bengaluru,
                Karntaka{" "}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5   p-3">
            <i className="text-lg ri-money-rupee-circle-fill"></i>
            <div>
              <h3 className="text-lg font-medium">₹235.54</h3>
              <p className="text-sm text-gray-500 -mt-1">Cash Cash</p>
            </div>
          </div>
        </div>
         
      </div>
    </div>
  );
}

export default LookingForDriver
