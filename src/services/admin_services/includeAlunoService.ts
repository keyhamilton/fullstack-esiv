import prisma from "../../lib/prisma";

export default async function includeAlunoService(alunoId: string, disciplinaId: string) {

    const aluno = await prisma.aluno.findFirst({
        where: {
            id: alunoId
        }
    })
    if (aluno) {
        
        await prisma.disciplina.update({
            
            data: {
                alunos: {
                    connect: {
                        id: aluno.id
                    }
                }
            },
            where: {
                id: disciplinaId
            }
        })
    }

}