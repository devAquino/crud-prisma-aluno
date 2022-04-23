import { ExistAlunoController } from './ExistAlunoController';
import { prisma } from "../../database/prisma";
import {Request, Response} from 'express';
import {hash} from 'bcryptjs';

export class CreateAlunoController{
    async handle(request: Request, response:Response){
        const {name, phone, password} = request.body;
        
        
        const existAlunoController = new ExistAlunoController();
        const passowordHash = await hash(password, 8)
        const aluno = await existAlunoController.execute({
            name,
            phone,
            password:passowordHash
            
        })

        return response.json(aluno);
    }
}