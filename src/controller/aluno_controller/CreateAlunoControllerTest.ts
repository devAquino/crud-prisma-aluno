
import { Request, Response } from "express";
import { CreateAlunoService } from "../../service/CreateAlunoService";


export class CreateAlunoControllerTest {
  constructor(private createAluno: CreateAlunoService) {}

  async handle(request: Request, response: Response) {
    const { name, phone, password } = request.body;
    const aluno = await this.createAluno.execute({ name, phone, password });

    return response.json(aluno);
  }
}
