import React from 'react'
import { Link } from 'react-router-dom'
const FinishRide = ({setFinishRide}) => {
  return (
    <div className="h-[95%] relative">
      <h5
        onClick={() => {
          setFinishRide(false);
        }}
        className="w-[90%] absolute left-[47%] -top-7 text-xl font-bold"
      >
        <i className=" ri-arrow-down-wide-line "></i>
      </h5>
      <h3 className="text-2xl font-semibold">
       Finish this ride
      </h3>
      <div className="flex items-center justify-between mt-4 bg-gray-100 rounded-xl p-4">
        <div className="flex items-center gap-2">
          <p className="text-xs font-semibold absolute top-[20%] left-[43%] bg-yellow-400 rounded-xl px-2 py-0.5">
            Apple Pay
          </p>
          <br />
          <p className="text-xs font-semibold absolute top-[20%] left-[23%] bg-yellow-400 rounded-xl px-2 py-0.5">
            Discount
          </p>
          <img
            className="h-12 w-12 rounded-full object-cover"
            src="https://freepngimg.com/thumb/man/10-man-png-image.png"
            alt="man-img"
          />
          <h5 className="text-lg font-semibold mb-4">Smith Mcman</h5>
          <br />
          <div></div>
        </div>
        <h5 className="text-lg font-semibold">₹235.54</h5>
      </div>

      <div className="flex flex-col items-center justify-between gap-2  ">
        <div className="w-full mt-5">
          <div className="flex items-center gap-5 my-0 border-b-2 border-gray-300 p-3">
            <i className="text-lg ri-map-pin-range-fill"></i>
            <div>
              <h3 className="text-lg font-medium">562/11-A</h3>
              <p className="text-sm text-gray-500 -mt-1">
                Kaikondrahalli, Begaluru, Karnataka
              </p>
            </div>
          </div>

          <div className="flex items-center gap-5 my-3 border-b-2 border-gray-300 p-3">
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

          <div className="p-3">
            <div className="flex items-center justify-between ">
              <h5 className="text-base font-semibold">Apple Pay</h5>
              <p className="text-sm text-gray-500  ">₹200.54</p>
            </div>

            <div className="flex items-center justify-between">
              <h5 className="text-base font-semibold">Discount</h5>
              <p className="text-sm text-gray-500  ">₹35.00</p>
            </div>

            <div className="flex items-center justify-between">
              <h5 className="text-lg font-semibold">Paid Amount</h5>
              <p className="text-lg  text-gray-700 font-semibold"> ₹235.54</p>
            </div>
          </div>
        </div>
        <div className="w-full mt-10">
           
            
            <Link
              to="/captain-home"
              onClick={() => {}}
              className="w-full mt-2 bg-green-600 py-2 px-3 text-white text-lg font-semibold rounded-lg flex items-center justify-center"
            >
             Finish Ride
            </Link>

             
           
        </div>
      </div>
    </div>
  );
}

export default FinishRide
