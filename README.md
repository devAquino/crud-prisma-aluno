### Adicionando os relacionamentos.

1. Para adicionar o relacionamento entre a entidade Encontro e Assunto

    * Acessar a rota: router.post('/encontro-assunto/cadastrar', encontroAssunto.handle);
    * Inserir o id do encontro e o id do assunto
    * É possível inserir vários assuntos ao mesmo encontro, já que o realacionamento entre eles é many-to--many
    * Uma vez que o relacionamento tenha sido feito, utilizando a rota router.get('/encontros', listarEncontro.handle)\n
    será possível ver o encontro com seus assuntos.
    

2. Para adicionar o relacionamento entre a entidade Aluno e Encontro

    * Acessar a rota: router.post('/aluno-encontro/cadastrar', alunoEncontro.handle);
    * Inserir o id do aluno e o id do encontro.
    * É possível inserir vários encontros ao mesmo aluno, já que o realacionamento entre eles também é many-to--many
    * Uma vez que o relacionamento tenha sido feito, utilizando a rota router.get('/alunos', listarAluno.handle)\n
    será possível ver os alunos e seus respectivos encontros.


* OBS
    * Usando o comando npx prisma studio, será aberta um gerenciador do banco de dados, nele é possível; 
        * fazer a administração dos relacionamentos.
        * Criar novas rows.
        * Deletar rows
    
