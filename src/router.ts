import express from "express";
import { seqnHandler } from "./controllers";

const router = express.Router();

router.get("/v1/math-magic/:num", seqnHandler);

export default router;
