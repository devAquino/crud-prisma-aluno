import {Request, Response} from 'express';
import { prisma } from '../../database/prisma';
import {hash} from 'bcryptjs';

interface IAluno{
    name:string;
    phone: string;
    password: string;
}

export class CreateAlunoWithEncontroController{
    async handle(request: Request, response:Response){
        const {name, phone, password, encontro_id} = request.body;

        const passowordHash = await hash(password, 8)
        const aluno = await prisma.alunoEncontro.create({
            data:{
                aluno:{
                    create:{
                        name,
                        phone,
                        password:passowordHash
                    }
                },
                encontro:{
                    connect:{id:encontro_id}
                }
            }
        })
        
        return response.json(aluno)
    }
}