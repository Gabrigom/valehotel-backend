import mongoose from "mongoose"
import pattern from "../models/pattern.js"

const Pattern = mongoose.model("Pattern", pattern)

class PatternServices{
    SelectAll(){
        return Pattern.find()
    }

    SelectOne(id){
        return Pattern.findOne({_id: id})
    }

    Delete(id){
        return Pattern.findByIdAndDelete(id)
    }

    Create(data){
        const newPattern = new Pattern(data)
        return newPattern.save()
    }

    Update(id, data){
        return Pattern.findByIdAndUpdate(id, data)
    }
}

export default new PatternServices()