import { FastifyInstance } from "fastify";
import getDisciplinasService from "../services/disciplina_services/getDisciplinasService";
import getDisciplinaByIdService from "../services/disciplina_services/getDisciplinaByIdService";
import { notFound } from "../lib/errorMessage";

export default function disciplinaController(fastify: FastifyInstance) {
    // retorna uma lista de todas as disciplinas, caso existam
    fastify.get('/disciplinas', async(request, reply)=> {
        const disciplinasFound = await getDisciplinasService()
        if (disciplinasFound) {
            reply.code(200).send(disciplinasFound);
        }
        reply.code(404).send({
            erro: '404', 
            message: 'Não existem disciplinas cadastradas'
        })
    })


    // retorna uma disciplina pelo id.

    fastify.get('/disciplinas/:id', async(request, reply)=>{
        const disciplina = request.params as Course;
        const disciplinaFound = await getDisciplinaByIdService(disciplina.id);
        if (disciplinaFound) {
            reply.code(200).send(disciplinaFound);
        }
        reply.code(404).send(notFound);
    })

}


