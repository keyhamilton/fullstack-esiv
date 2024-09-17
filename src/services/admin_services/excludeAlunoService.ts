import prisma from "../../lib/prisma";

export default async function excludeAlunoService(alunoId: string, disciplinaId: string) {
    const aluno = await prisma.aluno.findFirst({
        where: {
            id: alunoId
        }
    })

    if (aluno) {
        await prisma.disciplina.update({
            where: {
                id: disciplinaId
            },
            data: {
                alunos: {
                    disconnect: {
                        id: aluno.id
                    }
                }
            }
        })
    }
}