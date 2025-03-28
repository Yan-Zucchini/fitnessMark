import dotenv from 'dotenv'

dotenv.config()

export const config = {
  port: process.env.PORT ? Number(process.env.PORT) : 7070,
  env: process.env.NODE_ENV || 'development'
}