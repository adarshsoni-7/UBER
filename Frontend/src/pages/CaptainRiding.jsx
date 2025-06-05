import React, { useRef, useState } from "react";
import { Link } from "react-router-dom"; 
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import FinishRide from "../components/FinishRide";

const CaptainRiding = () => {
  const finishRideRef = useRef(null);
  const [finishRide, setFinishRide] = useState(false);

  

  useGSAP(() => {
    if (finishRide) {
      gsap.to(finishRideRef.current, {
        transform: "translateY(0)",
        duration: 1.1,
      });
    } else {
      gsap.to(finishRideRef.current, {
        transform: "translateY(100%)",
        duration: 1.1,
      });
    }
  }, [finishRide]);
  return (
    <div className="h-screen relative overflow-hidden">
      <div className="h-4/5">
        <img
          src="https://logos-world.net/wp-content/uploads/2020/05/Uber-Emblem.png"
          alt="captain-logo"
          className="w-16 mb-14 absolute top-2 left-2"
        />
        <Link
          to="/captain-login"
          className=" fixed flex items-center justify-center top-2 right-2 rounded-full bg-white py-2 px-3 shadow-lg"
        >
          <i className="font-medium ri-logout-box-line text-xl"></i>
        </Link>
        <img
          className="w-full h-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt="map-img"
        />
      </div>

      <div
        className="h-1/5 p-6   bg-yellow-500 flex items-center justify-between relative"
        onClick={() => {
          setFinishRide(true);
        }}
      >
        <h5
          onClick={() => {}}
          className="w-[90%] absolute left-[47%] top-1 text-xl font-bold "
        >
          <i className=" ri-arrow-down-wide-line "></i>
        </h5>
        <h4 className="text-lg font-medium">4 km away</h4>
        <button className="mt-2 bg-green-500 text-white font-semibold rounded-lg px-8 py-4">
          Complete Ride
        </button>
      </div>
      <div
        ref={finishRideRef}
        className="fixed z-10 bottom-0  translate-y-full  pt-8 p-3 w-full bg-white"
      >
        <FinishRide setFinishRide={setFinishRide} />
      </div>
    </div>
  );
};

export default CaptainRiding;
