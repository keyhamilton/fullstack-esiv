import { FastifyInstance } from "fastify";
import { badRequest } from "../lib/errorMessage";
import includeAlunoService from "../services/admin_services/includeAlunoService";
import excludeAlunoService from "../services/admin_services/excludeAlunoService";
import { Notas } from "@prisma/client";
import addNotasService from "../services/admin_services/addNotasService";


export default function adminController(fastify: FastifyInstance) {
    fastify.post('/admin/include', async (request, reply) => {
        const {alunoId, disciplinaId} = request.body as Matricula 
        try {
            includeAlunoService(alunoId, disciplinaId)
        } catch (error) {
            reply.code(400).send(badRequest)
        }   
    })

    fastify.post('/admin/exclude', async (request, reply) => {
        const {alunoId, disciplinaId} = request.body as Matricula 
        try {
            excludeAlunoService(alunoId, disciplinaId)
        } catch (error) {
            reply.code(400).send(badRequest)
        } 
    })

    fastify.post('/admin/notas', async (request, reply) => {
        const notas = request.body as Notas;
        try {
            const notasSaved = await addNotasService(notas)
            reply.code(201).send(notasSaved)
        } catch (error) {
            reply.code(400).send(badRequest)
        }
    })
}