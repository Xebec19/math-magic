import { Response } from "express";

export function successResponse(
  res: Response,
  data: Record<string, any> | Record<string, any>[],
  message = "Success"
) {
  return res.status(200).json({
    status: "success",
    message,
    data,
  });
}
