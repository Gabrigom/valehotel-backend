import mongoose from "mongoose"

const Room = new mongoose.Schema({
    roomNumber: Number,
    roomFloor: Number,
    roomAvailable: Boolean,
    roomType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Type',
        require: true
    }
})