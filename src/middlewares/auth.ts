import { Request, Response, NextFunction } from "express"
import jwt, {JwtPayload}  from "jsonwebtoken"
import { SECRET_KEY } from "../controllers/singinController"

type RequestWithUser = Request &{
    user: string | JwtPayload
}


export const authMiddleware = async (req: RequestWithUser, res: Response, next: NextFunction) => {
    const token = req.headers['authorization']

    if(!token) return res.json({erro: "O token não foi fornecido"})

    try{
        const decoded = jwt.verify(token, SECRET_KEY);
        req.user = decoded
        next()
    }catch(error){
        return res.json({
            error: 'Erro ao verificar token',
            message: error
        })
    }
}