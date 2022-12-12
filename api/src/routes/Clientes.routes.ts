import { Router } from "express";
import {
  getClientes,
  createClientes,
  updateClientes,
  getCliente,
  deleteCliente,
} from "../controllers/clientes";

const Clientes = Router();

// Routes
Clientes.post("/", createClientes);
Clientes.get("/", getClientes);
Clientes.put("/:id", updateClientes);
Clientes.delete("/:id", deleteCliente);
Clientes.get("/:id", getCliente);



export default Clientes;
