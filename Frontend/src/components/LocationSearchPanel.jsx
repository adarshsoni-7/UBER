import React from "react";

const LocationSearchPanel = ({ setPanelOpen, setVehiclePanelOpen }) => {
  const locations = [
    "24B, Near Kapoor's Cafe, Itanagar",
    "Sector 17, Chandigarh",
    "Connaught Place, New Delhi",
    "Marine Drive, Mumbai",
    "MG Road, Bengaluru",
    "Juhu Beach, Mumbai",
    "Hauz Khas Village, New Delhi",
  ];
  return (
    <div>
      {locations.map((elem, idx) => (
        <div
          onClick={() => {
            setVehiclePanelOpen(true);
            setPanelOpen(false);
          }}
          key={idx}
          className="border-2 p-3 border-gray-500  active:border-black scale-2 rounded-xl flex items-center justify-start gap-2 my-3"
        >
          <h2 className="bg-[#eee] h-8 flex items-center justify-center w-8 rounded-full">
            <i className="ri-map-pin-line"></i>
          </h2>
          <h4 className="font-medium">{elem}</h4>
        </div>
      ))}
    </div>
  );
};

export default LocationSearchPanel;
