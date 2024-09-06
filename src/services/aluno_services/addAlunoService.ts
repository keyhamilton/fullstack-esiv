import prisma from "../../lib/prisma";

export async function addAlunoService(nome: string, email: string) {
   const aluno = await prisma.aluno.create({
    data: {
        nome,
        email
    }
   });
   return aluno;
}