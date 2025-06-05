const axios = require("axios");

module.exports.getaddressCoordinate = async (address) => {
  const apiKey = process.env.GOOGLE_MAPS_API_KEY;
  const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${apiKey}`;

  try {
    const response = await axios.get(url);
    console.log(response.data);

    if (response.data.status === "OK") {
      const location = response.data.results[0].geometry.location;
      return {
        ltd: location.lat,
        lng: location.lng,
      };
    } else {
      throw new Error("Failed to fetch coordinates");
    }
  } catch (error) {
    console.error(error);
    throw error;
  }
};

 
module.exports.getDistanceAndDuration = async (origin, destination) => {
    if (!origin || !destination) {
        throw new Error("Origin and destination are required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/distancematrix/json?origins=${encodeURIComponent(origin)}&destinations=${encodeURIComponent(destination)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);

        if (response.data.status === "OK") {
            if (response.data.rows[0].elements[0].status === "ZERO_RESULTS") {
                throw new Error("No route found");
            }

            return response.data.rows[0].elements[0];
            
        }
        else {
            throw new Error("Failed to fetch distance and duration");
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
}


module.exports.getSuggestions = async (input) => { 
    if (!input) {
        throw new Error("Query is required");
    }

    const apiKey = process.env.GOOGLE_MAPS_API_KEY;
    const url = `https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${encodeURIComponent(input)}&key=${apiKey}`;

    try {
        const response = await axios.get(url);
        if (response.data.status === "OK") {
            return response.data.predictions;
        }
        else {
            throw new Error("Failed to fetch suggestions");
        }
    }
    catch (error) {
        console.error(error);
        throw error;
    }
    
}
