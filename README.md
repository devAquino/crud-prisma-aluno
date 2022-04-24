### Adicionando os relacionamentos.

1. Para cadastrar alunos

    * Acessar a rota: router.post('/aluno/cadastrar', cadastrarAluno.handle); 
    * Utilizando essa rota só é possível cadastrar o aluno, o relacionamento será adicionado posteriormente.
    * O campo phone no model Aluno é um atributo único,então é possível cadastrar um aluno com o mesmo nome, mas não com o mesmo phone. 

2. Para adicionar o relacionamento entre a entidade Encontro e Assunto

    * Acessar a rota: router.post('/encontro-assunto/cadastrar', encontroAssunto.handle);
    * Inserir o id do encontro e o id do assunto
    * É possível inserir vários assuntos ao mesmo encontro, já que o realacionamento entre eles é many-to--many
    * Uma vez que o relacionamento tenha sido feito, utilizando a rota router.get('/encontros', listarEncontro.handle)\n
    será possível ver o encontro com seus assuntos.
    

3. Para adicionar o relacionamento entre a entidade Aluno e Encontro

    * Acessar a rota: router.post('/aluno-encontro/cadastrar', alunoEncontro.handle);
    * Inserir o id do aluno e o id do encontro.
    * É possível inserir vários encontros ao mesmo aluno, já que o realacionamento entre eles também é many-to--many
    * Uma vez que o relacionamento tenha sido feito, utilizando a rota router.get('/alunos', listarAluno.handle)\n
    será possível ver os alunos e seus respectivos encontros.

4. Para cadastrar aluno e atribuir um encontro a ele.
   
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
    
