import { Router } from "express";
import { createGames, deleteGameById, getAllGames } from "./games.controller.js";

const router = Router();

router.post('/', createGames)
router.get('/', getAllGames)
router.delete('/:id', deleteGameById)


export {router}