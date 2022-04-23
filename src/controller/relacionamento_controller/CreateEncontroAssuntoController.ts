import {Request, Response} from 'express';
import { prisma} from '../../database/prisma';

export class CreateEncontroAssuntoController{
    async handle(request: Request, response:Response){
        const {encontro_id, assunto_id} = request.body;

        const encontroAssunto = await prisma.encontroAssunto.create({
            data:{
                encontro_id,
                assunto_id
            }
        })
        return response.json(encontroAssunto)
    }
}