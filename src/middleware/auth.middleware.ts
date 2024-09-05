import jwt from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

const authMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    // const { accessToken, refreshToken } = req.cookies;
    const { accessToken, refreshToken } = req.body.tokens;

    if (!accessToken && !refreshToken) {
        return res.status(401).json({ message: "Unauthorized" });
    }

    if (accessToken) {
      const payload = jwt.decode(accessToken) as { id: string; name: string; email: string };
      req.body.authUser = payload;
      next();
    }
};

export default authMiddleware;