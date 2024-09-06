import fastify from "fastify";

import alunosController from "./controllers/alunoController";

const app = fastify();

// alunoController faz operações de CRUD de alunos

alunosController(app);

app.listen({port: 3333}, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`)
});