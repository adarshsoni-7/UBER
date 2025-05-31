import React from "react";

const WaitingForDriver = ({setWaitingForDriver}) => {
  return (
    <div>
      <h5
        onClick={() => setWaitingForDriver(false)}
        className="font-medium text-2xl text-gray-400 absolute top-0 left-[50%] -translate-x-1/2"
      >
        <i className="ri-arrow-down-wide-line  "></i>
      </h5>
      <div className="flex items-center justify-between gap-2">
        <img
          className="h-[80px]"
          src="https://www.toyotacr.com/uploads/model/7849bb9ec786235c9c7538a3403eb362e26c074b.png"
          alt="car-logo"
        />
        <div className="text-right">
          <h2 className="text-sm font-medium  uppercase">JOHN</h2>
          <h4 className="text-xl font-semibold -mt-1 -mb-1">UP 16 AS 2312</h4>
          <p className="text-sm text-gray-500 font-medium">Toyota Etios</p>
        </div>
      </div>

      <div className="bg-gray-300 p-3 rounded-full w-full flex items-center justify-between pl-5 my-8">
        <input
          type="text"
          placeholder="Send a message"
          className="font-medium text-lg bg-gray-300 placeholder:text-black focus:outline-none"
        />
        <i className="ri-send-plane-2-fill text-lg"></i>
      </div>

      <div className="flex items-center justify-between border-b-2 border-gray-300 pb-3">
        <div className="font-medium text-lg w-1/3 text-center">
          <h2>
            <i className="ri-shield-star-line text-3xl text-blue-600 "></i>
          </h2>
          Safety
        </div>

        <div className="font-medium text-lg w-1/3 text-center">
          <h2>
            <i className="ri-share-fill text-3xl text-blue-600  "></i>
          </h2>
          Share
        </div>

        <div className="font-medium text-lg w-1/3 text-center">
          <h2>
            <i className="ri-phone-fill text-3xl text-blue-600  "></i>
          </h2>{" "}
          Call Driver
        </div>
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
      </div>
    </div>
  );
};

export default WaitingForDriver;
