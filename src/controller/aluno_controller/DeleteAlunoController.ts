import { prisma } from "../../database/prisma";
import {Request, Response} from 'express';

export class DeleteAlunoController{
    async handle(request: Request, response:Response){
        const {id} = request.params;
        
        const alunos = await prisma.aluno.delete({
            where:{
                id
            }    
        });

        return response.json("Aluno excluido com sucesso.");
    }
}