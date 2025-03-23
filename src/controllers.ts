import { Request, Response } from "express";
import { successResponse } from "./utils/response";

export function seqnHandler(req: Request, res: Response) {
  const num = parseInt(req.params.num, 10);

  const magicNum = calcSeqn(num);
  successResponse(res, magicNum);
}

/**
 * @description Function to calculate the sequence number
 * @param {number} num - The number to calculate the sequence
 * @returns {number} - The calculated sequence number
 */
function calcSeqn(num: number) {
  if (num === 0) return 0;
  if (num === 1) return 1;

  let prev2 = 0,
    prev1 = 1,
    current = 0;
  for (let i = 2; i <= num; i++) {
    current = prev1 + prev2 + i;
    prev2 = prev1;
    prev1 = current;
  }

  return current;
}
