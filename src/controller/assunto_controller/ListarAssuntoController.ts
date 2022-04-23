import {Request, Response} from 'express';
import { prisma } from '../../database/prisma';

export class ListarAssuntos{
    async handle(request: Request, response:Response){
        const assuntos = await prisma.assunto.findMany();

    
        return response.json(assuntos);
    }
}