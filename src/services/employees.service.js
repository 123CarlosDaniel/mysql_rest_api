import { pool } from "../db.js";

export const getEmployeesFromDb = async () => {
  const [data] = await pool.query("select * from employee")
  return data
}

export const getEmployeeFromDb = async (id) => {
  const [res] = await pool.query("select * from employee where id = ?", [id])
  return res[0]
}

export const createEmployeeInDb = async ({name, salary}) => {
  const [data] = await pool.query("insert into employee(name,salary) values (?,?)", [name,salary])
  return {
    id : data.insertId,
    name,
    salary
  }
}

export const updateEmployeeInDb = async (id,{name,salary}) => {
  const [result] = await pool.query("update employee set name = ifnull(?,name), salary=ifnull(?,salary) where id =?", [name,salary,id])
  return result
}

export const deleteEmployeeFromDb = async (id) => {
  const [result] = await pool.query("delete from employee where id = ?", [id])
  return result
}