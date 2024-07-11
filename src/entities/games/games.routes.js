import { Router } from "express";
import { createGames, deleteGame, getAllGames } from "./games.controller.js";

const router = Router();

router.post('/', createGames)
router.get('/', getAllGames)
router.delete('/:id', deleteGame)


export {router}