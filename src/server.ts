import fastify from "fastify";

import alunosController from "./controllers/alunoController";
import professorController from "./controllers/professorController";
import disciplinaController from "./controllers/disciplinaController";
import adminController from "./controllers/adminController";

const app = fastify();

// alunoController faz operações de CRUD de alunos

alunosController(app);
// professorController são as rotas para o CRUD relacionado aos professores
professorController(app);

// disciplinaController cuida das rotas direcionadas ao CRUD para disciplinas
disciplinaController(app);
// adminController inclui ou exclui alunos das disciplinas
adminController(app);

app.listen({port: 3333}, (err, address) => {
    if(err) {
        console.error(err);
        process.exit(1);
    }
    console.log(`Server listening at ${address}`)
});