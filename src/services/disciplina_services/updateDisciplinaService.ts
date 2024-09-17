import prisma from "../../lib/prisma";

export default async function updateDisciplinaService(disciplina: Course) {
    if (disciplina.nome && disciplina.professorId) {
        const updatedDisciplina = await prisma.disciplina.update({
           where: {
                id: disciplina.id
           },
           data: {
                nome: disciplina.nome,
                professorId: disciplina.professorId     
           }
        })
        
    }

    if (disciplina.nome) {
        const updatedDisciplina = await prisma.disciplina.update({
            where: {
                id: disciplina.id
            },
            data: {
                nome: disciplina.nome    
            }
        })
    }

    const updatedDisciplina = await prisma.disciplina.update({
        where: {
            id: disciplina.id
        },
        data: {
            professorId: disciplina.professorId     
        }
    })

    return updatedDisciplina;
}