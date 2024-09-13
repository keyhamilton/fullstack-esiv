import prisma from "../../lib/prisma";

export default async function updateProfessorService(professor: User) {
    if (professor.email && professor.nome) {
        const updatedProfessor = await prisma.professor.update({
            where: {
                id: professor.id
            },
            data: {
                email: professor.email,
                nome: professor.nome
            }
        })
        return updatedProfessor;
    }

    if (professor.nome) {
        const updatedProfessor = await prisma.professor.update({
            where: {
                id: professor.id
            },
            data: {
                nome: professor.nome
            }
        })
        return updatedProfessor;
    }

    const updatedProfessor = await prisma.professor.update({
        where: {
            id: professor.id
        },
        data: {
            email: professor.email,
        }
    })
    return updatedProfessor;
}