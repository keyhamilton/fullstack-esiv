import prisma from "../../lib/prisma";

export async function updateAlunoService(aluno: Aluno) {
    
    if (aluno.email && aluno.nome) {
    
        const updatedAluno = await prisma.aluno.update({
            where: {
                id: aluno.id,
            },
            data: {
                email: aluno.email,
                nome: aluno.nome
            }
        })
        return updatedAluno;
    }
    if (aluno.nome) {
        
        const updatedAluno = await prisma.aluno.update({
            where: {
                id: aluno.id,
            },
            data: {
                nome: aluno.nome
            }
        })
        return updatedAluno;
    }

    const updatedAluno = await prisma.aluno.update({
        where: {
            id: aluno.id,
        },
        data: {
            email: aluno.email
        }
    })

    return updatedAluno;
}