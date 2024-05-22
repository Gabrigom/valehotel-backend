import mongoose from "mongoose";

const Costumer = new mongoose.Schema({
    costumerName: String,
    costumerCPF: String,
    costumerPhone: String,
    costumerEmail: String,  
    costumerPassword: String,
    costumerAdminLevel: Number
})