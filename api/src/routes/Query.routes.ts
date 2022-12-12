import { Router } from "express";
import {
  getQuery,
} from "../controllers/query";

const Query = Router();

// Routes
Query.get("/", getQuery);
 

export default Query;
