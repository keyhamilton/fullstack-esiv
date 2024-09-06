import fastify, { FastifyInstance } from "fastify";

export default function myController(fastify: FastifyInstance) {
    fastify.get('/', async (resquest, reply) => {
        return 'worked with a controller'
    })
}
