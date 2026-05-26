import { Schema, model, Document } from "mongoose";

export interface IMajor extends Document {
    name: String,
    duration: Number,
    description: String, 
    logo: String,
    registerStartDate: Date,
    registerEndDate: Date
}

export const MajorSchema = new Schema({
    name: {
        type: String,
        required: true,
        unique: true
    },
    duration: {
        type: Number,
        requird: true,
        min: 8,
        max: 10
    },
    description:  {
        type: String,
        required: true,
    }, 
    logo: {
        type: String,
        required: true,
    },
    registerStartDate: {
        type: Date,
        required: true,
    },
    registerEndDate: {
        type: Date,
        required: true,
    }
});

const Major = model<IMajor>('Major', MajorSchema);

export default Major;
