import { School } from "../Model/school.model.js";
import ApiError from "../Utils/ApiError.js";
import ApiResponse from "../Utils/ApiResponse.js";

export {
    addSchool,
    listSchools
};

const addSchool = async (req, res) => {
    try {
        const { name, address, latitude, longitude } = req.body;
        
        if(!name || !address || !latitude || !longitude){
            throw new ApiError(400, "Input fields should not be empty");   
        }
        const school = await School.create({ name, address, latitude, longitude });
        if (!school) {
            throw new ApiError(400, "Adding School failed");
        }
        res.status(200).json(new ApiResponse(200, school, "Successfully added School"));
    } catch (error) {
        res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode || 500, null, error.message || "Internal Server Error"));
    }
};

const listSchools = async (req, res) => {
    try {
        const { latitude, longitude } = req.query;
        const matchConditions = {};
        if (latitude) {
            matchConditions.latitude = latitude;
        }
        if (longitude) {
            matchConditions.longitude = longitude;
        }
        const schools = await School.find(matchConditions);
        if (!schools.length) {
            throw new ApiError(400, "No schools found");
        }
        res.status(200).json(new ApiResponse(200, schools, "Successfully fetched Schools"));
    } catch (error) {
        res.status(error.statusCode || 500).json(new ApiResponse(error.statusCode || 500, null, error.message || "Internal Server Error"));
    }
};
