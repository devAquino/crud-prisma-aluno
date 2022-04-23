import { response } from "express";
import { prisma } from "../../database/prisma";
import {hash} from "bcryptjs";

interface IAluno{
    name:string;
    phone: string;
    password: string;
}

export class ExistAlunoController{
    async execute({name, phone, password}: IAluno){
        const existeAluno = await prisma.aluno.findFirst({
            where:{
                phone
            }
        })

        if(existeAluno){
            throw new Error("Usuário já existe.");
        }

        const passwordHash = await hash(password, 8);
        const aluno = await prisma.aluno.create({
            data:{
                name,
                phone,
                password:passwordHash,

            }
        })

        return aluno;
    }
}