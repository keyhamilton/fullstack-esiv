import prisma from "../../lib/prisma";

export default async function addDisciplinaService(nomeDisciplina: string, professorTitularId: string) {
    const disciplinaCreated = prisma.disciplina.create({
        data: {
            nome: nomeDisciplina,
            professorId: professorTitularId

        }
    })
    return disciplinaCreated
}