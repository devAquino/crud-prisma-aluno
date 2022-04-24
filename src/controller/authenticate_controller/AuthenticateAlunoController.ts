//import { AuthenticateAluno } from './../authenticate/AuthenticateAluno';
import { Request, Response } from 'express';
import { AuthenticateAluno } from './AuthenticateAluno';


export class AuthenticateAlunoController{
    async handle(request:Request, response:Response){
        const {name, phone, password} = request.body;

        const authenticateAluno = new AuthenticateAluno();

        const token = await authenticateAluno.execute({
            phone,
            password
        })

        return response.json(token);
    }
}