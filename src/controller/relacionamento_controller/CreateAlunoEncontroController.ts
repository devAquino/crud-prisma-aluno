import { Request, Response } from 'express';
import { prisma } from "../../database/prisma";

export class CreateAlunoEncontroController{
    async handle(request: Request, response: Response){
        const {aluno_id, encontro_id} = request.body;

        const alunoEncontro = await prisma.alunoEncontro.create({
            data:{
                aluno_id,
                encontro_id
            }
        })
        return response.json(alunoEncontro);
    }
}