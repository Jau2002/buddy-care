import { Router } from "express";
import {
  getCommerces,
  createCommerces,
  updateCommerces,
  getCommerce,
  deleteCommerce,
} from "../controllers/commerces";

const Commerces = Router();

// Routes
Commerces.post("/", createCommerces);
Commerces.get("/", getCommerces);
Commerces.put("/:id", updateCommerces);
Commerces.delete("/:id", deleteCommerce);
Commerces.get("/:id", getCommerce);


export default Commerces;
