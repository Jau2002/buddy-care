import { Router } from "express";
import {
  getCarritos,
  createCarritos,
  updateCarritos,
  getCarrito,
  deleteCarrito,
} from "../controllers/carrito";

const Carrito = Router();

// Routes
Carrito.post("/", createCarritos);
Carrito.get("/", getCarritos);
Carrito.put("/:id", updateCarritos);
Carrito.delete("/:id", deleteCarrito);
Carrito.get("/:id", getCarrito);


export default Carrito;
