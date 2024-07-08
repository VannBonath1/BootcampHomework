import { Request, Response, NextFunction } from "express";

export function loggerMiddleware(
  req: Request,
  _res: Response,
  next: NextFunction
) {
  const method = req.method;
  const url = req.url;
  const timestamp = new Date().toISOString();

  console.log(`[${timestamp}] ${method} ${url}`);

  next();
}
