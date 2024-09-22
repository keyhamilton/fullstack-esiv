import { Notas } from "@prisma/client";
import prisma from "../../lib/prisma";

export default async function addNotasService(notas: Notas) {
    const notasSaved = await prisma.notas.create({
        data: {
            disciplinaId: notas.disciplinaId,
            alunoId: notas.alunoId, 
            notaUm: notas.notaUm, 
            notaDois: notas.notaDois,
            notaTres: notas.notaTres

        }
    })
    return notasSaved
}