
import { createAlunoFactory } from './factory/CreateAlunoFectory';
import { Router } from "express";
import { Request, Response } from "express";
import { CreateEncontroAssuntoController } from './controller/relacionamento_controller/CreateEncontroAssuntoController';
import { CreateAssuntoController } from './controller/assunto_controller/CreateAssuntoController';
import { ListarAssuntos } from './controller/assunto_controller/ListarAssuntoController';
import { UpdateAssuntoController } from './controller/assunto_controller/UpdateAssuntoController';
import { DeleteAssuntoController } from './controller/assunto_controller/DeleteAssuntoController';
import { CreateAlunoController } from './controller/aluno_controller/CreateAlunoController';
import { CreateAlunoWithEncontroController } from './controller/aluno_controller/CreateAlunoWithEncontroController';
import { DeleteAlunoController } from './controller/aluno_controller/DeleteAlunoController';
import { ListarAlunoController } from './controller/aluno_controller/ListarAlunoController';
import { UpdateAlunoController } from './controller/aluno_controller/UpdateAlunoController';
import { UpdateAlunoWithEncontroController } from './controller/aluno_controller/UpdateAlunoWithEncontroController';
import { AuthenticateAlunoController } from './controller/authenticate_controller/AuthenticateAlunoController';
import { CreateEncontroController } from './controller/encontro_controller/CreateEncontroController';
import { DeleteEncontroController } from './controller/encontro_controller/DeleteEncontroController';
import { ListaEncontroController } from './controller/encontro_controller/ListarEncontroController';
import { UpdateEncontroController } from './controller/encontro_controller/UpdateEncontroController';
import { CreateAlunoEncontroController } from './controller/relacionamento_controller/CreateAlunoEncontroController';
import { ensureAuthentication } from './middleware/ensureAuthentication';

const router = Router();

// Chamada de test
const createAlunoMockado = (req:Request, res:Response) =>{
    createAlunoFactory().handle(req, res)
};
// Rota para teste
router.post('/alunos/cadastrar', createAlunoMockado)


//Instâncias do model Assunto
const cadastrarAssunot = new CreateAssuntoController();
const listarAssunto = new ListarAssuntos();
const updateAssunto = new UpdateAssuntoController();
const deleteAssunto = new DeleteAssuntoController();

//Instâncias do modell Encontro
const cadasrarEncontro = new CreateEncontroController();
const listarEncontro = new ListaEncontroController();
const updateEncontro = new UpdateEncontroController();
const deleteEncontro = new DeleteEncontroController();


// Instâncias do model EncontroAssunto
const cadastrarEncontroAssunto = new CreateEncontroAssuntoController();


// Instâncias do model Aluno
const cadastrarAluno = new CreateAlunoController();
const cadastrarAlunoWithEncontro = new CreateAlunoWithEncontroController();
const listarAluno = new ListarAlunoController();
const atualizarAluno = new UpdateAlunoController();
const atualizarAlunoWithEncontro = new UpdateAlunoWithEncontroController();
const excluirAluno = new DeleteAlunoController();

// Instância de Autenticação
const autenticarAluno = new AuthenticateAlunoController();

//Instâncias dos relacionamentos
const alunoEncontro = new CreateAlunoEncontroController();
const encontroAssunto = new CreateEncontroAssuntoController();

// Rotas do model assunto
router.post('/assunto/cadastrar', cadastrarAssunot.handle);
router.get('/assuntos', listarAssunto.handle);
router.put('/assunto/update/:id', updateAssunto.handle);
router.delete('/assunto/delete/:id', deleteAssunto.handle);

//Rotas do model encontro
router.post('/encontro/cadastrar', cadasrarEncontro.handle);
router.get('/encontros', listarEncontro.handle);
router.put('/encontro/update/:id', updateEncontro.handle);
router.delete('/encontro/delete/:id', deleteEncontro.handle);

//Rota do model encontroAssunto
router.post('/encontro-assunto/cadastrar', cadastrarEncontroAssunto.handle);

// Rota para autenticação
router.post('/login', autenticarAluno.handle);

//Rotas do model aluno
router.post('/aluno/cadastrar', cadastrarAluno.handle);
router.post('/aluno-with-encontro/cadastrar', cadastrarAlunoWithEncontro.handle);
router.get('/alunos', listarAluno.handle);
router.put('/aluno/update/:id',ensureAuthentication, atualizarAluno.handle);
router.put('/alunoWithEncontro/update/:id', atualizarAluno.handle);
router.delete('/aluno/delete/:id', excluirAluno.handle);


// Rotas do relacionamento
router.post('/aluno-encontro/cadastrar', alunoEncontro.handle);
router.post('/encontro-assunto/cadastrar', encontroAssunto.handle);




export {router}