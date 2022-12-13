import { Request, Response } from 'express';
import  sequelize  from "../config/db";


export async function getQuery(req:Request, res:Response) {

    const {miquery} = req.body;
    try {
        const [results] = await sequelize.query(miquery);
        res.json(results);
    } catch (error) {
      res.status(500).json({
        message: (error as Error).message,
      });
    }
  };