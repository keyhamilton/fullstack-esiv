import prisma from "../../lib/prisma";

export async function getProfessorById (professorId: string) {
    const professor = await prisma.professor.findFirst({
        where: {
            id: professorId
        },
        include: {
            disciplinas: true
        }
    })

    return professor;
}