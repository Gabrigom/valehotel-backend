import mongoose from "mongoose";

const Type = new mongoose.Schema({
    typeName: String,
    typeDescription: String,
    typeSize: Number,
    typeDailyFee: Number,
    typeBeds: Number,
    roomShowers: Number,   
    roomExtras: {
        roomWifi: Boolean,
        roomPets: Boolean,
        roomAC: Boolean,
        roomService: Boolean,
        roomAcessibility: Boolean,
        roomTv: Boolean
    }
})