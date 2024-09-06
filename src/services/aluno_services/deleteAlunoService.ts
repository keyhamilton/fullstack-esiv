import prisma from "../../lib/prisma";

export async function deleteAlunoService(alunoId: string) {
   const deletedAluno = await prisma.aluno.delete({
        where: {
            id: alunoId
        }
   });
   return deletedAluno;
}