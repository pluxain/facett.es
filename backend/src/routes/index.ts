import { Request, Response, Router } from "express";
const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server with router middleware");
});

router.get("/about", (_req, res) => {
  res.send("About endpoint defined in the router middleware");
});

export { router };
