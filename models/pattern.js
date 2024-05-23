import mongoose from "mongoose";

const pattern = new mongoose.Schema({
    patternName: String,
    patternDescription: String,
    patternSize: Number,
    patternDailyFee: Number,
    patternCapacity: Number,
    patternShowers: Number,   
    patternExtras: {
        patternWifi: Boolean,
        patternPets: Boolean,
        patternAC: Boolean,
        patternService: Boolean,
        patternMinibar: Boolean,
        patternTv: Boolean
    }
})

export default pattern