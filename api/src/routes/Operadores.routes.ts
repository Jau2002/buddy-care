import { Router } from "express";
import {
  getOperadors,
  createOperadors,
  updateOperadors,
  getOperador,
  deleteOperador,
} from "../controllers/operadores"

const Operadores = Router();

// Routes
Operadores.post("/", createOperadors);
Operadores.get("/", getOperadors);
Operadores.put("/:id", updateOperadors);
Operadores.delete("/:id", deleteOperador);
Operadores.get("/:id", getOperador);


export default Operadores;