import express from "express";
import "dotenv/config";
import { dbConnection } from "./database/db.js";
import { createGames } from "./entities/games/games.controller.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json())

app.get("/healthy", (req, res) => {
  res.json({
    success: true,
    message: "Server is healthy",
  });
});

app.post ('/games', createGames);

dbConnection()
  .then(() => {
    console.log("Database connected");
    app.listen(PORT, () => {
      console.log(`Server is runing in ${PORT}`);
    });
  })
  .catch((error)=>{console.log("Authentication failed "+error)});
