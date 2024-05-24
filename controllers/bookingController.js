import BookingServices from "../services/BookingService.js"

import { ObjectId } from "mongodb"

const getAllBookings = async (req, res) => {
    try {
        const bookings = await BookingServices.SelectAll()
        res.status(200).json({ bookings : bookings })
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const getCostumerBookings = async (req,res) => {
    try {
        if(ObjectId.isValid(req.params.id)){
            const bookings = await BookingServices.SelectAllByCostumer(req.params.id)
            res.status(200).json({ bookings : bookings })
        }
        else {res.sendStatus(400)}
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const getRoomBookings = async (req,res) => {
    try {
        if(ObjectId.isValid(req.params.id)){
            const bookings = await BookingServices.SelectAllByRoom(req.params.id)
            res.status(200).json({ bookings : bookings })
        }
        else {res.sendStatus(400)}
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const createBooking = async (req, res) => {
    try {
        const data = req.body
        await BookingServices.Create(data)
        res.sendStatus(201)
    } catch(err) {
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const deleteBooking = async (req, res) => {
    try {  
        if(ObjectId.isValid(req.params.id)){
            const id = req.params.id
            await BookingServices.Delete(id)
            res.sendStatus(204)
        }
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const updateBooking = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const data = req.body
            await BookingServices.Update(id, data)
            res.sendStatus(200)
        }
        else {res.sendStatus(400)}
    } catch(err){
        console.log(err)
        res.status(500).json({ err : 'Erro interno do servidor'})
    }
}

const getOneBooking = async (req, res) => {
    try {
        if (ObjectId.isValid(req.params.id)){
            const id = req.params.id
            const costumer = await BookingServices.SelectOne(id)
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
}

export default {getAllBookings, getCostumerBookings, getRoomBookings, createBooking, deleteBooking, updateBooking, getOneBooking}