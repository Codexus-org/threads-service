import express from "express";
import ThreadControllers from "../controllers/threads.controller";
import { verifyAccessToken } from "../middleware/auth.middleware";

const threadRoutes = express.Router();

threadRoutes.get("/", ThreadControllers.handleGetAllThreads);
threadRoutes.post("/", verifyAccessToken, ThreadControllers.handleCreateThread);
threadRoutes.get("/:threadId", ThreadControllers.handleGetThreadById);
threadRoutes.patch("/:threadId", verifyAccessToken, ThreadControllers.handleUpdateThread);
threadRoutes.delete("/:threadId", verifyAccessToken, ThreadControllers.handleDeleteThread);
threadRoutes.get("/user/:userId", ThreadControllers.handleGetUserThreads);

export default threadRoutes;