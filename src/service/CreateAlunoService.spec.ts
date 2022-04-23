import { Aluno } from './../entities/Aluno';
import { AlunoRepositoryInMemory } from './../repositories/in-memory/AlunoRepositoryInMemory';
import request from "supertest";
import {app} from '../index'
import { IAlunoRepository } from "../repositories/IAlunoRepository";
import { CreateAlunoService } from "./CreateAlunoService";

describe("Test aluno", () => {
    let alunoRepository: IAlunoRepository;
    let createAlunoService: CreateAlunoService;
  
    beforeAll(() => {
        alunoRepository = new AlunoRepositoryInMemory();
        createAlunoService = new CreateAlunoService(alunoRepository);
    });
  
    it("should be able to create a new aluno", async () => {
      const alunoData: Aluno = {
        name: "Test Name",
        phone: "1234-4321",
        password:"123456"
     
      };
  
      const user = await createAlunoService.execute(alunoData);
  
      expect(user).toHaveProperty("id");
      expect(user.phone).toBe("1234-4321");
    });
  
    it("should not be able to create an existing aluno", async () => {
      const alunoData: Aluno = {
        name: "Test Existing Name",
        phone: "1234-5678",
        password: "123456",
      };
  
      await createAlunoService.execute(alunoData);
  
      await expect(createAlunoService.execute(alunoData)).rejects.toEqual(
        new Error("Aluno already exists!")
      );
    });
  });