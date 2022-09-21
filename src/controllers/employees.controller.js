import {
  createEmployeeInDb,
  deleteEmployeeFromDb,
  getEmployeeFromDb,
  getEmployeesFromDb,
  updateEmployeeInDb,
} from '../services/employees.service.js'

const getEmployees = async (req, res) => {
  try {
    const employees = await getEmployeesFromDb()
    res.status(200).json(employees)
  } catch (error) {
    res.status(500).send({ error: error.message })
  }
}

const getEmployee = async (req, res) => {
  try {
    const id = req.params.id
    const employee = await getEmployeeFromDb(id)
    if (employee === undefined) {
      const error = new Error(`Employee not found with id ${id}`)
      error.status = 404
      throw error
    }
    res.json(employee)
  } catch (error) {
    res.status(error?.status || 500).send({ error: error.message })
  }
}

const postEmployee = async (req, res) => {
  try {
    const { name, salary } = req.body
    if (name == null && salary == null) {
      const error = new Error('Missing fields')
      error.status = 400
      throw error
    }
    const employee = await createEmployeeInDb({ name, salary })
    res.status(201).json({ employee })
  } catch (error) {
    res.status(error?.status || 500).send({ error: error.message })
  }
}

const patchEmployee = async (req, res) => {
  try {
    const id = req.params.id
    const { name, salary } = req.body
    if (name == null && salary == null) {
      const error = new Error('Missing fields')
      error.status = 400
      throw error
    }
    const updated = await updateEmployeeInDb(id, { name, salary })
    if (updated.affectedRows === 0) {
      const error = new Error(`Employee with id ${id} not found`)
      error.status = 404
      throw error
    }
    res.json({ message: 'updated successfully' })
  } catch (error) {
    res.status(error?.status || 500).send({ error: error.message })
  }
}

const deleteEmployee = async (req, res) => {
  try {
    const id = req.params.id
    const deleted = await deleteEmployeeFromDb(id)
    if (deleted.affectedRows === 0) {
      const error = new Error(`Employee with id ${id} not found`)
      error.status = 404
      throw error
    }
    res.json({ message: `deleted employee id = ${id}` })
  } catch (error) {
    res.status(error.status || 500).send({ error: error.message })
  }
}

export {
  getEmployees,
  getEmployee,
  postEmployee,
  patchEmployee,
  deleteEmployee,
}
