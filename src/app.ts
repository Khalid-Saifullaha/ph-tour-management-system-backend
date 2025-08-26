import express, { NextFunction, Request, Response } from "express";
import { UserRoutes } from "./app/modules/user/user.route";
import core from "cors";
import { router } from "./app/routes";
import { success } from "zod";
import { envVars } from "./app/config/env";
import { globalErrorHandler } from "./app/middleware/globalErrorHandler";
import httpStatus from "http-status-codes";
import notFound from "./app/middleware/notFound";

const app = express();

app.use(express.json());
app.use(core());

app.use("/api/v1", router);

app.get("/", (req: Request, res: Response) => {
  res.status(200).json({
    message: " Welcome to Tour Management System Backend",
  });
});

app.use(globalErrorHandler);

app.use(notFound);

export default app;
