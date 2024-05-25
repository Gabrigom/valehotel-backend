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

    SelectAllByFields(filter) {
        return Room.find().find(filter).populate("roomPattern")
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