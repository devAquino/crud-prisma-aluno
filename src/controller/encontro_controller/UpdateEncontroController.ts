import { prisma} from "../../database/prisma";
import {Request, Response} from 'express';

export class UpdateEncontroController{
    async handle(request: Request, response:Response){
        const {id} = request.params;
        const {date} = request.body;

        const encontro = await prisma.enconto.update({
            where:{
                id
            },
            data:{
                date
            }
        })
        return response.json(encontro);

    }
}