import { prisma } from "../../database/prisma";
import { Aluno } from "../../entities/Aluno";
import { IAlunoRepository } from "../IAlunoRepository";


export class PrismaAlunoRepository implements IAlunoRepository {
  async exists(phone: string): Promise<boolean> {
    const aluno = await prisma.aluno.findUnique({
      where: {
        phone,
      },
    });

    return !!aluno;
  }

  async create({ name, phone, password}: Aluno): Promise<Aluno> {
    const aluno = await prisma.aluno.create({
      data: {
        name,
        phone,
        password,
      },
    });

    return aluno;
  }
}
