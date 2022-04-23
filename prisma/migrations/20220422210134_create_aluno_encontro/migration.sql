-- CreateTable
CREATE TABLE "aluno_encontros" (
    "id" TEXT NOT NULL,
    "aluno_id" TEXT NOT NULL,
    "encontro_id" TEXT NOT NULL,

    CONSTRAINT "aluno_encontros_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "aluno_encontros" ADD CONSTRAINT "aluno_encontros_aluno_id_fkey" FOREIGN KEY ("aluno_id") REFERENCES "alunos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "aluno_encontros" ADD CONSTRAINT "aluno_encontros_encontro_id_fkey" FOREIGN KEY ("encontro_id") REFERENCES "encontros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
