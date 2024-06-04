import mongoose from "mongoose"
import room from "../models/room.js"

const Room = mongoose.model("Room", room)

class RoomServices{
    SelectAll(){
        return Room.find().populate("roomPattern")
    }

    SelectOne(id){
        return Room.findOne({_id: id})
    }

    async SelectAllByFields(filter) {        
        const operation = await Room.find().populate({path: "roomPattern", match: filter})
        return operation.filter(room => room.roomPattern)
    }

    Delete(id){
        return Room.findByIdAndDelete(id)
    }

    Create(data){
        const newRoom = new Room(data)
        return newRoom.save()
    }

    Update(id, data){
        return Room.findByIdAndUpdate(id, data)
    }
}

export default new RoomServices()