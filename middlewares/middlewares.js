import jwt from "jsonwebtoken"

export default {
    authenticate(req, res, next) {
        const authHeader = req.headers.authorization

        if(!authHeader){
            return res.status(401).send({message: 'Um token não foi fornecido.'})
        }
            
        jwt.verify(authHeader, "gatinhos", (err, decoded) => {
            if(err){
                console.log(err);                
                return res.status(500).send({message: 'Erro ao autenticar o token'})    
            }
            
            req.session.user = decoded
            next()
        })
    }
}