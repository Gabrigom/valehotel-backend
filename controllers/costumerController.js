import CostumerServices from "../services/CostumerService.js"
import bcrypt from "bcrypt"
import { ObjectId } from "mongodb"
import utils from "../utils/utils.js"

export default {
    async getAllCostumers(req, res) {
        try {
            const costumers = await CostumerServices.SelectAll()
            res.status(200).json({ costumers : costumers })
        } catch(err){
            console.log(err)
            res.status(500).json({ err : 'Erro interno do servidor'})
        }
    },    
    async createCostumer(req, res) {
        try {
            const data = req.body
            await CostumerServices.Create(data)
            res.sendStatus(201)
        } catch(err) {
            console.log(err)
            res.status(500).json({ err : 'Erro interno do servidor'})
        }
    },    
    async deleteCostumer(req, res) {
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
    },    
    async updateCostumer(req, res) {
        try {
            if (ObjectId.isValid(req.params.id)){
                const id = req.params.id
                const data = req.body
                await CostumerServices.Update(id, data)
                res.sendStatus(200)
            }
            else {res.sendStatus(400)}
        } catch(err){
            console.log(err)
            res.status(500).json({ err : 'Erro interno do servidor'})
        }
    },
    async getOneCostumer(req, res) {
        try {
            if (ObjectId.isValid(req.params.id)){
                const id = req.params.id
                const costumer = await CostumerServices.SelectOne(id)
                if(!costumer)
                    res.sendStatus(404)
                else
                    res.status(200).json({ costumer })
            }
            else {res.sendStatus(400)}
        } catch(err){
            console.log(err)
            res.status(500).json({ err : 'Erro interno do servidor'})
        }
    },
    async loginCostumer(req, res) {
        const {costumerEmail, costumerPassword} = req.body

        try {
            const checkUserExists = await CostumerServices.SelectOneByEmail(costumerEmail)
    
            if(!checkUserExists) {
                return res.status(401).send({err:'Usuário não encontrado.'})
            }
        
            if(!await bcrypt.compare(costumerPassword, checkUserExists.costumerPassword)) {
                return res.status(401).send({err:'Senha inválida.'})
            }            
            
            res.send({
                ok: true,
                message: "Usuário autenticado com sucesso.",
                token: utils.generateToken(checkUserExists)
            })
    
        } catch (error) {
            console.log(error);
            return res.status(500).send({err: "Erro interno ao tentar logar."})
        }
    },
    async logoutCostumer(req, res) {
        req.session.destroy((err) => {
          if (err) {
            return res.status(500).send({err: 'Erro interno ao tentar deslogar.'});
          }
          res.sendStatus(204);
        });
    }
}
