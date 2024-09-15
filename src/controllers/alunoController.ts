import  { FastifyInstance } from "fastify";
import { getAlunoById } from "../services/aluno_services/getAlunoService";
import { addAlunoService } from "../services/aluno_services/addAlunoService";
import { deleteAlunoService } from "../services/aluno_services/deleteAlunoService";
import { updateAlunoService } from "../services/aluno_services/updateAlunoService";
import { badRequest, notFound } from "../lib/errorMessage";




export default function alunosController(fastify: FastifyInstance) {

    // delete aluno

    fastify.delete('/purge/alunos/:id', async (request, reply) => {
        const aluno: User = request.params as User
        try {
            const deleted = await deleteAlunoService(aluno.id) 
            reply.code(202).send(`{
                "deleted": ${deleted.nome}
            }`)    
            
        } catch (error) {
            reply.code(404).send(notFound)  
        }
    })

    // encontra um aluno pelo id
    fastify.get('/alunos/:id', async (request, reply) => {
        const aluno: User = request.params as User;
        const result = await getAlunoById(aluno.id);
        if (result) {
            reply.code(200).send(result)
        }
        reply.code(404).send(notFound)
        
    }
    );

    // add aluno

    fastify.post('/alunos', async(request, reply) => {
        const { nome, email } = request.body as User;
        try {
            const result = await addAlunoService(nome, email);
            reply.code(201).send(result)
            
        } catch (error) {
            reply.code(400).send(badRequest)
            
        }
    })

    // update aluno

    fastify.patch('/alunos', async(request, reply)=>{
        const aluno: User = request.body as User;
        try {
            const result = await updateAlunoService(aluno);
            reply.code(200).send(result)
            
        } catch (error) {
            reply.code(400).send(badRequest)
        }
    } )

    
    
}
 