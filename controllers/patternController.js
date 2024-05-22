import PatternServices from "../services/PatternService.js"
import { ObjectId } from "mongodb"

const getAllPatterns = async (req, res) => {
    try {
        const patterns = await PatternServices.SelectAll()
        res.status(200).json({ patterns : patterns })
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const createPattern = async (req, res) => {
    try {
        const data = req.body
        await PatternServices.Create(data)
        res.sendStatus(201)
    } catch(err) {
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const deletePattern = async (req, res) => {
    try {  
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            await PatternServices.Delete(id)
            res.sendStatus(204)
        }
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const updatePattern = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const data = req.body
            await PatternServices.Update(id, data)
            res.sendStatus(200)
        }
        else {
            res.sendStatus(400)
        }
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const getOnePattern = async(req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const pattern = await PatternServices.SelectOne(id)
            if(!pattern)
                res.sendStatus(404)
            else
                res.status(200).json({ pattern })
        }
        else {
            res.sendStatus(400)
        }
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

export default {getAllPatterns, createPattern, deletePattern, updatePattern, getOnePattern}