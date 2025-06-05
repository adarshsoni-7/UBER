import React from "react";
import { Link } from "react-router-dom";

const Riding = () => {
  return (
      <div className="h-screen">
      <div className="h-1/2">
        <Link to="/home" className=" fixed flex items-center justify-center top-2 right-2 rounded-full bg-white py-2 px-3 shadow-lg">
          <i className="font-medium ri-home-5-line text-xl"></i>
        </Link>
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt="map-img"
        />
      </div>
      <div className="h-1/2 p-5">
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

            <div className="flex items-center gap-5   p-3">
              <i className="text-lg ri-money-rupee-circle-fill"></i>
              <div>
                <h3 className="text-lg font-medium">₹235.54</h3>
                <p className="text-sm text-gray-500 -mt-1">Cash Cash</p>
              </div>
            </div>
          </div>
          <div className="w-full">
            <button className="w-full bg-green-600 text-white font-semibold py-2 rounded-lg mb-5">
              Make Payment
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Riding;
