import { prisma } from "../../database/prisma";
import {Request, Response} from 'express';

export class UpdateAlunoWithEncontroController{
    async handle(request: Request, response:Response){
        const {id} = request.params;
        const {name, phone, password, encontro_id} = request.body;
        
        const alunos = await prisma.aluno.update({
            where:{
                id
            },
            data:{
                name,
                phone,
                password,
                AlunoEncontro:{
                    connect:encontro_id
                }
            }
            
        });

        return response.json(alunos);
    }
}