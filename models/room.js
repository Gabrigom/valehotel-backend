import mongoose from "mongoose"

const room = new mongoose.Schema({
    roomNumber: Number,
    roomFloor: Number,
    roomAvailable: Boolean,
    roomPattern: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Pattern',
        require: true
    }
})

export default room