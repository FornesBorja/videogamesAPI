import Game from "./game.model.js";

export const createGames = async (req, res) => {
  try {
    const { title, description } = req.body;
    if (!title || !description) {
      throw new Error("Title and description are required");
    }
    const newGame = await Game.create({
      title,
      description,
    });
    return res.status(201).json({
      success: true,
      message: "Game created successfully",
      data: newGame,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error creating game",
      error: error.message,
    });
  }
};

export const getAllGames = async (req, res) => {
  try {
    const allGames = await Game.find();
    return res.status(201).json({
      success: true,
      message: "Games retrieved successfully",
      data: allGames,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error retrieving games",
      error: error.message,
    });
  }
};

export const deleteGame = async (req, res) => {
  try {
    const id = req.params.id;
    const deleteOne = await Game.findByIdAndDelete(id);
    if (!deleteOne) {
      throw new Error("The id doesn't exist");
    }
    return res.status(201).json({
      success: true,
      message: "Games deleted successfully",
      data: deleteOne,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Error deleting games",
      error: error.message,
    });
  }
};
