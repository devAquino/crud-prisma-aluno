import { prisma } from "../../database/prisma";
import {Request, Response} from 'express';

export class CreateAssuntoController{
    async handle(request: Request, response:Response){
        const {name, degree, time} = request.body;

        const assunto = await prisma.assunto.create({
            data:{
                name,
                degree,
                time
            }
        })
        return response.json(assunto);

    }
}