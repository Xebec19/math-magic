import { Request, Response } from "express";

export function seqnHandler(req: Request, res: Response) {
  res.send("Hello, Seqn!");
}
