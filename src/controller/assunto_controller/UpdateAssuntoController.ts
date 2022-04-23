import { prisma } from "../../database/prisma";
import {Request, Response} from 'express';

export class UpdateAssuntoController{
    async handle(request: Request, response:Response){
        const {id} = request.params;
        const {name, degree, time} = request.body;

        const assunto = await prisma.assunto.update({
            where:{
                id
            },
            data:{
                name,
                degree,
                time
            }
        })
        return response.json(assunto);

    }
}