import { FastifyInstance } from "fastify";
import { getProfessorById } from "../services/professor_services/getProfessorService";
import addProfessorService from "../services/professor_services/addProfessorService";



export default function professorController (fastify: FastifyInstance) {

    fastify.get('/professores/:id', async (request, reply) => {
        const professor = request.params as User;

        const professorFound = await getProfessorById(professor.id)

       if (professorFound) {
            reply.code(200).send(professorFound)
       }
        reply.code(404).send(`{
            "erro": "404",
            "message": "not found"
        }`)
    })

    fastify.post('/professores', async(request, reply)=> {
        const { nome, email } = request.body as User;
        try {
            const professorAdded = await addProfessorService(nome, email)
            reply.code(201).send(professorAdded)
        } catch (error) {
            reply.code(400).send(`{
                "erro": "400",
                "message": "bad request"
            }`)
        }
    })
}