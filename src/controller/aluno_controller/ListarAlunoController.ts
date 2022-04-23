import { prisma } from "../../database/prisma";
import {Request, Response} from 'express';

export class ListarAlunoController{
    async handle(request: Request, response:Response){
        
        const alunos = await prisma.aluno.findMany({
            select:{
                id:true,
                name: true,
                phone: true,
                AlunoEncontro:{
                    select:{
                        encontro:true,
                    }
                }
            }     
        });
        
        return response.json(alunos);
    }
}