import React from "react";

const CaptainDetails = () => {
  return (
    <div>
      <div className="flex justify-between mt-2">
        <div className="flex items-center justify-start gap-2">
          <img
            className="h-12 w-12 rounded-full shadow-xl object-cover  "
            src="https://tse1.mm.bing.net/th?id=OIP.N-M4zn64NbaQJB-HUoazFgHaHa&pid=Api&rs=1&c=1&qlt=95&w=123&h=123"
            alt="girl-img"
          />
          <h4 className="text-lg font-semibold">Sandy</h4>
        </div>
        <div>
          <h4 className="text-xl font-semibold">₹295.20</h4>
          <p className="text-sm text-gray-600 text-center">Earned</p>
        </div>
      </div>

      <div className="flex justify-between items-start gap-2 mt-5 bg-gray-100 py-3 px-2 rounded-xl">
        <div className="text-center">
          <i className=" text-3xl  font-thin ri-timer-line"></i>
          <h5 className="text-lg font-medium">10.2km</h5>
          <p className="text-sm text-gray-600">Hours online</p>
        </div>

        <div className="text-center">
          <i className=" text-3xl font-thin ri-speed-up-line"></i>
          <h5 className="text-lg font-medium">10.2km</h5>
          <p className="text-sm text-gray-600">Hours online</p>
        </div>

        <div className="text-center">
          <i className=" text-3xl font-thin ri-booklet-line"></i>
          <h5 className="text-lg font-medium">10.2km</h5>
          <p className="text-sm text-gray-600">Hours online</p>
        </div>
      </div>
    </div>
  );
};

export default CaptainDetails;
