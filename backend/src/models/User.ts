import { Schema, model, Document, Types } from "mongoose";

export interface IUser extends Document{
    name: String,
    lastName: String,
    major: Types.ObjectId,
    semester: number,
    role: 'admin' | 'staff' | 'student',
    password: String,
    isActive: boolean
}

export const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: true
    },
    lastName:{
        type: String,
        required: true
    },
    major:{
        type: Types.ObjectId,
        required: true,
        ref: 'Major'
    },
    semester: {
        type: Number,
        required:true,
        min: 1,
        max: 9
    },
    role: {
        type: String,
        enum: ['admin', 'staff', 'student'],
        default: 'student'
    },
    password:{
        type: String,
         required: true
    },
    isActive: {
        type: Boolean,
        default: false,
    }
}, {timestamps: true});

const User = model<IUser>('User', UserSchema);
export default User;