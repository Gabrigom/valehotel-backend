import jwt from "jsonwebtoken"

export default { 
    generateToken(costumer) {
        return jwt.sign({
            id: costumer._id,
            name: costumer.costumerName,
        }, "hotel", { expiresIn: 3600 })
    }
}