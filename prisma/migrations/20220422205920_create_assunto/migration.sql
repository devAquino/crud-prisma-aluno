-- CreateTable
CREATE TABLE "assuntos" (
    "id" TEXT NOT NULL,
    "disciplina" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "time" INTEGER NOT NULL,

    CONSTRAINT "assuntos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "assuntos_disciplina_key" ON "assuntos"("disciplina");
