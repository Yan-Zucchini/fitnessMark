import { FastifyInstance } from "fastify";
import { getUserController, statusController } from "../controllers/user.controller";


export async function userRoutes(fastify: FastifyInstance){
  fastify.get('/', statusController)
  fastify.get('/users', getUserController)  
}
