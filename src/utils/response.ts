import { Response } from "express";

export function successResponse(res: Response, data: number) {
  return res.status(200).send(data.toString());
}
