const mapsService = require("../services/maps.service");
const { validationResult } = require("express-validator");

module.exports.getCoordinates = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { address } = req.query;
    const coordinates = await mapsService.getaddressCoordinate(address);
    res.status(200).json(coordinates);
  } catch (error) {
    res.status(404).json({ message: "Coordinates not found" });
  }
};

module.exports.getDistanceAndTime = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { origin, destination } = req.query;

    const distanceTime = await mapsService.getDistanceAndDuration(
      origin,
      destination
    );

    res.status(200).json(distanceTime);
  } catch (error) {
    res.status(404).json({ message: "Distance and time not found" });
  }
};

 
module.exports.getAutoCompleteSuggestions = async (req, res) => {
    try {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { input } = req.query;
        if (!input) {
            return res.status(400).json({message: "Input is required"});
        }

        const suggestions = await mapsService.getSuggestions(input);
        res.status(200).json(suggestions);

    }
    catch (error) {
        res.status(404).json({message: "Suggestions not found"});
    }
}