import prisma from "../../lib/prisma";

export default async function deleteDisciplinaService(disciplina: Course) {
    const deletedDisciplina = await prisma.disciplina.delete({
        where: {
            id: disciplina.id
        }
    })

    return deletedDisciplina;
}