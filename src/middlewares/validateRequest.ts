import { deoptional } from "./../../node_modules/zod/lib/types.d";
import { NextFunction, Request, Response } from "express";
import { z, ZodError } from "zod";

export const validateRequest =
  (schema: z.AnyZodObject) =>
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      schema.parse(req.body);
      next();
    } catch (error) {
      if (error instanceof ZodError) {
        const errorMsg = error.issues.map((err) => err.message);

        console.log(error);

        return res.status(500).json({
          error: "invalid request",
          details: errorMsg,
        });
      }

      return res.status(500).json({ error: "Internal Server Error" });
    }
  };
