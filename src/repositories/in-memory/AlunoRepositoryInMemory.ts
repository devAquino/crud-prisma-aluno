import { Aluno } from "../../entities/Aluno";
import { v4 as uuid } from "uuid";
import { IAlunoRepository } from "../IAlunoRepository";

export class AlunoRepositoryInMemory implements IAlunoRepository {
  private alunos: Aluno[] = [];

  async create(aluno: Aluno): Promise<Aluno> {
    Object.assign(aluno, {
      id: uuid(),
    });

    this.alunos.push(aluno);
    return aluno;
  }

  async exists(phone: string): Promise<boolean> {
    const aluno = this.alunos.some((aluno) => aluno.phone === phone);
    return aluno;
  }
}
