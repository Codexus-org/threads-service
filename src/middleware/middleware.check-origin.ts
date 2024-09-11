import { NextFunction, Request, Response } from "express";

export async function middlewareCheckOrigin(req: Request, res: Response, next: NextFunction) {
  if (req.headers.host === 'localhost:3001') {
    return next();
  }

  return res.status(403).json({ message: 'Forbidden' });
}