-- CreateTable
CREATE TABLE "encontro_assuntos" (
    "id" TEXT NOT NULL,
    "encontro_id" TEXT NOT NULL,
    "assunto_id" TEXT NOT NULL,

    CONSTRAINT "encontro_assuntos_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "encontro_assuntos" ADD CONSTRAINT "encontro_assuntos_encontro_id_fkey" FOREIGN KEY ("encontro_id") REFERENCES "encontros"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "encontro_assuntos" ADD CONSTRAINT "encontro_assuntos_assunto_id_fkey" FOREIGN KEY ("assunto_id") REFERENCES "assuntos"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
