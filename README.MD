# Welcome to Videogames API

<details>
    <summary>Steps to follow</summary>

- Basic structure

    - npm i express
    - Make server.js file
    - Import express in server.js and make basic structure. (see server.js for a basic template)
    - npm i nodemon
    - npm i dotenv
    - Make "healthy" endpoint to be sure server works.

- Connection to DB

    - npm i mongoose
    - Create src/database/db.js and configure database
    - Create MONGO_URI in .env 
    - Call DB in server.js

- Models making
    - Create src/entities for models
    - Create a folder for every entity and then with use the example.model.js name
    - Import schema and model from mongoose
    - Create schema. (see game.model.js for a basic template)
    - Create model. (see game.model.js for a basic template)
    - Export model.

Before doing any endpoint we need to make the controllers.

- Controller making
    - Create the file we want to do the controler (inside the folder entities) with the structure example.controller.js
    FOR A CREATE:
    - Recover the info. (see games.controller.js for a basic template)
    - Make sure the info exist. (see games.controller.js for a basic template)
        -  Handle the info if needed.
    - Answer with the info.
    FOR A READ:
    - Recover the info
    - Answer with the info
    FOR AN UPDATE:
        
- Abstract the routes in other files to take the responsability
    - Import router from express (see games.routes.js for a basic template)
    - Create const router (see games.routes.js for a basic template)
    - Create routes (see games.routes.js for a basic template)
    - Export router (see games.routes.js for a basic template)
    - Go to server.js and "export" the routes (```app.use('/games', gamesRoutes) ```)


</details>

<details>
    <summary>Endpoints</summary>

    - CREATE GAME

        POST http://localhost:2626/games
        
        Body:

        ``` js
            {
                "title": "Stardew Valley",
                "description": "A farm game"
            }
        ```

</details>

