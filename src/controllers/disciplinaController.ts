import { FastifyInstance } from "fastify";
import getDisciplinasService from "../services/disciplina_services/getDisciplinasService";
import getDisciplinaByIdService from "../services/disciplina_services/getDisciplinaByIdService";
import { badRequest, notFound } from "../lib/errorMessage";
import addDisciplinaService from "../services/disciplina_services/addDisciplinaService";
import updateDisciplinaService from "../services/disciplina_services/updateDisciplinaService";
import deleteDisciplinaService from "../services/disciplina_services/deleteDisciplinaService";

export default function disciplinaController(fastify: FastifyInstance) {
    // retorna uma lista de todas as disciplinas, caso existam
    fastify.get('/disciplinas', async(request, reply)=> {
        const disciplinasFound = await getDisciplinasService()
        if (disciplinasFound) {
            reply.code(200).send(disciplinasFound);
        }
        reply.code(404).send({
            erro: 404, 
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

    fastify.post('/disciplinas', async(request, reply)=>{
        const { nome, professorId} = request.body as Course;
        try {
            const disciplinaCreated = await addDisciplinaService(nome, professorId);
            reply.code(201).send(disciplinaCreated)  
        } catch (error) {
            reply.code(400).send({
                erro: 400,
                message: 'Recurso já existe ou estão faltando dados'
            })
        }
        
    })

    fastify.patch('/disciplinas', async(request, reply)=> {
        const disciplina = request.body as Course;
        try {
            const updatedDisciplina = await updateDisciplinaService(disciplina);
            reply.code(200).send(updatedDisciplina);
        } catch (error) {
            reply.code(400).send(badRequest);
        }
    })

    fastify.delete('/disciplinas', async (request, reply) => {
        const disciplina = request.body as Course;
        try {
            const deletedDisciplina = await deleteDisciplinaService(disciplina);
            reply.code(200).send(deletedDisciplina);
        } catch (error) {
            reply.code(400).send({
                erro: 400,
                message: 'Recurso não existe ou os dados informados estão incorretos'
            })
        }
    })

}


