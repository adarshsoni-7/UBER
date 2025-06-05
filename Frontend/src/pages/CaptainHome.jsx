import React, { useRef, useState } from "react";
import { Link } from "react-router-dom";
import CaptainDetails from "../components/CaptainDetails";
import PopUpRide from "../components/PopUpRide";
import ConfirmPopUpRide from "../components/ConfirmPopUpRide";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const CaptainHome = () => {
  const [popUpRidePanel, setPopUpRidePanel] = useState(true);
  const [confirmPopUpRidePanel, setConfirmPopUpRidePanel] = useState(false);
  const popUpRidePanelRef = useRef(null);
  const confirmPopUpRidePanelRef = useRef(null);

  useGSAP(() => {
    if (popUpRidePanel === true) {
      gsap.to(popUpRidePanelRef.current, {
        transform: "translateY(0)",
        duration: 1.1,
      });
    } else {
      gsap.to(popUpRidePanelRef.current, {
        transform: "translateY(100%)",
        duration: 1.1,
      });
    }
  }, [popUpRidePanel]);

  useGSAP(() => {
    if (confirmPopUpRidePanel === true) {
      gsap.to(confirmPopUpRidePanelRef.current, {
        transform: "translateY(0)",
        duration: 1.1,
      });
    } else {
      gsap.to(confirmPopUpRidePanelRef.current, {
        transform: "translateY(100%)",
        duration: 1.1,
      });
    }
  }, [confirmPopUpRidePanel]);

  return (
    <div className="h-screen">
      <div className="h-3/5">
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

      <div className="h-2/5 p-6">
        <CaptainDetails />
      </div>

      <div
        ref={popUpRidePanelRef}
        className="fixed z-10 bottom-0  translate-y-full left-0 py-6 pt-5 p-3 w-full bg-white"
      >
        <PopUpRide
          setPopUpRidePanel={setPopUpRidePanel}
          setConfirmPopUpRidePanel={setConfirmPopUpRidePanel}
        />
      </div>

      <div
        ref={confirmPopUpRidePanelRef}
        className="fixed z-10 bottom-0 h-screen translate-y-full left-0 py-6 pt-5 p-3 w-full bg-white"
      >
        <ConfirmPopUpRide
          setConfirmPopUpRidePanel={setConfirmPopUpRidePanel}
          
        />
      </div>
    </div>
  );
};

export default CaptainHome;
