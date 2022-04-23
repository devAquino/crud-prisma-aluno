import { Aluno } from '../entities/Aluno';
import { IAlunoRepository } from '../repositories/IAlunoRepository';

interface IAlunoRequest{
    name: string;
    phone: string;
    password: string;
}

export class CreateAlunoService{
    constructor(private alunoRepository: IAlunoRepository) {}

    async execute({ name, phone, password }: IAlunoRequest) {
        const alunoAlreadyExists = await this.alunoRepository.exists(phone);

        if (alunoAlreadyExists) {
            throw new Error("Aluno already exists!");
        }

        const alunoCreate = Aluno.create({ name, phone, password });
        const aluno = await this.alunoRepository.create(alunoCreate);
        return aluno;
    }
}