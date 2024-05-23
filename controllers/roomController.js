import RoomServices from "../services/RoomService.js"
import { ObjectId } from "mongodb"

const getAllRooms = async (req, res) => {
    try {
        const rooms = await RoomServices.SelectAll()
        res.status(200).json({ rooms : rooms })
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const createRoom = async (req, res) => {
    try {
        const data = req.body
        await RoomServices.Create(data)
        res.sendStatus(201)
    } catch(err) {
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const deleteRoom = async (req, res) => {
    try {  
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            await RoomServices.Delete(id)
            res.sendStatus(204)
        }
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const updateRoom = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const data = req.body
            await RoomServices.Update(id, data)
            res.sendStatus(200)
        }
        else {res.sendStatus(400)}
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const getOneRoom = async(req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const room = await RoomServices.SelectOne(id)
            if(!room)
                res.sendStatus(404)
            else
                res.status(200).json({ room })
        }
        else {res.sendStatus(400)}
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

export default {getAllRooms, createRoom, deleteRoom, updateRoom, getOneRoom}