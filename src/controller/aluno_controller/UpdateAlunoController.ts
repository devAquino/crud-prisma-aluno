import { prisma} from "../../database/prisma";
import {Request, Response} from 'express';
import {hash} from 'bcryptjs';

export class UpdateAlunoController{
    async handle(request: Request, response:Response){
        const {id} = request.params;
        const {name, phone, password} = request.body;
        
        const passowordHash = await hash(password, 8)
        const alunos = await prisma.aluno.update({
            where:{
                id
            },
            data:{
                name,
                phone,
                password:passowordHash
            },
            // select:{
            //     id:true,
            //     name:true,
            // }
        
        });
        
        return response.json(alunos);
    }
}