import { FastifyRequest, FastifyReply } from "fastify";
import { pool } from "../config/db";

export const statusController = async (request: FastifyRequest, reply: FastifyReply) => {
  reply.send({ message: "Server Rodando"})
}

export const getUserController = async (request: FastifyRequest, reply: FastifyReply) => {
  try{
    const { rows } = await pool.query('SELECT * FROM USERS')
    return rows
  } catch(err){
    console.log(err)
    return reply.status(500).send({error: 'Erro ao buscar usuários'})
  }
}