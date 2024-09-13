import prisma from "../../lib/prisma";

export default async function addProfessorService(nome: string, email: string) {
    const professor = await prisma.professor.create({
        data: {
            nome, 
            email
        }
    })
    return professor;
}