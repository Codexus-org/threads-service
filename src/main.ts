import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import cookieParser from "cookie-parser"
import threadRoutes from "./routes/thread.routes"
import { middlewareCheckOrigin } from "./middleware/middleware.check-origin"

dotenv.config()
const app = express()
app.use(express.json())
app.use(cookieParser())

mongoose.connect(process.env.MONGO_URI as string)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log(err))

app.use(middlewareCheckOrigin)

app.use("/forumapp/api/v1/threads-services", threadRoutes)

app.listen(process.env.PORT, () => {console.log(`Server running on port ${process.env.PORT}`)})