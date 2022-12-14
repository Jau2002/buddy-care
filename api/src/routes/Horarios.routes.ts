import { Router } from "express";
import {
  getHorarios,
  createHorarios,
  updateHorarios,
  getHorario,
  deleteHorario,
} from "../controllers/horarios";

const Horarios = Router();

// Routes
Horarios.post("/", createHorarios);
Horarios.get("/", getHorarios);
Horarios.put("/:id", updateHorarios);
Horarios.delete("/:id", deleteHorario);
Horarios.get("/:id", getHorario);



export default Horarios;
