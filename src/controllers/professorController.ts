import { FastifyInstance } from "fastify";
import { getProfessorById } from "../services/professor_services/getProfessorService";


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
}