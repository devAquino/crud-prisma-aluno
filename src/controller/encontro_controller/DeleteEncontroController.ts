import { prisma } from "../../database/prisma";
import {Request, Response} from 'express';

export class DeleteEncontroController{
    async handle(request: Request, response:Response){
        const {id} = request.params;
        
        const assunto = await prisma.assunto.delete({
            where:{
                id
            }    
        });

        return response.json("Encontro excluido com sucesso.");
    }
}