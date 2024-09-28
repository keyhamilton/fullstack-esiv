/*
  Warnings:

  - A unique constraint covering the columns `[professorId]` on the table `disciplina` will be added. If there are existing duplicate values, this will fail.

*/
-- CreateTable
CREATE TABLE "notas" (
    "alunoId" TEXT NOT NULL,
    "disciplinaId" TEXT NOT NULL,
    "notaUm" REAL NOT NULL,
    "notaDois" REAL NOT NULL,
    "notaTres" REAL NOT NULL,
    CONSTRAINT "notas_alunoId_fkey" FOREIGN KEY ("alunoId") REFERENCES "aluno" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "notas_disciplinaId_fkey" FOREIGN KEY ("disciplinaId") REFERENCES "disciplina" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "notas_alunoId_key" ON "notas"("alunoId");

-- CreateIndex
CREATE UNIQUE INDEX "notas_disciplinaId_key" ON "notas"("disciplinaId");

-- CreateIndex
CREATE UNIQUE INDEX "disciplina_professorId_key" ON "disciplina"("professorId");
