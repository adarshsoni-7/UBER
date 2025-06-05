import React, { useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "remixicon/fonts/remixicon.css";
import LocationSearchPanel from "../components/LocationSearchPanel";
import VehiclePanel from "../components/VehiclePanel";
import ConfirmRide from "../components/ConfirmRide";
import LookingForDriver from "../components/LookingForDriver";
import WaitingForDriver from "../components/WaitingForDriver";

const Home = () => {
  const [pickup, setPickup] = useState("");
  const [destination, setDestination] = useState("");
  const [panelOpen, setPanelOpen] = useState(false); // This state controls the visibility of the location search panel
  const panelCloseRef = useRef(null); // Reference for the close button of the panel
  const panelRef = useRef(null); // Reference for the panel itself
  const [confirmRidePanel, setConfirmRidePanel] = useState(false); // State for controlling the visibility of the confirm ride panel
  const confirmRidePanelRef = useRef(false); // Reference for the confirm ride panel
  const vehiclePanelRef = useRef(null); // Reference for the vehicle selection panel
  const [vehiclePanelOpen, setVehiclePanelOpen] = useState(false); // State for controlling the visibility of the vehicle selection panel
  const [vehicleFound, setVehicleFound] = useState(false); // State for controlling the visibility of the vehicle found panel
  const vehicleFoundRef = useRef(null); // Reference for the vehicle found panel
  const [waitingForDriver, setWaitingForDriver] = useState(false); // State for controlling the visibility of the waiting for driver panel
  const waitingForDriverRef = useRef(null); // Reference for the waiting for driver panel

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useGSAP(() => {
    if (panelOpen === true) {
      gsap.to(panelRef.current, {
        height: "70%",
        opacity: 1,
        padding: 24,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 1,
      });
    } else {
      gsap.to(panelRef.current, {
        height: "0%",
        opacity: 0,
        padding: 0,
      });
      gsap.to(panelCloseRef.current, {
        opacity: 0,
      });
    }
  }, [panelOpen]);

  useGSAP(() => {
    if (vehiclePanelOpen === true) {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(0)",
        duration: 1.1,
      });
    } else {
      gsap.to(vehiclePanelRef.current, {
        transform: "translateY(100%)",
        duration: 1.1,
      });
    }
  }, [vehiclePanelOpen]);

  useGSAP(() => {
    if (confirmRidePanel === true) {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(0)",
        duration: 1.1,
      });
    } else {
      gsap.to(confirmRidePanelRef.current, {
        transform: "translateY(100%)",
        duration: 1.1,
      });
    }
  }, [confirmRidePanel]);

  useGSAP(() => {
    if (vehicleFound === true) {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(0)",
        duration: 1.1,
      });
    } else {
      gsap.to(vehicleFoundRef.current, {
        transform: "translateY(100%)",
        duration: 1.1,
      });
    }
  }, [vehicleFound]);

  useGSAP(() => {
    if (waitingForDriver === true) {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(0)",
        duration: 1.1,
      });
    } else {
      gsap.to(waitingForDriverRef.current, {
        transform: "translateY(100%)",
        duration: 1.1,
      });
    }
  }, [waitingForDriver]);

  return (
    <div className="h-screen relative overflow-hidden">
      <img
        className="w-16 absolute top-4 left-5"
        src="https://logospng.org/download/uber/logo-uber-4096.png"
        alt="uber-logo"
      />

      <div className="h-screen w-screen">
        <img
          className="h-full w-full object-cover"
          src="https://miro.medium.com/max/1280/0*gwMx05pqII5hbfmX.gif"
          alt="temp-map"
        />
      </div>

      <div className="h-screen absolute top-0 w-full flex flex-col justify-end">
        <div className="h-[30%] bg-white p-6 relative ">
          <h5
            ref={panelCloseRef}
            className="text-2xl text-gray-700 absolute right-[47%] top-2 opacity-0"
            onClick={() => setPanelOpen(false)}
          >
            <i className="ri-arrow-down-wide-fill "></i>
          </h5>
          <h4 className="text-2xl font-bold mt-3">Find a trip</h4>
          <form onSubmit={handleSubmit}>
            <div className="line h-16 w-1 bg-gray-700 absolute top-[55%] left-9 rounded-full"></div>

            <input
              onClick={() => setPanelOpen(true)}
              onChange={(e) => setPickup(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-5 w-full focus:outline-none"
              type="text"
              placeholder="Add a pick-up location"
              value={pickup}
            />
            <input
              onClick={() => setPanelOpen(true)}
              value={destination}
              onChange={(e) => setDestination(e.target.value)}
              className="bg-[#eee] px-12 py-2 text-base rounded-lg mt-5 w-full focus:outline-none "
              type="text"
              placeholder="Enter your destination"
            />
          </form>
        </div>
        <div ref={panelRef} className=" bg-white h-0 mt-0 opacity-1">
          <LocationSearchPanel
            setPanelOpen={setPanelOpen}
            setVehiclePanelOpen={setVehiclePanelOpen}
          />
        </div>
      </div>

      <div
        ref={vehiclePanelRef}
        className="fixed z-10 bottom-0 translate-y-full p-3 py-6 pt-12 w-full bg-white"
      >
        <VehiclePanel
          setConfirmRidePanel={setConfirmRidePanel}
          setVehiclePanelOpen={setVehiclePanelOpen}
        />
      </div>

      <div
        ref={confirmRidePanelRef}
        className="fixed z-10 bottom-0 translate-y-full py-6  pt-12 p-3 w-full bg-white"
      >
        <ConfirmRide
          setConfirmRidePanel={setConfirmRidePanel}
          setVehicleFound={setVehicleFound}
        />
      </div>

      <div
        ref={vehicleFoundRef}
        className="fixed z-10 bottom-0 translate-y-full py-6  pt-12 p-3 w-full bg-white"
      >
        <LookingForDriver
          setVehicleFound={setVehicleFound}
          setWaitingForDriver={setWaitingForDriver}
        />
      </div>

      <div
        ref={waitingForDriverRef}
        className="fixed z-10 bottom-0 translate-y-full py-6  pt-12 p-3 w-full bg-white"
      >
        <WaitingForDriver setWaitingForDriver={setWaitingForDriver} />
      </div>
    </div>
  );
};

export default Home;
