import prisma from "../../lib/prisma";

export default async function getDisciplinaByIdService(disciplinaId: string) {
    const disciplinaFound = await prisma.disciplina.findFirst({
        where: {
            id: disciplinaId
        }
    })

    return disciplinaFound;
}