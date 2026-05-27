import { Schema, model, Document, Types } from "mongoose";

export interface ISchedule extends Document{
    startDate: Date,
    endDate: Date,
}

export interface IEvent extends Document {
    name: String,
    description: String,
    schedules: ISchedule[],
}

export const EventSchema = new Schema({
    name: {
        type:String,
        requered: true
    },
    description: {
        type:String,
        requered: true
    },
    schedules:{
        type: Types.DocumentArray<ISchedule>,
        required:true
    }
});

const Event = model<IEvent>('Event', EventSchema);
export default Event;