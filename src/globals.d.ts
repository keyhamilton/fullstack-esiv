import { Aluno, Disciplina } from "@prisma/client"



declare global {
    interface User {
        id: string
        nome: string
        email: string
        disciplinas: Disciplina[]
    }

}

declare global {
    interface Course {
        id: string
        mome: string
        professorId: string
        alunos: Aluno[]
    }
}



