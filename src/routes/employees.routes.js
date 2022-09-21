import { Router } from "express";
import { deleteEmployee, getEmployee, getEmployees, patchEmployee, postEmployee } from "../controllers/employees.controller.js";

const router = Router()

router.get("/", getEmployees)

router.get("/:id", getEmployee)

router.post("/", postEmployee)

router.patch("/:id", patchEmployee)

router.delete("/:id", deleteEmployee)

export default router