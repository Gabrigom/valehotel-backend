import CostumerServices from "../services/CostumerService.js"
import { ObjectId } from "mongodb"

const getAllCostumers = async (req, res) => {
    try {
        const costumers = await CostumerServices.SelectAll()
        res.status(200).json({ costumers : costumers })
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const createCostumer = async (req, res) => {
    try {
        const data = req.body
        await CostumerServices.Create(data)
        res.sendStatus(201)
    } catch(err) {
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const deleteCostumer = async (req, res) => {
    try {  
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            await CostumerServices.Delete(id)
            res.sendStatus(204)
        }
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const updateCostumer = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const data = req.body
            await CostumerServices.Update(id, data)
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

const getOneCostumer = async(req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const costumer = await CostumerServices.SelectOne(id)
            if(!costumer)
                res.sendStatus(404)
            else
                res.status(200).json({ costumer })
        }
        else {
            res.sendStatus(400)
        }
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

export default {getAllCostumers, createCostumer, deleteCostumer, updateCostumer, getOneCostumer}