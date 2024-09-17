import { FastifyInstance } from "fastify";
import { badRequest } from "../lib/errorMessage";
import includeAlunoService from "../services/admin_services/includeAlunoService";
import excludeAlunoService from "../services/admin_services/excludeAlunoService";

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
}