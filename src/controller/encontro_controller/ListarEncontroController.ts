import { prisma } from "../../database/prisma";
import {Request, Response} from 'express';

export class ListaEncontroController{
    async handle(request: Request, response: Response){
        
        const encontro = await prisma.enconto.findMany({
            select:{
                id:true,
                date:true,
                EncontroAssunto:{
                    select:{
                        assunto:true
                    }
                }
            }
        });

        return response.json(encontro);
    }
}