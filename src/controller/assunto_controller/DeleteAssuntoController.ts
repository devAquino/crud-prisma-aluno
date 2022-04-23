import { prisma } from "../../database/prisma";
import {Request, Response} from 'express';

export class DeleteAssuntoController{
    async handle(request: Request, response:Response){
        const {id} = request.params;
        
        const assunto = await prisma.assunto.delete({
            where:{
                id
            }    
        });

        return response.json("Assunto excluido com sucesso.");
    }
}