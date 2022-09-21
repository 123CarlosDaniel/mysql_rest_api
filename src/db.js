import {createPool} from 'mysql2/promise'

export const pool = createPool({
  host: "localhost",
  user : "root",
  password : "password" ,
  port : 3307,
  database : "companydb"
}) 