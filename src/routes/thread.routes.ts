import express from "express";
import ThreadControllers from "../controllers/threads.controller";
import authMiddleware from "../middleware/auth.middleware";

const threadRoutes = express.Router();

threadRoutes.get("/", ThreadControllers.handleGetAllThreads);
threadRoutes.post("/", authMiddleware, ThreadControllers.handleCreateThread);
threadRoutes.get("/:threadId", ThreadControllers.handleGetThreadById);
threadRoutes.patch("/:threadId", ThreadControllers.handleUpdateThread);
threadRoutes.delete("/:threadId", ThreadControllers.handleDeleteThread);

export default threadRoutes;