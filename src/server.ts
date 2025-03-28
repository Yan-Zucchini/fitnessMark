import fastify from "fastify";
import cors from "@fastify/cors"
import {setupRoutes} from "./routes"
import {config} from "../config"

const server = fastify()

server.register(cors, {origin: '*'})

setupRoutes(server)

const startServer = async () => {
  try{
    await server.listen({port: config.port})
    console.log("Servidor rodando na porta 7070")
  }catch(error) {
    console.error('Erro a iniciar o servidor:', error)
    process.exit(1)
  }
}

startServer()