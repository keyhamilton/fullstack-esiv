-- CreateTable
CREATE TABLE "disciplina" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "professorId" TEXT NOT NULL,
    CONSTRAINT "disciplina_professorId_fkey" FOREIGN KEY ("professorId") REFERENCES "professor" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "aluno" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "professor" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "email" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "_AlunoToDisciplina" (
    "A" TEXT NOT NULL,
    "B" TEXT NOT NULL,
    CONSTRAINT "_AlunoToDisciplina_A_fkey" FOREIGN KEY ("A") REFERENCES "aluno" ("id") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "_AlunoToDisciplina_B_fkey" FOREIGN KEY ("B") REFERENCES "disciplina" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "aluno_email_key" ON "aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "professor_email_key" ON "professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "_AlunoToDisciplina_AB_unique" ON "_AlunoToDisciplina"("A", "B");

-- CreateIndex
CREATE INDEX "_AlunoToDisciplina_B_index" ON "_AlunoToDisciplina"("B");
