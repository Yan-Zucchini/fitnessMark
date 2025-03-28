import { FastifyInstance } from "fastify";
import { userRoutes } from "./user.routes";


export async function setupRoutes(fastify:FastifyInstance) {
  await fastify.register(userRoutes, {prefix: '\api'})
}