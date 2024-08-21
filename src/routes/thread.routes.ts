import express from "express";
import ThreadControllers from "../controllers/threads.controller";

const threadRoutes = express.Router();

threadRoutes.get("/", ThreadControllers.handleGetAllThreads);
threadRoutes.post("/", ThreadControllers.handleCreateThread);
threadRoutes.get("/:threadId", ThreadControllers.handleGetThreadById);
threadRoutes.patch("/:threadId", ThreadControllers.handleUpdateThread);
threadRoutes.delete("/:threadId", ThreadControllers.handleDeleteThread);

export default threadRoutes;