import prisma from "../../lib/prisma";

export default async function deleteProfessorService(professor:User) {
    const deletedProfessor = await prisma.professor.delete({
        where: {
            id: professor.id
        }
    })
    return deletedProfessor;
}