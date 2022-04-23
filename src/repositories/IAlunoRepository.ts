import { Aluno } from "../entities/Aluno";

export interface IAlunoRepository {
  create(aluno: Aluno): Promise<Aluno>;
  exists(phone: string): Promise<boolean>;
}


