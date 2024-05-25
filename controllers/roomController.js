import RoomServices from "../services/RoomService.js"
import { ObjectId } from "mongodb"
import utils from "../utils/utils.js"


export default {
    async getAllRooms(req, res) {
        try {
            const rooms = await RoomServices.SelectAll()
            res.status(200).json({ rooms : rooms })
        } catch(err){
            console.log(err)
            res.status(500).json({ err : 'Erro interno do servidor'})
        }
    },    
    async createRoom(req, res) {
        try {
            const data = req.body
            await RoomServices.Create(data)
            res.sendStatus(201)
        } catch(err) {
            console.log(err)
            res.status(500).json({ err : 'Erro interno do servidor'})
        }
    },    
    async deleteRoom(req, res) {
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
    },    
    async updateRoom(req, res) {
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
    },    
    async getOneRoom(req, res) {
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
    },
    async searchRoom(req, res) {
        const query = req.body.query
        const fields = req.body.fields
        const company = req.session.user.company
    
        try {
            const searchQuery = utils.generateSearchQuery(query, fields)
            const operation = await RoomServices.SelectAllByFields(company, searchQuery)
            res.send(operation)
        } catch (error) {
            console.log(error);
            res.status(500).send({err: "Erro interno no servidor."})
        }
    }
}