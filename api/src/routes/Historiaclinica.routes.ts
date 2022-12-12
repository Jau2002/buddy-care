import { Router } from "express";
import {
  getHistoriaclinicas,
  createHistoriaclinicas,
  updateHistoriaclinicas,
  getHistoriaclinica,
  deleteHistoriaclinica,
} from "../controllers/historiaclinica";

const Historiaclinica = Router();

// Routes
Historiaclinica.post("/", createHistoriaclinicas);
Historiaclinica.get("/", getHistoriaclinicas);
Historiaclinica.put("/:id", updateHistoriaclinicas);
Historiaclinica.delete("/:id", deleteHistoriaclinica);
Historiaclinica.get("/:id", getHistoriaclinica);


export default Historiaclinica;
