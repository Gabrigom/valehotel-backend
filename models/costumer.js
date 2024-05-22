import mongoose from "mongoose";

const costumer = new mongoose.Schema({
    costumerName: String,
    costumerCPF: String,
    costumerPhone: String,
    costumerEmail: String,  
    costumerPassword: String,
    costumerAdminLevel: Number
})

export default costumer