import { Router } from "express";
import {
  getMascotas,
  createMascotas,
  updateMascotas,
  getMascota,
  deleteMascota,
} from "../controllers/mascotas";

const Mascotas = Router();

// Routes
Mascotas.post("/", createMascotas);
Mascotas.get("/", getMascotas);
Mascotas.put("/:id", updateMascotas);
Mascotas.delete("/:id", deleteMascota);
Mascotas.get("/:id", getMascota);


export default Mascotas;
