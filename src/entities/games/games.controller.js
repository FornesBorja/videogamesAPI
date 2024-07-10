import Game from "./game.model.js";

 export const createGames = async (req, res) =>
 {
    try {
        const {title, description}=req.body;
        if(!title||!description)
        {
            throw new Error ("Title and description are required");
        }
         const newGame=await Game.create(
            {
                title,
                description
            }
         )
         return res.status(201).json({
            success:true,
            message: "Game created succesfully",
            data: newGame
        })

    } catch (error) {
        return res.status(500).json({
            success:false,
            message: "Error creating game",
            error: error.message
        })
    }
 }