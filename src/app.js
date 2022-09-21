import express from 'express'
import employeesRoutes from './routes/employees.routes.js'

const app = express()

app.use(express.json())
app.get("/", (req,res) => {
  console.log("hola")
  res.send("hola mundo")
})

app.use("/api/v1",employeesRoutes)

export default app
