import { Router } from "express";
import {
  getVeterinarios,
  createVeterinarios,
  updateVeterinarios,
  getVeterinario,
  deleteVeterinario,
} from "../controllers/veterinarios";

const Veterinarios = Router();

// Routes
Veterinarios.post("/", createVeterinarios);
Veterinarios.get("/", getVeterinarios);
Veterinarios.put("/:id", updateVeterinarios);
Veterinarios.delete("/:id", deleteVeterinario);
Veterinarios.get("/:id", getVeterinario);


export default Veterinarios;
