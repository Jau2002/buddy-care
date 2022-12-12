import { Router } from "express";
import {
  getArticulos,
  createArticulos,
  updateArticulos,
  getArticulo,
  deleteArticulo,
} from "../controllers/articulos";

const Articulos = Router();

// Routes
Articulos.post("/", createArticulos);
Articulos.get("/", getArticulos);
Articulos.put("/:id", updateArticulos);
Articulos.delete("/:id", deleteArticulo);
Articulos.get("/:id", getArticulo);


export default Articulos;
