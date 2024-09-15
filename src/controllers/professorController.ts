import { FastifyInstance } from "fastify";
import { getProfessorById } from "../services/professor_services/getProfessorService";
import addProfessorService from "../services/professor_services/addProfessorService";
import deleteProfessorService from "../services/professor_services/deleteProfessorService";
import updateProfessorService from "../services/professor_services/updateProfessorService";
import { badRequest, notFound } from "../lib/errorMessage";



export default function professorController (fastify: FastifyInstance) {
    // encontra um professor pelo id fornecido como parametro
    fastify.get('/professores/:id', async (request, reply) => {
        const professor = request.params as User;

        const professorFound = await getProfessorById(professor.id)

       if (professorFound) {
            reply.code(200).send(professorFound)
       }
        reply.code(404).send(notFound)
    }) //caso o recurso nao exista, responde com uma mensagem de erro


    // adiciona um professor
    fastify.post('/professores', async(request, reply)=> {
        const { nome, email } = request.body as User;
        try {
            const professorAdded = await addProfessorService(nome, email)
            reply.code(201).send(professorAdded)
        } catch (error) {
            reply.code(400).send(badRequest)
        }
    })

    // deleta um professor, caso ele exista
    fastify.delete('/professores', async(request, reply)=> {
        const professor = request.body as User
        try {
            const deletedProfessor = await deleteProfessorService(professor)
            reply.code(200).send(deletedProfessor)
        } catch (error) {
            reply.code(404).send(notFound)    
        }
    })


    fastify.patch('/professores', async (request, reply)=> {
        const professor = request.body as User

        try {
           const updatedProfessor = await updateProfessorService(professor)
           reply.code(200).send(updatedProfessor)
        } catch (error) {
            reply.code(400).send(badRequest)
        }
    })
}