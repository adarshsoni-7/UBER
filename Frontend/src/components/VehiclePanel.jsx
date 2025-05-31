import React from 'react'

const VehiclePanel = ({ setVehiclePanelOpen, setConfirmRidePanel }) => {
  return (
    <div>
      <h5
        onClick={() => setVehiclePanelOpen(false)}
        className="w-[90%] absolute left-[45%] top-[4%]  text-xl font-bold "
      >
        <i className="ri-arrow-down-wide-fill "></i>
      </h5>
      <h3 className="text-2xl font-medium my-8">Choose a Vehicle</h3>

      <div  onClick={() => {
        setConfirmRidePanel(true);
        setVehiclePanelOpen(false);
      } } className=" mb-3 flex itmes-center justify-between p-3 w-full active:border-2 border-black  rounded-lg">
        <img
          className="h-12"
          src="https://tse1.mm.bing.net/th?id=OIP.0h_p-K7h14PaqFxHbDU3_gHaEK&pid=Api&rs=1&c=1&qlt=95&w=179&h=100"
          alt="car-logo"
        />
        <div>
          <h4 className="font-medium text-base w-1/2">
            Uber Go{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">2 mins away</h5>
          <p className="font-medium text-sm">Affodable compact rides</p>
        </div>

        <h2 className="text-lg font-medium">₹193.20</h2>
      </div>

      <div onClick={() => {
        setConfirmRidePanel(true);
        setVehiclePanelOpen(false);
      } } className=" mb-3 flex itmes-center justify-between p-3 w-full active:border-2 border-black  rounded-lg">
        <img
          className="h-12 mr-10"
          src="https://tse4.mm.bing.net/th?id=OIP.VdrX-g7pOBwz9kKSQLrcCwHaHa&pid=Api&P=0&h=180"
          alt="moto-logo"
        />
        <div>
          <h4 className="font-medium text-base w-1/2">
            Moto <br />
            <span>
              <i className="ri-user-fill"></i>1
            </span>
          </h4>
          <h5 className="font-medium text-sm">3 mins away</h5>
          <p className="font-medium text-sm">Affodable motorcycle rides</p>
        </div>

        <h2 className="text-lg font-medium">₹65.17</h2>
      </div>

      <div onClick={() => {
        setConfirmRidePanel(true);
        setVehiclePanelOpen(false);
      } } className=" mb-3 flex itmes-center justify-between p-3 w-full active:border-2 border-black  rounded-lg">
        <img
          className="h-12 mr-2"
          src="https://tse4.mm.bing.net/th?id=OIP.gERohywpalGF3NjolmHt5wHaE7&pid=Api&P=0&h=180"
          alt="auto-logo"
        />
        <div className="-ml-8">
          <h4 className="font-medium text-base w-1/2">
            UberAuto{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">4 mins away</h5>
          <p className="font-medium text-sm">
            Comfortable sedans, <br /> top-quality drivers
          </p>
        </div>

        <h2 className="text-lg font-medium">₹193.20</h2>
      </div>

      <div  onClick={() => {
        setConfirmRidePanel(true);
        setVehiclePanelOpen(false);
      } } className=" mb-3 flex itmes-center justify-between p-3 w-full active:border-2 border-black  rounded-lg">
        <img
          className="h-12 mr-2"
          src="https://tse3.mm.bing.net/th?id=OIP.Lv5HXZckjyyu91m21cCFOwAAAA&pid=Api&P=0&h=180"
          alt="sedan-logo"
        />
        <div className="-ml-6">
          <h4 className="font-medium text-base w-1/2">
            Premier{" "}
            <span>
              <i className="ri-user-fill"></i>4
            </span>
          </h4>
          <h5 className="font-medium text-sm">4 mins away</h5>
          <p className="font-medium text-sm">Comfortable auto rides</p>
        </div>

        <h2 className="text-lg font-medium">₹193.20</h2>
      </div>
    </div>
  );
};

export default VehiclePanel
