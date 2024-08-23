import { Request, Response } from "express";
import { JwtPayload } from "jsonwebtoken";
import { prisma } from "../connections/db";

type User = {
    id: string, 
    name: string, 
    email: string
}


type RequestWithUser = Request &{
    user: string | JwtPayload | User
}
export class PostController{
    public async index(req: RequestWithUser, res: Response){
        try{
            const {id} = req.user;
            const posts = await prisma.post.findMany({
                where: {
                    authorId: id,
                }
            })
            return res.json(posts);

        } catch(error){
            return res.json({
                error: 'Erro ao listar post',
                message: error
            })
        }
    }
    public async store(req: RequestWithUser, res: Response){
        const { title } = req.body;
        const {id} = req.user;

        const post = await prisma.post.create({
            data: {
                title: title, 
                authorId: id
            }
        })
        return res.json(post)
    }

    public async stripePosts(req: RequestWithUser, res: Response){
        const posts = await prisma.post.findMany();
        return res.json(posts)
    }

    public async stripeUsers(req: RequestWithUser, res: Response){
        const users = await prisma.user.findMany();
        return res.json(users)
    }
}