import { Router } from "express";
import {
  getVeterinarias,
  createVeterinarias,
  updateVeterinarias,
  getVeterinaria,
  deleteVeterinaria,
} from "../controllers/veterinarias";

const Veterinarias = Router();

// Routes
Veterinarias.post("/", createVeterinarias);
Veterinarias.get("/", getVeterinarias);
Veterinarias.put("/:id", updateVeterinarias);
Veterinarias.delete("/:id", deleteVeterinaria);
Veterinarias.get("/:id", getVeterinaria);


export default Veterinarias;
