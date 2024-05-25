import jwt from "jsonwebtoken"

export default { 
    generateToken(costumer) {
        return jwt.sign({
            id: costumer._id,
            name: costumer.costumerName,
        }, "hotel", { expiresIn: 3600 })
    },
    generateSearchQuery(query, fields) {
        return {
            $or: fields.map(field => {
                if (typeof field === 'string') {
                    return { [field]: { $regex: query, $options: 'i' } };
                } else {
                    const [nestedField, nestedKey] = field;
                    return { [`${nestedField}.${nestedKey}`]: { $regex: query, $options: 'i' } };
                }
            })
        };
    }
}