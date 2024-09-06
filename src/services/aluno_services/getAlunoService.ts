import prisma from "../../lib/prisma";

export async function getAlunoById(alunoId: string) {

   const aluno = await prisma.aluno.findFirst({
    where: {
        id: alunoId
        
    },
    include: {
        disciplinas: true
    }
   });

    return aluno;
    
}

