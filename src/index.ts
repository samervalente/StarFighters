import express from "express";
import cors from "cors"
import dotenv from "dotenv"
import routes from "./routes/index"
dotenv.config()

const app = express()

app.use([cors(), express.json()])


app.use(routes)


app.listen(4000)