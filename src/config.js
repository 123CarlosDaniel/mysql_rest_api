import { config } from 'dotenv'
config()

export const DB_HOST = process.env.MYSQL_HOST 
export const DB_USER = process.env.MYSQL_ROOT
export const DB_PASSWORD = process.env.MYSQL_PASSWORD
export const DB_PORT = process.env.MYSQL_PORT
export const DB_DATABASE = process.env.MYSQL_DB
