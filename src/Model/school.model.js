import mongoose from "mongoose";

const schoolSchema = mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
            index: true
        },
        address: {
            type: String,
            required: true
        },
        latitude: {
            type: Number,
            required: true,
            index: true,
            min: -90,
            max: 90
        },
        longitude: {
            type: Number,
            required: true,
            index: true,
            min: -180,
            max: 180
        }
    },
    { timestamps: true }
);

export const School = mongoose.model("School", schoolSchema);
