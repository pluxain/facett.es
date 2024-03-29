import { Request, Response, Router } from "express";
import { db, schema } from "../database";
const router = Router();

// TODO: seed the countries table
router.get("/", (_req: Request, res: Response) => {
  const countries = db.select().from(schema.countries);
  res.send(countries.all());
});

export { router as countries };
