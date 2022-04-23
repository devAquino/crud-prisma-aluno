### Adicionando os relacionamentos.
1. Para adicionar o relacionamento entre a entidade Aluno e Encontro

    * Acessar a rota: router.post('/aluno-encontro/cadastrar', alunoEncontro.handle);
    * Inserir o id do aluno e o id do encontro

2. Para adicionar o relacionamento entre a entidade Encontro e Assunto

    * Acessar a rota: router.post('/encontro-assunto/cadastrar', encontroAssunto.handle);
    * Inserir o id do encontro e o id do assunto
OBS
    * Usando o comando npx prisma studio é possível; 
        * fazer a administração dos relacionamentos.
        * Criar novas rows.
        * Deletar rows
    