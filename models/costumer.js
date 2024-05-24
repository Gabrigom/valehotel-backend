import mongoose from "mongoose";
import bcrypt from "bcrypt"

const costumer = new mongoose.Schema({
    costumerName: String,
    costumerCPF: String,
    costumerPhone: Number,
    costumerEmail: String,  
    costumerPassword: String,
    costumerAdminLevel: Number
})

costumer.pre('save', async function(next) {
    const hash = await bcrypt.hash(this.costumerPassword, 10)
    this.costumerPassword = hash
  })

export default costumer