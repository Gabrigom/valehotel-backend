import mongoose from "mongoose"
import room from "../models/room.js"

const Room = mongoose.model("room", room)

class RoomServices{
    SelectAll(){
        return Room.find()
    }

    SelectOne(id){
        return Room.findOne({_id: id})
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