import { Router } from "express";
import battleRoute from "../routes/battleRoute"

const routes = Router()

routes.use(battleRoute)

export default routes
