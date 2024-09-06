import { PrismaClient } from "@prisma/client"


declare global {
    interface Aluno {
        id: string
        nome: string
        email: string
    }

}



export default { Aluno, prismaInstance }