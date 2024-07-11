import { Router } from "express";
import { createGames, getAllGames } from "./games.controller.js";

const router = Router();

router.post('/', createGames)
router.get('/', getAllGames)

export {router}