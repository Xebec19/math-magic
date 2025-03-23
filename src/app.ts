import express, { NextFunction, Request, Response } from "express";
import cors from "cors";
import pinoHttp from "pino-http";
import router from "./router";
import logger from "./utils/logger";

const app = express();
const pinoMiddleware = pinoHttp({ logger });

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors());
app.use(pinoMiddleware);

app.use("/api", router);

app.use((err: any, req: Request, res: Response, next: NextFunction) => {
  console.error("--error caught : ", err.stack);
  res.status(500).send("Something broke!").end();
});

export default app;
