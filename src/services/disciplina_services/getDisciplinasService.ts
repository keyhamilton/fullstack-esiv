import prisma from "../../lib/prisma";

export default async function getDisciplinasService() {
    const disciplinasFound = await prisma.disciplina.findMany();

    return disciplinasFound;
}