import { CreateAlunoControllerTest } from "../controller/aluno_controller/CreateAlunoControllerTest";
import { PrismaAlunoRepository } from "../repositories/prisma/PrismaAlunoRepository";
import { CreateAlunoService } from "../service/CreateAlunoService";

export const createAlunoFactory = () => {
    const alunoRepository = new PrismaAlunoRepository();
    const createAluno = new CreateAlunoService(alunoRepository);
    const createAlunoControllerTest = new CreateAlunoControllerTest(createAluno);
    return createAlunoControllerTest;
  };
  