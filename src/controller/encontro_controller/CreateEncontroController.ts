import {Request, Response} from 'express';
import { prisma } from '../../database/prisma';

export class CreateEncontroController{
    async handle(request: Request, response:Response){
        const {date} = request.body;

        const encontro = await prisma.enconto.create({
            data:{
                date
            }
        })
        return response.json(encontro)
    }
}