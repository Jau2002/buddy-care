import { Router } from "express";
import {
  getRubros,
  createRubros,
  updateRubros,
  getRubro,
  deleteRubro,
} from "../controllers/rubros";

const Rubros = Router();

// Routes
Rubros.post("/", createRubros);
Rubros.get("/", getRubros);
Rubros.put("/:id", updateRubros);
Rubros.delete("/:id", deleteRubro);
Rubros.get("/:id", getRubro);


export default Rubros;
