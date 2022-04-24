import { prisma } from "../../database/prisma";
import {compare} from 'bcryptjs';
import {sign} from 'jsonwebtoken';
//require('dotenv').config()
import 'dotenv/config';

interface IAuthenticateAluno{
    phone: string;
    password: string;
}

export class AuthenticateAluno{
    async execute({phone, password}: IAuthenticateAluno){
        
        const alunoExist = await prisma.aluno.findFirst({
            where:{
                phone
            }
        })
        if (!alunoExist){
            throw new Error("Aluno não está na base de dados.");
            
        }

        const passwordMatch = await compare(password, alunoExist.password);

        if(!passwordMatch){
            throw new Error("Password incorreto.")
        }
        const chave = process.env.SECRET;
        const token = sign({}, chave as string,{subject:alunoExist.id, expiresIn:3600});

        return {token};
    }
}
