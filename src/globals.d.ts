import { Disciplina } from "@prisma/client"



declare global {
    interface User {
        id: string
        nome: string
        email: string
        disciplinas: Disciplina[]
    }

}



