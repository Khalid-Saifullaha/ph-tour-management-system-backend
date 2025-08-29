import { ZodObject, ZodRawShape, z } from "zod";
import { NextFunction, Request, Response } from "express";

type AnyZodObject = ZodObject<ZodRawShape>;

export const validateRequest =
  (zodSchema: AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      req.body = await zodSchema.parseAsync(req.body);
      next();
    } catch (error) {
      next(error);
    }
  };
