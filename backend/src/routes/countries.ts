import { Request, Response, Router } from "express";
const countries = Router();

countries.get("/", (_req: Request, res: Response) => {
  res.send("countries entrypoint");
});

export { countries };
