import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

export function validate(schema: AnyZodObject) {
  return async function (req: Request, res: Response, next: NextFunction) {
    const { body, query, params } = req;
    try {
      await schema.parseAsync({
        body,
        query,
        params,
      });
      return next();
    } catch (error) {
      return res.status(400).json(error);
    }
  };
}
