import { Request, Response, Router } from "express";
import { countries } from "./countries";
const router = Router();

router.get("/", (_req: Request, res: Response) => {
  res.send("Express + TypeScript Server with router middleware");
});

router.get("/about", (_req, res) => {
  res.send("About endpoint defined in the router middleware");
});

router.use("/countries", countries);

// KEEP LAST!
// Catch all route -> 404
router.use((_req, res) => {
  res.status(404).send("Error 404 - Resource not found");
});

export { router };
