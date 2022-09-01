import { Router } from "express";
import * as battleController from "../controllers/battleController"

const routes = Router()

routes.post("/battle", battleController.compareStars)

export default routes
