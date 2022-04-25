### Configurando o arquivo .env
* Após instalar a dependência do prisma, será criado um arquivo .env, nele contém a variável DATABASE_URL, que é a variável de configuração do
banco de dados, como utilizei o PostgreSQL segue as seguintes configurações:
DATABASE_URL="postgresql://**usuario_postgres**:**sua_senha**@localhost:5432/**nome_do_banco_de_dados**?schema=public"  
Criei também a variável SECRET que contem a chave de configuraçõ do jwt, então faça como se segue.  
SECRET=**72896d19-fa3a-4d7f-8d56-3ab6b3809627**


### Adicionando os relacionamentos.

1. Alunos

    * Para cadastrar alunos acesse a rota: router.post('/aluno/cadastrar', cadastrarAluno.handle); 
       * Utilizando essa rota só é possível cadastrar o aluno, o relacionamento será adicionado posteriormente.
       * O campo phone no model Aluno é um atributo único,então é possível cadastrar um aluno com o mesmo nome, mas não com o mesmo phone. 
    * Para atualizar um aluno utilize a rota router.put('/aluno/update/:id',ensureAuthentication, atualizarAluno.handle);
       * Bastar inserir o id do aluno.
       * É cecessário está autenticado e autorizado.
    * Para excluir um aluno utilize a rota router.delete('/aluno/delete/:id', excluirAluno.handle);
       * Basta inserir o id do aluno que deseja excluir.
    * Para listar alunos utilize a rota router.get('/alunos', listarAluno.handle);

2. Encontros 
   
   * Para cadastrar um encontro utilize a rota router.post('/encontro/cadastrar', cadasrarEncontro.handle);
   * Para atualizar um encontro utilize a rota router.put('/encontro/update/:id', updateEncontro.handle);
   * Para excluir um encontro utilize a rota router.delete('/encontro/delete/:id', deleteEncontro.handle);
   * Para listar um encontro utilize a rota router.get('/encontros', listarEncontro.handle);
   
3. Assuntos

   * Para cadastrar um assunto utilize a rota router.post('/assunto/cadastrar', cadasrarAssunto.handle);
   * Para atualizar um assunto utilize a rota router.put('/assunto/update/:id', updateAssunto.handle);
   * Para excluir um assunto utilize a rota router.delete('/assunto/delete/:id', deleteAssunto.handle);
   * Para listar um assunto utilize a rota router.get('/assunto', listarSssunto.handle);

   
3. Para adicionar o relacionamento entre a entidade Encontro e Assunto

    * Acessar a rota: router.post('/encontro-assunto/cadastrar', encontroAssunto.handle);
    * Inserir o id do encontro e o id do assunto
    * É possível inserir vários assuntos ao mesmo encontro, já que o realacionamento entre eles é many-to--many
    * Uma vez que o relacionamento tenha sido feito, utilizando a rota router.get('/encontros', listarEncontro.handle)\n
    será possível ver o encontro com seus assuntos.
    

4. Para adicionar o relacionamento entre a entidade Aluno e Encontro

    * Acessar a rota: router.post('/aluno-encontro/cadastrar', alunoEncontro.handle);
    * Inserir o id do aluno e o id do encontro.
    * É possível inserir vários encontros ao mesmo aluno, já que o realacionamento entre eles também é many-to--many
    * Uma vez que o relacionamento tenha sido feito, utilizando a rota router.get('/alunos', listarAluno.handle)\n
    será possível ver os alunos e seus respectivos encontros.

5. Para cadastrar aluno e atribuir um encontro a ele.
   
   * Acessa a rota router.post('/aluno-with-encontro/cadastrar', cadastrarAlunoWithEncontro.handle);
   * Incluir o id do encontro, assim ao listar os alunos, esse já terá o encontro atribuido.

### Autenticação
   
   * Utilizando a rota router.post('/login', autenticarAluno.handle), podemos autenticar um aluno, para isso é necessário inserir o phone e a password
   * Na aplicação o aluno está atorizado a fazer update somente se estiver autenticado.

### Testes

   * Na aplicação utilizei dois casos de testes unitários
      * Testar o cadastramento de alunos na base de dados.
      * Testar se o aluno existe.

* OBS
    * Usando o comando npx prisma studio, será aberta um gerenciador do banco de dados, nele é possível; 
        * fazer a administração dos relacionamentos.
        * Criar novas rows.
        * Deletar rows
    
