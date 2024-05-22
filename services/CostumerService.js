import mongoose from "mongoose"
import costumer from "../models/costumer.js"

const Costumer = mongoose.model("costumer", costumer)

class CostumerServices{
    SelectAll(){
        return Costumer.find()
    }

    SelectOne(id){
        return Costumer.findOne({_id: id})
    }

    Delete(id){
        return Costumer.findByIdAndDelete(id)
    }

    Create(data){
        const newCostumer = new Costumer(data)
        return newCostumer.save()
    }

    Update(id, data){
        return Costumer.findByIdAndUpdate(id, data)
    }
}

export default new CostumerServices()