import  { FastifyInstance } from "fastify";
import { getAlunoById } from "../services/aluno_services/getAlunoService";
import { addAlunoService } from "../services/aluno_services/addAlunoService";
import { deleteAlunoService } from "../services/aluno_services/deleteAlunoService";
import { updateAlunoService } from "../services/aluno_services/updateAlunoService";



export default function alunosController(fastify: FastifyInstance) {

    // delete aluno

    fastify.delete('/purge/alunos/:id', async (request, reply) => {
        const aluno: Aluno = request.params as Aluno
        try {
            const deleted = await deleteAlunoService(aluno.id) 
            reply.code(202).send(`{
                "deleted": ${deleted.nome}
            }`)    
            
        } catch (error) {
            reply.code(404).send(`{
                "erro": "404",
                "message": "not found"
            }`)  
        }
    })

    // encontra um aluno pelo id
    fastify.get('/alunos/:id', async (request, reply) => {
        const aluno: Aluno = request.params as Aluno;
        const result = await getAlunoById(aluno.id);
        if (result) {
            reply.code(200).send(result)
        }
        reply.code(404).send(`{
            "erro": "404",
            "message": "not found"
            }`)
        
    }
    );

    // add aluno

    fastify.post('/alunos', async(request, reply) => {
        const { nome, email } = request.body as Aluno;
        const result = await addAlunoService(nome, email);
        reply.code(201).send(result)
    })

    // update aluno

    fastify.patch('/alunos', async(request, reply)=>{
        const aluno: Aluno = request.body as Aluno;
        const result = await updateAlunoService(aluno);
        reply.code(200).send(result)
    } )

    
    
}
 