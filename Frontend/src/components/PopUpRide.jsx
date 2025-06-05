import React from 'react'

const PopUpRide = ({ setPopUpRidePanel, setConfirmPopUpRidePanel }) => {
  return (
    <div>
      <h5
        onClick={() => {
          setPopUpRidePanel(false);
        }}
        className="w-[90%] absolute left-[47%] top-1 text-xl font-bold "
      >
        <i className=" ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-2xl font-semibold mt-4">New Ride Request</h3>
      <div className="flex items-center justify-between mt-4 bg-yellow-400 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://freepngimg.com/thumb/man/10-man-png-image.png"
            alt="man-img"
          />
          <h5 className="text-lg font-semibold">Smith Mcman</h5>
        </div>
        <h5 className="text-lg font-semibold">2.5KM</h5>
      </div>

      <div className="flex flex-col items-center justify-between gap-2  ">
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

        <div className="w-full flex items-center justify-between gap-2 p-2">
          <button
            onClick={() => {
              setPopUpRidePanel(false);
            }}
            className="w-1/2 text-lg  mt-2 bg-red-500 py-2 text-white font-semibold rounded-lg"
          >
            Ignore
          </button>
          <button
            onClick={() => {
              setConfirmPopUpRidePanel(true);
              setPopUpRidePanel(false);
            }}
            className="w-1/2 text-lg  mt-2 bg-green-600 py-2 text-white font-semibold rounded-lg"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}

export default PopUpRide
